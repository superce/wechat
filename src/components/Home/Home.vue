<template>
  <div class="home">
    <div class="main">
      <p></p>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Footer from "../Footer/Footer";
  import "../../assets/css/public.css";
  export default {
    name: "Home",
    components: {
      Footer
    },
    data() {
      return {
        msg: "home"
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>