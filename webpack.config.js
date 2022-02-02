  module.exports = [{
    entry: 'newStyle.scss',
    output: {
    // This is necessary for webpack to compile,
    // but we never use style-bundle.js.
    filename: 'app.js',
    },
    module: {
    rules: [{
    test: /\.scss$/,
    use: [
    {
    loader: 'file-loader',
    options: {
    name: 'bundle.css',
    },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' ,
    options: {
      // includePaths: ['node_modules']
      }
    },
    ]
    }]
    },
    }];
