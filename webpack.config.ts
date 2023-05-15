import webpack from "webpack";
import {webpackConfig} from "./config/webpack/webpackConfig";
import {Env, MODE, Paths} from "./config/webpack/types/config";
import path from "path";

const config = (env: Env):webpack.Configuration => {
  const paths: Paths = {
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    nodeModules: path.resolve(__dirname, 'node_modules')
  }

  const mode: webpack.Configuration['mode'] = env.MODE || "development"
  const PORT = env.PORT || 3000
  const isDevMode = mode === MODE.DEVELOPMENT

  return webpackConfig({
    mode,
    paths,
    isDevMode,
    port: PORT
  })
}

export default config
