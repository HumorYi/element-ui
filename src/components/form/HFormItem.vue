<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 表单项内容（input）的容器，如果有传递校验规则，根据校验规则去验证表单元素的值
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 02:46:25
 * @LastEditTime: 2020-05-02 06:24:06
-->
<template>
  <div class="h-form-item">
    <!-- label 提示标签 -->
    <label v-if="label">{{ label }}</label>

    <!-- 表单项内容插槽 -->
    <slot></slot>

    <!-- 错误提示信息 -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
import emitter from '@/mixins/emitter'

export default {
  inheritAttrs: false,
  inject: ['form'],
  mixins: [emitter],
  componentName: 'HFormItem',
  name: 'h-form-item',
  data() {
    return {
      error: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      defualt: ''
    }
  },
  mounted() {
    if (
      !this.prop ||
      !this.form.rules ||
      !this.form.rules.hasOwnProperty(this.prop) ||
      !this.form.model.hasOwnProperty(this.prop)
    ) {
      this.error = ''
      return
    }

    this.$on('validate', () => {
      this.validate()
    })

    // 派发事件通知 HForm，新增一个 HFormItem 实例
    this.dispatch('HForm', 'hjy.form.addField', [this])
  },
  methods: {
    validate() {
      // 如果没有校验规则、没有传递校验属性、找不到数据模板中对应校验属性的数据、找不到校验规则中对应校验属性的规则，证明不需要校验，则返回成功
      // if (
      //   !this.prop ||
      //   !this.form.rules ||
      //   !this.form.rules.hasOwnProperty(this.prop) ||
      //   !this.form.model.hasOwnProperty(this.prop)
      // ) {
      //   // 为了防止动态删除校验规则导致错误提示信息没有清除，把错误提示信息清空
      //   this.error = ''
      //   return Promise.resolve(true)
      // }

      // 借助地方校验库进行校验
      // 创建校验描述对象
      const discriptor = { [this.prop]: this.form.rules[this.prop] }
      // 创建检验值对象
      const valueObj = { [this.prop]: this.form.model[this.prop] }
      // 创建校验器
      const validator = new Schema(discriptor)

      // 执行校验方法，为了避免有些校验规则是异步的，将校验结果返回给外部调用
      return validator.validate(valueObj, errors => {
        this.error = errors ? errors[0].message : ''
      })
    }
  },
  beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this])
  }
}
</script>

<style lang="sass" scoped>
.error
  color: red
</style>
