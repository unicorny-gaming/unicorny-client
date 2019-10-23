var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports        = require('./webpack.config.js');

// disable the hot reload
module.exports.entry = module.exports.entry.splice(1, 2);

// add eslint preloader
module.exports.module.rules.push(
    {
        test   : /\.js$/,
        use: ['eslint-loader'],
        enforce: 'pre',
        include: [
            path.resolve(__dirname, "src"),
        ],
    }
);

// export css to a separate file
module.exports.module.rules.push({
    test  : /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
      // fallback: 'css!sass'
    })
});

module.exports.plugins.push(
    new ExtractTextPlugin('../css/main.css')
);
