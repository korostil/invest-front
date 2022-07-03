// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
// eslint-disable-next-line no-undef
module.exports = {
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
    admin: {
      entry: 'src/admin/main.js',
      template: 'public/admin.html',
      filename: 'admin.html',
      title: 'Admin Page',
    },
  },
};
