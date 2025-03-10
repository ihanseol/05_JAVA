hljs.registerLanguage("python", (() => {
    "use strict";

    return grammar => {
        const keywords = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: [
                "and", "as", "assert", "async", "await", "break",
                "class", "continue", "def", "del", "elif", "else",
                "except", "finally", "for", "from", "global", "if",
                "import", "in", "is", "lambda", "nonlocal|10", "not",
                "or", "pass", "raise", "return", "try", "while",
                "with", "yield"
            ].join(" "),
            built_in: [
                "__import__", "abs", "all", "any", "ascii", "bin",
                "bool", "breakpoint", "bytearray", "bytes", "callable",
                "chr", "classmethod", "compile", "complex", "delattr",
                "dict", "dir", "divmod", "enumerate", "eval", "exec",
                "filter", "float", "format", "frozenset", "getattr",
                "globals", "hasattr", "hash", "help", "hex", "id",
                "input", "int", "isinstance", "issubclass", "iter",
                "len", "list", "locals", "map", "max", "memoryview",
                "min", "next", "object", "oct", "open", "ord", "pow",
                "print", "property", "range", "repr", "reversed",
                "round", "set", "setattr", "slice", "sorted",
                "staticmethod", "str", "sum", "super", "tuple",
                "type", "vars", "zip"
            ].join(" "),
            literal: "__debug__ Ellipsis False None NotImplemented True",
            type: [
                "Any", "Callable", "Coroutine", "Dict", "List",
                "Literal", "Generic", "Optional", "Sequence", "Set",
                "Tuple", "Type", "Union"
            ].join(" ")
        };

        const prompt = { className: "meta", begin: /^(>>>|\.\.\.) / };
        const subst = { 
            className: "subst", 
            begin: /\{/, 
            end: /\}/, 
            keywords: keywords, 
            illegal: /#/ 
        };
        const doubleBrace = { begin: /\{\{/, relevance: 0 };
        const numberPrefix = "[0-9](_?[0-9])*";
        const floatPattern = `(\\b(${numberPrefix}))?\\.(${numberPrefix})|\\b(${numberPrefix})\\.`;

        const string = {
            className: "string",
            contains: [grammar.BACKSLASH_ESCAPE],
            variants: [
                { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/, contains: [grammar.BACKSLASH_ESCAPE, prompt], relevance: 10 },
                { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/, contains: [grammar.BACKSLASH_ESCAPE, prompt], relevance: 10 },
                { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [grammar.BACKSLASH_ESCAPE, prompt, doubleBrace, subst] },
                { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [grammar.BACKSLASH_ESCAPE, prompt, doubleBrace, subst] },
                { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
                { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
                { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
                { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
                { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [grammar.BACKSLASH_ESCAPE, doubleBrace, subst] },
                { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [grammar.BACKSLASH_ESCAPE, doubleBrace, subst] },
                grammar.APOS_STRING_MODE,
                grammar.QUOTE_STRING_MODE
            ]
        };

        const number = {
            className: "number",
            relevance: 0,
            variants: [
                { begin: `(\\b(${numberPrefix})|(${floatPattern}))[eE][+-]?(${numberPrefix})[jJ]?\\b` },
                { begin: `(${floatPattern})[jJ]?` },
                { begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b" },
                { begin: "\\b0[bB](_?[01])+[lL]?\\b" },
                { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" },
                { begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b" },
                { begin: `\\b(${numberPrefix})[jJ]\\b` }
            ]
        };

        const typeComment = {
            className: "comment",
            begin: /(?=# type:)/,
            end: /$/,
            keywords: keywords,
            contains: [
                { begin: /# type:/ },
                { begin: /#/, end: /\b\B/, endsWithParent: true }
            ]
        };

        const params = {
            className: "params",
            variants: [
                { className: "", begin: /\(\s*\)/, skip: true },
                { 
                    begin: /\(/, 
                    end: /\)/, 
                    excludeBegin: true, 
                    excludeEnd: true,
                    keywords: keywords,
                    contains: ["self", prompt, number, string, grammar.HASH_COMMENT_MODE]
                }
            ]
        };

        subst.contains = [string, number, prompt];

        return {
            name: "Python",
            aliases: ["py", "gyp", "ipython"],
            keywords: keywords,
            illegal: /(<\/|->|\?)|=>/,
            contains: [
                prompt,
                number,
                { begin: /\bself\b/ },
                { beginKeywords: "if", relevance: 0 },
                string,
                typeComment,
                grammar.HASH_COMMENT_MODE,
                {
                    variants: [
                        { className: "function", beginKeywords: "def" },
                        { className: "class", beginKeywords: "class" }
                    ],
                    end: /:/,
                    illegal: /[${=;\n,]/,
                    contains: [
                        grammar.UNDERSCORE_TITLE_MODE,
                        params,
                        { begin: /->/, endsWithParent: true, keywords: keywords }
                    ]
                },
                {
                    className: "meta",
                    begin: /^[\t ]*@/,
                    end: /(?=#)|$/,
                    contains: [number, params, string]
                }
            ]
        };
    };
})());