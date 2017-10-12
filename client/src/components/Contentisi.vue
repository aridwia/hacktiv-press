<template lang="html">

  <div class="container" id="cssi">
    <div class="panel panel-primary" v-for="article in Articles">
      <div class="panel-heading">
        <h3 class="panel-title">{{article.title}}
         <span class="label label-warning">Category: {{article.category}}</span> </h3>
      </div>
      <div class="panel-body">
        {{article.content}}
      </div>
      <div class="panel-footer">
        <a href="#" class="btn btn-warning">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addartikel" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

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
