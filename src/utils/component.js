/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:组件工具
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 03:57:28
 * @LastEditTime: 2020-05-02 04:59:28
 */
import Vue from 'vue'

// 动态创建组件实例并挂载至 body，避免覆盖根实例挂载dom
export const create = (Component, props) => {
  // 1.组件实例怎么创建？
  // 方式1：组件配置对象 =》 Ctor = Vue.extend(Component)变成构造函数
  // =》 new Ctor()
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props }).$mount()

  comp.remove = () => {
    document.body.removeChild(comp.$el)

    comp.$destroy()
  }

  document.body.appendChild(comp.$el)

  // 方式2：借鸡生蛋 new Vue({render() {}}),在render中把Component作为根组件
  // 借用根实例创建组件
  // 注意：根实例只有经过渲染组件对象并挂载才会创建dom
  // const vm = new Vue({
  //   // h是createElement函数，返回虚拟dom
  //   // h(标签名称或组件配置对象，传递属性、事件等，孩子元素)
  //   render: h => {
  //     console.log(h(Component, { props }))
  //     return h(Component, { props })
  //   }
  // }).$mount()

  // // 获取组件对象
  // const comp = vm.$children[0]

  // 为组件对象添加从页面中移除dom和销毁根实例 方法
  // comp.remove = () => {
  //   document.body.removeChild(vm.$el)

  //   vm.$destroy()
  // }

  // 创建的dom存放在根实例中的 $el 属性中
  // document.body.appendChild(vm.$el)

  // 返回组件对象
  return comp
}
