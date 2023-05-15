import {loaders} from "./loaders";
import {resolvers} from "./resolvers";
import {plugins} from "./plugins";
import webpack from "webpack";
import {Options} from "./types/config";
import {devServer} from "./devServer";

export const webpackConfig = (options: Options): webpack.Configuration => {
  const { paths, mode, isDevMode } = options

  return {
    entry: paths.entry,
    mode: mode,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: { rules: loaders(options) },
    resolve: resolvers(paths),
    plugins: plugins(options),
    devServer: isDevMode ? devServer(options) : undefined,
    devtool: isDevMode ? 'inline-source-map' : undefined
  }
}
