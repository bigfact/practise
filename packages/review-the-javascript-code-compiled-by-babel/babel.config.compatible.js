module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          ie: '9'
        },
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-arrow-functions']
}
