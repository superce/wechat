<template>
<div class="home">
  <div class="header">
      <div class="wechat"><span>微信</span></div>
      <div class="sou"></div>
      <div class="more"></div>
    </div>
    <div class="main">
      <div class="main-header">
        <p v-for="m in msg"> {{ m }} </p>
      </div>
      
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../Footer/Footer";
import '../../assets/css/public.css';
export default {
  name: 'MailList',
  components: {
    Footer
  },
  data () {
    return {
      msg: ['新的朋友','群聊','标签','公众号']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  display: flex;
}
.header .wechat{
  flex-grow: 1
}
.header .wechat span{
  color:#fff;
  font-size: .3rem;
  line-height: .8rem;
}
  .main .main-header p{
    font-size: .3rem;
  }
</style>