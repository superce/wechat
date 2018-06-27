<template>
  <div class="My">
    <div>{{ msg }}</div>
    <div class="v-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../Footer/Footer";
export default {
  name: "My",
  components: {
    Footer
  },
  data() {
    return {
      msg: "my"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>