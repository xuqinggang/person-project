module.exports = {
  plugins: {
      'postcss-pxtorem': {
          rootValue: 16,
          propList: ['font', 'font-size'],
      },
    // 'postcss-import': {},
    // 'postcss-cssnext': {
    //   browsers: ['last 2 versions', '> 5%'],
    // },
  },
};
