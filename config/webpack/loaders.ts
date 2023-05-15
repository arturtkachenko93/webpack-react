import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Options} from "./types/config";

export const loaders = (options: Options): RuleSetRule[] => {

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
        test: /\.s?[ac]ss$/i,
        use: [
          options.isDevMode ?  "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (respPath: string) => Boolean(respPath.includes('.module.')),
                localIdentName: options.isDevMode ? '[folder]__[local]--[hash:base64:9]' : '[hash:base64:9]',
                exportLocalsConvention: 'camelCase',
              }
            }
          },
          "sass-loader",
        ],
      }

  return [
    cssLoader,
    tsLoader,
  ]
}
