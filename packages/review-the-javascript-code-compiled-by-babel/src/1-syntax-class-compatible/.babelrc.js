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
  ]
}
