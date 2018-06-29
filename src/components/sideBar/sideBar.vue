<template>
  <div class="side-bar">
    <ul>
      <li v-for="(s,i) in msg">{{ s }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "side-bar",
    data() {
      return {
        msg: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar ul{
  list-style: none
}
  .side-bar ul li{
    font-size: .2rem;
    line-height: .35rem;
  }
</style>