import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest:  'src/main.dist.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
  ]
}
