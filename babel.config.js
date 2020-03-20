module.exports = {
    "presets": [
        ["minify", {"mangle": false, "builtIns": false}],
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-flow"
    ]
};