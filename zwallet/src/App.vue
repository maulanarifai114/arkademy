<template>
  <div id="app">
    <Auth />
  </div>
</template>

<script>
import Auth from './views/auth/Auth'

export default {
  name: 'app',
  components: {
    Auth
  }
}

</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
</style>
