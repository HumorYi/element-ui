/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 23:56:07
 * @LastEditTime: 2020-05-03 00:06:11
 */
import Message from '@/components/Message.vue'
import { create } from '@/utils/component'

export default {
  install(Vue) {
    Vue.prototype.$message = props => create(Message, props).show()
  }
}
