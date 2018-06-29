<template>
  <div class="home">
    <div class="header">
      <div class="wechat">
        <span>微信</span>
      </div>
      <div class="sou"></div>
      <div class="more"></div>
    </div>
    <div class="main">
    <div class="side">
      <sideBar />
    </div>
      <div class="main-header">
        <ul>
          <li v-for="m in msg">{{ m }}</li>
        </ul>
      </div>
      <div class="titleA titlePublic">
        <div class="title">
          <p>A</p>
        </div>
        <ul>
          <li v-for="a in A">{{ a }}</li>
        </ul>
      </div>
      <div class="titleA titlePublic">
        <div class="title">
          <p>B</p>
        </div>
        <ul>
          <li v-for="b in B">{{ b }}</li>
        </ul>
      </div>
      <div class="titleA titlePublic">
        <div class="title">
          <p>C</p>
        </div>
        <ul>
          <li v-for="c in C">{{ c }}</li>
        </ul>
      </div>
      <div class="titleA titlePublic">
        <div class="title">
          <p>D</p>
        </div>
        <ul>
          <li v-for="d in D">{{ d }}</li>
        </ul>
      </div>
      <div class="titleA titlePublic">
        <div class="title">
          <p>E</p>
        </div>
        <ul>
          <li v-for="e in E">{{ e }}</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Footer from "../Footer/Footer";
  import sideBar from '../sideBar/sideBar';
  import '../../assets/css/public.css';
  export default {
    name: 'MailList',
    components: {
      Footer,
      sideBar
    },
    data() {
      return {
        msg: ['新的朋友', '群聊', '标签', '公众号'],
        A:['123','456','789'],
        B:['123','456','789'],
        C:['123','456','789'],
        D:['123','456','789'],
        E:['123','456','789'],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    display: flex;
  }

  .header .wechat {
    flex-grow: 1
  }
  .header .wechat span {
    color: #fff;
    font-size: .3rem;
    line-height: .7rem;
  }
  .main{
    position: relative;
  }
    .main .side{
      position: fixed;
      right:.2rem;
      top:.8rem
    }
  .main .main-header ul li {
    font-size: .3rem;
    line-height: .5rem;
  }
  .main .title{
    background: #999;
    height: .25rem;
    width: 100%;
  }
  .main .titlePublic ul{
    list-style: none;
    width: 95%;
    margin: 0 auto;
  }
  .main .titlePublic ul li{
    font-size: .3rem;
    /* box-shadow: 1px 0 1px #ccc; */
    border-bottom: 1px solid #ccc;
    line-height: .8rem;
  }
  .main .titlePublic ul li:last-child{
    border-bottom: 0;
  }
  .main .title p{
    font-size: .2rem;
    color:#333;
    line-height: .25rem;
    padding-left: .1rem;
  }
</style>