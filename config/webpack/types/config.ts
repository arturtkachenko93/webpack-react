import webpack from "webpack";

export const MODE = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
} as const

export interface Env {
  MODE: webpack.Configuration['mode']
  PORT: number
}

export interface Paths {
  entry: string
  output: string
  html: string
  nodeModules: string
}

export interface Options {
  mode: webpack.Configuration['mode']
  paths: Paths
  isDevMode: boolean
  port: number
}
