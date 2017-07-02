<template>
  <div id="support">
    <h3>Support</h3>
    <div v-if="!error.hasError">
      <div class="col-xs-4" v-for="item in dummyData">
        <div class="jumbotron">{{item}}</div>
      </div>
    </div>
    <div v-else>
      <div class="text-danger">{{error.message}}</div>
    </div>
  </div>
</template>

<script>

import { HTTP } from '../../http.js';

export default {
  data(){
    return {
      dummyData: [],
      error: {message: '', hasError: false}
    }
  },
  created(){
    this.error.hasError = false;
    HTTP.get('users')
      .then(data=>{
        this.dummyData = data
      })
      .catch(err => {
        this.error = {
          message: err.message,
          hasError: true
        }
      });
  }
}
</script>

<style>
</style>
