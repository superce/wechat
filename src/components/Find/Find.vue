<template>
<div class="home">
    <div class="header">
      <h1>
        {{ msg }}
      </h1>
    </div>
    <div class="main">
      
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
  name: "Find",
  components: {
    Footer
  },
  data() {
    return {
      msg: "find"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>