<template>
  <div id="navbar">
    <nav class="navbar navbar-inverse bs-dark">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Logo</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/"><a>Homepage</a></router-link>
            <li class="dropdown">
              <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Explores <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <router-link tag="li" to="/contact"><a>Contact</a></router-link>
                <router-link tag="li" to="/about"><a>About</a></router-link>
                <li role="separator" class="divider"></li>
                <router-link tag="li" to="/support"><a>Support</a></router-link>
              </ul>
            </li>
          </ul>
          <app-search></app-search>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="auth._id" class="dropdown">
              <router-link :to="{path: '/user/' + auth._id}" class="dropdown-toggle navbar-img" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {{auth.email}}
                <img src="http://placehold.it/150x150" class="img-circle" alt="Profile Image" />
              </router-link>
              <ul class="dropdown-menu">
                <router-link tag="li" :to="{path: '/user/' + auth._id + '/profile'}"><a>Profile</a></router-link>
                <router-link tag="li" :to="{path: '/user/' + auth._id + '/inbox'}"><a>Inbox</a></router-link>
                <li role="separator" class="divider"></li>
                <router-link tag="li" :to="{path: '/user/' + auth._id + '/settings'}"><a>Settings</a></router-link>
              </ul>
            </li>
            <li v-else>
              <router-link to="/login" class="dropdown-toggle navbar-img">
                Login
                <img src="http://placehold.it/150x150" class="img-circle" alt="Profile Image" />
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>

import Search from './Search.vue';
import authService from '../../data/auth.js';
import { eventBus } from '../../main.js';

export default{
  data(){
    return {
      auth: {email: '', _id: ''}
    }
  },
  created(){
    eventBus.$on('updateUser', user => {
      this.auth = authService.getUser()
    });
  },
  components: {
    appSearch: Search
  }
}
</script>

<style>
.bs-dark.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}


.bs-dark .navbar-img {padding:5px 6px !important;}
.bs-dark .navbar-img img {width:40px;}
.bs-dark .dropdown-menu {
  min-width: 200px;
  padding: 5px 0;
  margin: 2px 0 0;
  background-color: #000;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, .15);
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

.bs-dark .dropdown-menu .divider {
  border: 1px solid rgba(0, 0, 0, 0.8);
}
.bs-dark .dropdown-menu > li > a {
  padding: 6px 20px;
  color: rgba(255,255,255,0.80);
}
.bs-dark .dropdown-menu > li > a:hover,
.bs-dark .dropdown-menu > li > a:focus {
  color: rgba(255,255,255,0.70);
  text-decoration: none;
  background-color: transparent;
}
.bs-dark .dropdown-menu > .active > a,
.bs-dark .dropdown-menu > .active > a:hover,
.bs-dark .dropdown-menu > .active > a:focus {
  color: rgba(255,255,255,0.70);
  text-decoration: none;
  background-color: transparent;
  outline: 0;
}

.bs-dark .navbar-form {
  margin:0;
  margin-top: 5px;
  padding:8px 0px;
}

.bs-dark .navbar-form .search-box {
  border:0px;
  height:35px;
  outline: none;
  width:320px;
  padding-right: 3px;
  padding-left: 15px;
  margin:4px;
  -webkit-border-radius: 22px;
  -moz-border-radius: 22px;
  border-radius: 22px;
}

.bs-dark .navbar-form button {
  border: 0;
  background: none;
  padding: 2px 5px;
  margin-top: 2px;
  position: relative;
  left: -34px;
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.bs-dark .search-box:focus + button {
  z-index: 3;
}

@media (min-width: 768px) {
    .bs-dark .dropdown:hover {background-color: #000;}
	.bs-dark .dropdown:hover .dropdown-menu {
	  display: block;
	}
	.bs-dark .navbar-form {
	  padding:0px;
	}
	.bs-dark .navbar-form .search-box {
	  width:260px;
	  height:32px;
	}

}

li.exact-route-match a {
    color: #1fa67a !important;
    font-weight: bold !important;
}

</style>
