module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname, //current folder path (pwd)
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, //ReactWeather
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015', 'stage-0'] //presets to be used
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' //debug the file we actually wrote

};
