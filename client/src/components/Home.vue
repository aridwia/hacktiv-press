<template>
  <div class="">
    <Navbar/>
    <h1>Wellcome</h1>
    <Contentisi/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Contentisi from '@/components/Contentisi'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
    Contentisi
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
