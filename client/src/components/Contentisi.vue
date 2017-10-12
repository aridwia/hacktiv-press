<template lang="html">

  <div class="container" id="cssi">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Panel primary</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'Articles'
    ])
  },
  methods: {
    ...mapActions([
      'getallArticles'
    ])
  },
  creatad () {
    this.getallArticles()
  }
}
</script>

<style scoped>
#cssi {
  margin-top: 100px
  }
</style>
