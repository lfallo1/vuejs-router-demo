<template>
  <div class="loginmodal-container">
    <h1>Login to Your Account</h1><br>
    <form @submit.prevent.stop="login">
      <input type="text" name="email" placeholder="Email" v-model="email">
      <input type="password" name="pass" placeholder="Password" v-model="password">
      <input type="submit" name="login" class="login loginmodal-submit" value="Login">
      <div v-if="error" class="text-danger">{{error}}</div>
    </form>
    </div>
</div>
</template>

<script>
import { eventBus } from '../../main.js';
import authService from '../../data/auth.js';
import users from '../../data/users.js';
export default{
  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login(){
      var user = users.filter(u => u.email === this.email && u.password === this.password)[0];
      if(user){
        authService.setUser(user);
        eventBus.$emit('updateUser', user);
        this.$router.push('user/' + user._id);
      } else{
        this.error = "Invalid email / password combination";
      }
    }
  }
}
</script>
