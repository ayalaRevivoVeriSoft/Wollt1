module.exports = {
    
    suites: [{
        name: 'End to End tests',
        cases: [
            { path: './Scripts/01. ' },
            { path: './Scripts/02. ' },
            { path: './Scripts/03. ' },
        ]
    }],

    modules: ['web','log', 'assert','utils'],

    reporting: {
        reporters: ['html', 'json']
    },

}