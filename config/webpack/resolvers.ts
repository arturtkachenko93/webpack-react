import webpack from "webpack";
import {Paths} from "./types/config";

export const resolvers = (paths: Paths): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.nodeModules],
  }
}
