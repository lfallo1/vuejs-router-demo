<template>
  <div id="home">
    <h3>Home</h3>
    <app-user v-for="user in users" :id="user._id" :key="user._id"></app-user>
  </div>
</template>

<script>

import User from '../User/UserWidget.vue';
import users from '../../data/users.js';

export default {
  data(){
    return {
      users: []
    }
  },
  components: {
    appUser : User
  },
  created(){
    this.users = users;
  }
}
</script>
