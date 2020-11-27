<template>
    <div id="home">
      <Navbar/>
        <div class="coba2 container"></div>

      <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.coba1 {
  padding: 0;
  margin: 180px 0 0 0;
  height: 678px;
  width: 100%;
  background-color: rgb(248, 116, 116);
}
.coba2 {
  padding: 0;
  height: 200px;
  width: 100%;
  background-color: rgb(132, 248, 116);
}
</style>
