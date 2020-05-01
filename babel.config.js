/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-01 21:16:14
 * @LastEditTime: 2020-05-01 21:35:11
 */
const plugins = ['@vue/babel-plugin-transform-vue-jsx']

// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins,
  presets: ['@vue/cli-plugin-babel/preset']
}