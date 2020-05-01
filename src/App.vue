<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-05-01 21:16:15
 * @LastEditTime: 2020-05-02 04:24:04
-->
<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in routerLinks" :key="index">
        <router-link :to="{ name: item.routerName }">{{ item.title }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerLinks: [
        {
          title: 'index',
          routerName: 'index'
        },
        {
          title: 'form',
          routerName: 'form'
        }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
