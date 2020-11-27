<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
.primary-z {
    background: #6379F4;
    background-color: #6379F4;
}

.primary-z-c {
    color: #6379F4;
}

.dark-z {
    background: #3A3D42;
    background-color: #3A3D42;
}

.dark-z-c {
    color: #3A3D42;
}

.error-z {
    background: #FF5B37;
    background-color: #FF5B37;
}

.error-z-c {
    color: #FF5B37;
}

.white-z {
    background: #ffffff;
    background-color: #ffffff;
}

.white-z-c {
    color: #ffffff;
}
</style>
