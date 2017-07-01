<template>
  <div id="user-main">
    <div class="panel panel-default">
      <div class="panel-heading">User overview for {{$route.params.user}}</div>
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
#user-main{
  margin: 0px auto;
  text-align: center;
}
</style>
