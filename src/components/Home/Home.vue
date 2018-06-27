<template>
  <div class="home">
    <div>
      {{ msg }}
    </div>
    <div class="v-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../Footer/Footer";
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
