import coffeescript from 'rollup-plugin-coffee-script';

export default {
  entry: 'src/strophe.muc.coffee',
  dest: 'lib/strophe.muc.js',
  format: 'umd',
  globals: {
    'vue-strophe.js': 'window',
  },
  external: ['vue-strophe.js'],
  plugins: [
    coffeescript()
  ],
  sourceMap: true
}
