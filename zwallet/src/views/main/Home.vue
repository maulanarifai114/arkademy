<template>
    <div id="home">
      <Navbar/>
        <div class="container-fluid">
          <div class="container"></div>
        </div>
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

.container-fluid {
  margin: 180px 0 0 0;
  padding: 0;
  height: fit-content;
  // width: 100%;
  background-color: rgb(132, 248, 116);
}
.container {
  padding: 0;
  height: 678px;
  width: 100%;
  background-color: rgb(248, 224, 116);
}
</style>
