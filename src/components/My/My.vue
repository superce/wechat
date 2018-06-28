<template>
<div class="home">
    <div class="header">
      <h1>
        {{ msg }}
      </h1>
    </div>
    <div class="main">
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis blanditiis eveniet consectetur quasi magni laudantium atque porro incidunt quam sed totam similique laboriosam eum, architecto molestias pariatur voluptate facere.</p>
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