hljs.registerLanguage("r", (() => {
    "use strict";

    // Utility function to concatenate regex parts
    function concat(...parts) {
        return parts.map(part => {
            return part ? 
                (typeof part === "string" ? part : part.source) : 
                null;
        }).join("");
    }

    return grammar => {
        const identifier = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;

        return {
            name: "R",
            illegal: /->/,
            keywords: {
                $pattern: identifier,
                keyword: "function if in break next repeat else for while",
                literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                built_in: [
                    "LETTERS", "letters", "month.abb", "month.name", "pi", "T", "F",
                    "abs", "acos", "acosh", "all", "any", "anyNA", "Arg",
                    "as.call", "as.character", "as.complex", "as.double",
                    "as.environment", "as.integer", "as.logical", "as.null.default",
                    "as.numeric", "as.raw", "asin", "asinh", "atan", "atanh",
                    "attr", "attributes", "baseenv", "browser", "c", "call",
                    "ceiling", "class", "Conj", "cos", "cosh", "cospi",
                    "cummax", "cummin", "cumprod", "cumsum", "digamma",
                    "dim", "dimnames", "emptyenv", "exp", "expression",
                    "floor", "forceAndCall", "gamma", "gc.time", "globalenv",
                    "Im", "interactive", "invisible", "is.array", "is.atomic",
                    "is.call", "is.character", "is.complex", "is.double",
                    "is.environment", "is.expression", "is.finite", "is.function",
                    "is.infinite", "is.integer", "is.language", "is.list",
                    "is.logical", "is.matrix", "is.na", "is.name", "is.nan",
                    "is.null", "is.numeric", "is.object", "is.pairlist",
                    "is.raw", "is.recursive", "is.single", "is.symbol",
                    "lazyLoadDBfetch", "length", "lgamma", "list", "log",
                    "max", "min", "missing", "Mod", "names", "nargs", "nzchar",
                    "oldClass", "on.exit", "pos.to.env", "proc.time", "prod",
                    "quote", "range", "Re", "rep", "retracemem", "return",
                    "round", "seq_along", "seq_len", "seq.int", "sign",
                    "signif", "sin", "sinh", "sinpi", "sqrt", "standardGeneric",
                    "substitute", "sum", "switch", "tan", "tanh", "tanpi",
                    "tracemem", "trigamma", "trunc", "unclass", "untracemem",
                    "UseMethod", "xtfrm"
                ].join(" ")
            },
            compilerExtensions: [
                (grammar, match) => {
                    if (!grammar.beforeMatch) return;
                    if (grammar.starts) throw Error("beforeMatch cannot be used with starts");
                    
                    const copy = Object.assign({}, grammar);
                    Object.keys(grammar).forEach(key => delete grammar[key]);
                    
                    grammar.begin = concat(copy.beforeMatch, "(?=", copy.begin, ")");
                    grammar.starts = {
                        relevance: 0,
                        contains: [Object.assign(copy, { endsParent: true })]
                    };
                    grammar.relevance = 0;
                    delete copy.beforeMatch;
                }
            ],
            contains: [
                grammar.COMMENT(/#'/, /$/, {
                    contains: [
                        {
                            className: "doctag",
                            begin: "@examples",
                            starts: {
                                contains: [
                                    { begin: /\n/ },
                                    { 
                                        begin: /#'\s*(?=@[a-zA-Z]+)/,
                                        endsParent: true 
                                    },
                                    { 
                                        begin: /#'/,
                                        end: /$/,
                                        excludeBegin: true 
                                    }
                                ]
                            }
                        },
                        {
                            className: "doctag",
                            begin: "@param",
                            end: /$/,
                            contains: [{
                                className: "variable",
                                variants: [
                                    { begin: identifier },
                                    { begin: /`(?:\\.|[^`\\])+`/ }
                                ],
                                endsParent: true
                            }]
                        },
                        { className: "doctag", begin: /@[a-zA-Z]+/ },
                        { className: "meta-keyword", begin: /\\[a-zA-Z]+/ }
                    ]
                }),
                grammar.HASH_COMMENT_MODE,
                {
                    className: "string",
                    contains: [grammar.BACKSLASH_ESCAPE],
                    variants: [
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
                        grammar.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
                        { begin: '"', end: '"', relevance: 0 },
                        { begin: "'", end: "'", relevance: 0 }
                    ]
                },
                {
                    className: "number",
                    relevance: 0,
                    beforeMatch: /([^a-zA-Z0-9._])/,
                    variants: [
                        { match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
                        { match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
                        { match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
                    ]
                },
                { begin: "%", end: "%" },
                { begin: concat(/[a-zA-Z][a-zA-Z_0-9]*/, "\\s+<-\\s+") },
                {
                    begin: "`",
                    end: "`",
                    contains: [{ begin: /\\./ }]
                }
            ]
        };
    };
})());