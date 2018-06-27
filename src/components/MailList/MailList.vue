<template>
  <div class="MailList">
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
  name: 'MailList',
  components: {
    Footer
  },
  data () {
    return {
      msg: 'Maillist'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>