<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 实现input元素值的双绑（值绑定和监听值输入事件）
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 02:27:11
 * @LastEditTime: 2020-05-02 05:29:35
-->
<template>
  <div class="h-input">
    <input :type="type" :value="value" v-bind="$attrs" @input="onInput($event)" />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
  mixins: [emitter],
  inheritAttrs: false,
  name: 'h-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      // 发射 input 更改事件，将值传递给调用的组件，实现双绑
      this.$emit('input', e.target.value)

      // 当值改变时，发射 验证 事件
      // 注意：事件的发射和监听 只能是同一个对象内才能实现，即当前组件才能监听到
      // 由于父组件的内容是一个插槽，无法监听插槽内的组件发射事件，
      // 需要调用父组件进行发射验证事件，父组件再监听验证事件
      // 注意：父组件可能不是 HFormItem，需要往上广播找到组件名为 HFormItem 的组件，该组件即需要发射验证事件的组件
      // this.$parent.$emit('validate')
      this.dispatch('HFormItem', 'validate')
    }
  }
}
</script>

<style lang="sass" scoped></style>
