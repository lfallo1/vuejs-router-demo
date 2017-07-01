<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Shared/Header.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
</style>
