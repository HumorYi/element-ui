<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 表单项的容器，存储表单数据和验证规则，进行统一验证，验证完成后告知外部验证结果
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 02:52:10
 * @LastEditTime: 2020-05-02 06:19:19
-->
<template>
  <div class="h-form">
    <slot></slot>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
  mixins: [emitter],
  inheritAttrs: false,
  provide() {
    return { form: this }
  },
  componentName: 'HForm',
  name: 'h-form',
  props: {
    model: {
      type: Object,
      requried: true
    },
    rules: Object
  },
  created() {
    this.fields = []

    this.$on('hjy.form.addField', field => {
      if (field.prop) {
        this.fields.push(field)
      }
    })

    this.$on('hjy.form.removeField', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    validate(cb) {
      // 如果没有校验规则，直接返回成功
      if (!this.rules) {
        return cb && cb(true)
      }

      // 遍历所有子组件，过滤掉没有传递校验属性、找不到数据模板中对应校验属性的数据、找不到校验规则中对应校验属性的规则，
      // 执行规则内部的校验方法，得到所有校验规则返回结果
      // const tasks = this.$children
      // .filter(item => item.prop && this.rules.hasOwnProperty(item.prop) && this.model.hasOwnProperty(item.prop))
      // .map(item => item.validate())

      const tasks = this.fields.map(item => item.validate())

      // 有些校验规则可能是异步的，使用 Promise.all 进行统一校验，将校验结果当做参数传递给外部传递进来的回调函数
      Promise.all(tasks)
        .then(() => cb && cb(true))
        .catch(() => cb && cb(false))
    }
  }
}
</script>

<style lang="sass" scoped></style>
