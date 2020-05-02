/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-01 21:16:15
 * @LastEditTime: 2020-05-03 00:10:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Message from './plugins/message'
Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
