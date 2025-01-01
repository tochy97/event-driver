import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    EventDriver: './src/EventDriver.ts',
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/i,
        use: ["ts-loader"],
        exclude: [/node_modules/, /test\.js$/],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].mjs',
    path: path.resolve(__dirname, 'lib'),
    library: {
      type: "module",
    },
    clean: true
  },
  experiments: {
      outputModule: true
  },
  devtool: false,
};