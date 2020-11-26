<template>
    <div id="landing">
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../../components/landing/Navbar'

export default {
  name: 'Landing',
  components: {
    Navbar
  }
}
</script>

<style scoped>
body {
    font-family: 'Nunito Sans';
    background: #FAFCFF;
}
</style>
