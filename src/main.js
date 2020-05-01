/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-01 21:16:15
 * @LastEditTime: 2020-05-02 04:41:22
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { create } from '@/utils/component'
import Message from '@/components/Message.vue'

Vue.config.productionTip = false
Vue.prototype.$message = opts => {
  create(Message, opts).show()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
