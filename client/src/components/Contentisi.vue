<template lang="html">

  <div class="container" id="cssi">
    <div class="panel panel-primary" v-for="article in Articles">
      <div class="panel-heading">
        <h3 class="panel-title">{{article.title}}</h3>
      </div>
      <div class="panel-body">
        {{article.content}}
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
  created () {
    this.getallArticles()
  }
}
</script>

<style scoped>
#cssi {
  margin-top: 100px
  }
</style>
