import { fileURLToPath } from 'url';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './source/js/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js')
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  }
}
