import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/lib/index.jsx',
  output: [
    { file: pkg.browser, format: 'umd', name: 'recal', exports: 'named' },
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.json']
    }), // so Rollup can find imported packages.
    babel({
      sourceMap: true,
      exclude: 'node_modules/**'
    }),
    commonjs(), // so Rollup can convert imported packages to an ES module
    uglify()
  ]
}