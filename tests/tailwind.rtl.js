/* eslint-disable global-require */
const config = require('./tailwind.base');

module.exports = {
  ...config,
  theme: {
    screens: {
      mobile: '1em',
      desktop: '2em',
    },
  },
  plugins: [
    require('../index')({
      gridColumns: 3,
      rtl: true,
    }),
  ],
};
