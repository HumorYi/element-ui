<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-02 04:20:00
 * @LastEditTime: 2020-05-02 06:24:50
-->
<template>
  <div class="form">
    <h-form :model="model" :rules="rules" ref="form">
      <h-form-item label="用户名" prop="username">
        <h-input v-model="model.username" placeholder="please input your name"></h-input>
      </h-form-item>

      <h-form-item label="密码" prop="password">
        <h-input v-model="model.password" type="password" placeholder="please input your password"></h-input>
      </h-form-item>

      <h-form-item>
        <button @click="onLogin">登录</button>
      </h-form-item>
    </h-form>
  </div>
</template>

<script>
import HInput from '@/components/form/HInput.vue'
import HFormItem from '@/components/form/HFormItem.vue'
import HForm from '@/components/form/HForm.vue'

export default {
  name: 'views-form',
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '用户名为必填项' }],
        password: [{ required: true, message: '密码为必填项' }]
      }
    }
  },
  components: { HInput, HFormItem, HForm },
  methods: {
    onLogin() {
      this.$refs.form.validate(valid => {
        this.$message({ title: 'form validator', message: valid ? 'success' : 'faild' })
      })
    }
  }
}
</script>

<style lang="sass" scoped></style>
