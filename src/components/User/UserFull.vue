<template>
  <div id="user-full" class="well well-lg">
    <div class="jumbotron">{{user.email}}</div>
    <p>{{user}}</p>
    <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>

  import users from '../../data/users.js';

  export default{
    props: ['id'],
    computed: {
      user(){
        return users.filter(u=>u._id === this.id)[0];
      }
    }
  }
</script>
