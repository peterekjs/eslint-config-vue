const braceStyle = require('@peterek/eslint-config-base/lib/brace-style')

module.exports = {
    extends: [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        '@vue/standard',
        '@vue/typescript'
    ],
    plugins: ['vue'],
    rules: {
        'vue/brace-style': braceStyle,

        'vue/no-v-html': 1,

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 2,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 5,
                multiline: {
                    max: 2,
                    allowFirstLine: true
                }
            }
        ],

        // Disable template errors regarding invalid end tags
        'vue/no-parsing-error': [
            'error',
            {
                'x-invalid-end-tag': false
            }
        ]
    }
}
