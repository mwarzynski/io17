const path = require("path");

module.exports = {
    "entry": path.resolve(__dirname, "./src/client/scripts/client.js"),
    "output": {
        "path": path.resolve(__dirname, "./dist"),
        "filename": "bundle.js"
    },
    "module": {
        "loaders": [
            {
                "test": /.js?$/,
                "loader": "babel-loader",
                "exclude": /node_modules/,
                "query": {
                    "presets": ["react", "es2015"],
                    "plugins": ["transform-object-rest-spread"],
                }
            }
        ]
    }
};