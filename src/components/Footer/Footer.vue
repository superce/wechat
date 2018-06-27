<template>
  <div class="footer">
    <div class="footer-a">
      <router-link to='/'>微信</router-link>
      <router-link to='/maillist'>通讯录</router-link>
      <router-link to='/find'>发现</router-link>
      <router-link to='/my'>我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width: 100%;
}
  .footer-a{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between
  }
  .footer a{
    text-decoration: none;
    font-size: 14px;
  }
</style>
