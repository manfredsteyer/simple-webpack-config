const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader',  options: { minimize: true } },
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [
    
    new AngularCompilerPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './src/tsconfig.app.json',
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule' )
    }),
    
    new PurifyPlugin()
    
  ],
  /*
  externals: {
    "@angular/core": "ng.build"
  },
  */
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};


module.exports = config;