<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 04:35:28
 * @LastEditTime: 2020-05-02 04:57:30
-->
<template>
  <div class="box" v-if="isShow">
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="message" class="box-content">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style lang="sass">
.box
  position: fixed
  width: 100%
  top: 16px
  left: 0
  text-align: center
  pointer-events: none
  background-color: #fff
  border: grey 3px solid
  box-sizing: border-box

.box-content
  width: 200px
  margin: 10px auto
  font-size: 14px
  padding: 8px 16px
  background: #fff
  border-radius: 3px
  margin-bottom: 8px
</style>
