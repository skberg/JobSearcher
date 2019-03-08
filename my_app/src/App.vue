<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

(function () {
        localStorage.setItem('username', 'Svenn');
        localStorage.setItem('password', '1234');
    })();

export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
