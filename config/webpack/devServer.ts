import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {Options} from "./types/config";

export const devServer = (options: Options): DevServerConfiguration => {
  return {
    port: options.port,
    open: true
  }
}
