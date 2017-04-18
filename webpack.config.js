var HtmlWebpackPlugin = require('html-webpack-plugin'); //creates a dynamic html file each time webpack runs, plugin can be customized below
const ExtractTextPlugin = require("extract-text-webpack-plugin");//It moves all the require("style.css")s in entry chunks into a separate single CSS file.
module.exports = {
    entry: "./src/app.js", //input to webpack
    output: {
        //output from webpack
        path: __dirname + '/dist', //__dirname + '/dist' needed for webpack version greater than 2.2, only 'dist' otherwise.
        filename: 'app.bundle.js' // output should be names this
    },

    //Loader is a function that takes the filepath or url of an image and includes that inside the final bundle
    module: {
        rules: [{
            //checks for any .scss files and use css-loader to include it in bundle.js and style-loader to make the css work. Webpack looks at these files from bottom up. ExtractTextPlugin to eject them all into a separate file
            test: /\.scss/,
            //use: ["style-loader","css-loader","sass-loader"] //old use, modified below to be used with ExtractTextPlugin
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","sass-loader"]
            })
        }]
},

plugins: [
    new HtmlWebpackPlugin({
        title: 'Project',
        minify: {
            //minify index.html
            collapseWhitespace: true
        },

        template: './src/index.ejs', //this template will be used to create index.html by HtmlWebpackPlugin. Should not contain links to stylesheets or js files
    }),
    new ExtractTextPlugin("app.css"),
]
}
