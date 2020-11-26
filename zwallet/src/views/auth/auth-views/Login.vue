<template>
  <div>
    <h2>{{ email }}</h2>
    <router-link to="/home">
      <button class="btn btn-primary">Home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: 'Ini Login'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
