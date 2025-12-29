hljs.initHighlightingOnLoad();
hljs.registerLanguage('qlc', function(hljs) {
  const KEYWORDS = {
    keyword: [
      'if',
      'else',
      'while',
      'do_while',
      'for',
      'break',
      'continue',
      'return',
      'switch',
      'case',
      'default',
      'function',
      'include',
      'class',
      'extends',
      'private',
      'static',
      'const',
      'let'
    ],
    literal: [
      'true',
      'false',
      'null',
      'this',
      'native'
    ],
    built_in: [
      '_native',
      '_str'
    ]
  };

  const SPECIAL_FUNCTIONS = {
    className: 'title.function',
    begin: /\b___[a-zA-Z_]+___/,
    relevance: 10
  };

  const CLASS_DECLARATION = {
    begin: /\bclass\b/,
    keywords: 'class extends',
    contains: [
      {
        className: 'title.class',
        begin: /\b[A-Z][a-zA-Z0-9_]*/,
        relevance: 10
      },
      {
        begin: /\bextends\b/,
        keywords: 'extends',
        contains: [
          {
            className: 'title.class',
            begin: /\b[A-Z][a-zA-Z0-9_]*/,
            relevance: 10
          }
        ]
      }
    ]
  };

  const FUNCTION_DECLARATION = {
    begin: /\bfunction\b/,
    keywords: 'function',
    contains: [
      {
        className: 'title.function',
        begin: /\b[a-zA-Z_][a-zA-Z0-9_]*/,
        relevance: 10
      },
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        contains: [
          {
            className: 'keyword',
            begin: /\b(const|let)\b/
          },
          {
            className: 'type',
            begin: /<[A-Z][a-zA-Z0-9_]*>/
          }
        ]
      }
    ]
  };

  const CLASS_MEMBER_ACCESS = {
    begin: /\b[A-Z][a-zA-Z0-9_]*\./,
    returnBegin: true,
    contains: [
      {
        className: 'title.class',
        begin: /\b[A-Z][a-zA-Z0-9_]*/
      },
      {
        className: 'title.function',
        begin: /\.[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/,
        relevance: 10
      },
      {
        className: 'property',
        begin: /\.[A-Z_][A-Z0-9_]*/,
        relevance: 8
      },
      {
        className: 'property',
        begin: /\.[a-zA-Z_][a-zA-Z0-9_]*/,
        relevance: 5
      }
    ]
  };

  const FUNCTION_CALL = {
    className: 'title.function',
    begin: /\b[a-z_][a-zA-Z0-9_]*(?=\s*\()/,
    relevance: 5
  };

  const CLASS_REFERENCE = {
    className: 'title.class',
    begin: /\b[A-Z][a-zA-Z0-9_]*\b/,
    relevance: 0
  };

  const INCLUDE_STATEMENT = {
    className: 'meta',
    begin: /\binclude\b/,
    end: /$/,
    keywords: 'include',
    contains: [
      {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [
          {
            className: 'subst',
            begin: /\$[a-zA-Z_][a-zA-Z0-9_]*/
          }
        ]
      }
    ]
  };

  const TYPE_ANNOTATION = {
    className: 'type',
    begin: /<[A-Z][a-zA-Z0-9_]*>/
  };

  const NUMBER = {
    className: 'number',
    begin: /\b\d+(\.\d+)?\b/,
    relevance: 0
  };

  const STRING = {
    className: 'string',
    begin: '"',
    end: '"',
    contains: [
      {
        className: 'char.escape',
        begin: /\\./
      }
    ]
  };

  const OPERATOR = {
    className: 'operator',
    match: /==|!=|<=|>=|<|>|\|\||&&|!|\+|-|\*|\/|%|=/
  };

  return {
    name: 'QL',
    aliases: ['ql'],
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      INCLUDE_STATEMENT,
      CLASS_DECLARATION,
      FUNCTION_DECLARATION,
      SPECIAL_FUNCTIONS,
      CLASS_MEMBER_ACCESS,
      FUNCTION_CALL,
      TYPE_ANNOTATION,
      STRING,
      NUMBER,
      OPERATOR,
      CLASS_REFERENCE
    ]
  };
});