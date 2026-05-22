hljs.registerLanguage("ruby", (() => {
  "use strict";

  // 여러 문자열 또는 패턴을 결합하는 유틸리티 함수
  function combinePatterns(...patterns) {
    return patterns
      .map(pattern => {
        if (!pattern) return null;
        return typeof pattern === "string" ? pattern : pattern.source;
      })
      .join("");
  }

  return (hljs) => {
    // 기본 식별자 패턴
    const IDENT_PATTERN = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";

    // 키워드 정의
    const KEYWORDS = {
      keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
      built_in: "proc lambda",
      literal: "true false nil"
    };

    // 문서 태그 (예: @param)
    const DOC_TAG = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    };

    // #<...> 형태의 참조
    const REFERENCE = {
      begin: "#<",
      end: ">"
    };

    // 주석들
    const COMMENTS = [
      hljs.COMMENT("#", "$", { contains: [DOC_TAG] }),
      hljs.COMMENT("^=begin", "^=end", { contains: [DOC_TAG], relevance: 10 }),
      hljs.COMMENT("^__END__", "\\n$")
    ];

    // 문자열 내 #{...} 보간
    const SUBST = {
      className: "subst",
      begin: /#{/,
      end: /}/,
      keywords: KEYWORDS
    };

    // 문자열 정의
    const STRING = {
      className: "string",
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /`/, end: /`/ },
        { begin: /%[qQwWx]?\(/, end: /\)/ },
        { begin: /%[qQwWx]?\[/, end: /\]/ },
        { begin: /%[qQwWx]?\{/, end: /\}/ },
        { begin: /%[qQwWx]?</, end: />/ },
        { begin: /%[qQwWx]?\//, end: /\// },
        { begin: /%[qQwWx]?%/, end: /%/ },
        { begin: /%[qQwWx]?-/, end: /-/ },
        { begin: /%[qQwWx]?\|/, end: /\|/ },
        // 단일 문자 리터럴
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredoc
        {
          begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
          returnBegin: true,
          contains: [
            { begin: /<<[-~]?'?/ },
            hljs.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST]
            })
          ]
        }
      ]
    };

    // 숫자 패턴
    const NUMBER_PATTERN = "[0-9](_?[0-9])*";
    const NUMBER = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: `\\b([1-9](_?[0-9])*|0)(\\.(${NUMBER_PATTERN}))?([eE][+-]?(${NUMBER_PATTERN})|r)?i?\\b` },
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" }, // 10진수
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" }, // 2진수
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" }, // 8진수
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" }, // 16진수
        { begin: "\\b0(_?[0-7])+r?i?\\b" } // 0으로 시작하는 8진수
      ]
    };

    // 함수 파라미터
    const PARAMS = {
      className: "params",
      begin: "\\(",
      end: "\\)",
      endsParent: true,
      keywords: KEYWORDS
    };

    // 주요 토큰 정의
    const TOKENS = [
      STRING,
      {
        className: "class",
        beginKeywords: "class module",
        end: "$|;",
        illegal: /=/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?" }),
          {
            begin: "<\\s*",
            contains: [{ begin: `(${hljs.IDENT_RE}::)?${hljs.IDENT_RE}`, relevance: 0 }]
          }
        ].concat(COMMENTS)
      },
      {
        className: "function",
        begin: combinePatterns(/def\s+/, `(?=${IDENT_PATTERN}\\s*(\\(|;|$))`),
        relevance: 0,
        keywords: "def",
        end: "$|;",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_PATTERN }),
          PARAMS
        ].concat(COMMENTS)
      },
      { begin: hljs.IDENT_RE + "::" },
      { className: "symbol", begin: hljs.UNDERSCORE_IDENT_RE + "(!|\\?)?:", relevance: 0 },
      { className: "symbol", begin: ":(?!\\s)", contains: [STRING, { begin: IDENT_PATTERN }], relevance: 0 },
      NUMBER,
      { className: "variable", begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])" },
      { className: "params", begin: /\|/, end: /\|/, relevance: 0, keywords: KEYWORDS },
      {
        begin: `(${hljs.RE_STARTERS_RE}|unless)\\s*`,
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
            illegal: /\n/,
            variants: [
              { begin: "/", end: "/[a-z]*" },
              { begin: /%r\{/, end: /\}[a-z]*/ },
              { begin: "%r\\(", end: "\\)[a-z]*" },
              { begin: "%r!", end: "![a-z]*" },
              { begin: "%r\\[", end: "\\][a-z]*" }
            ]
          }
        ].concat(REFERENCE, COMMENTS),
        relevance: 0
      }
    ].concat(REFERENCE, COMMENTS);

    SUBST.contains = TOKENS;
    PARAMS.contains = TOKENS;

    // 추가 메타 정보
    const META = [
      { begin: /^\s*=>/, starts: { end: "$", contains: TOKENS } },
      {
        className: "meta",
        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts: { end: "$", contains: TOKENS }
      }
    ];

    return {
      name: "Ruby",
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      keywords: KEYWORDS,
      illegal: /\/\*/,
      contains: [
        hljs.SHEBANG({ binary: "ruby" })
      ].concat(META).concat(COMMENTS).concat(TOKENS)
    };
  };
})());