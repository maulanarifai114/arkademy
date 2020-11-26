<template>
    <div id="home">
      <Navbar/>
      <!-- <section class="container-lg row-dashboard">
        <div class="row row-default">
          <Sidebar/>
          <router-view></router-view>
        </div>
      </section> -->
    </div>
</template>

<script>
import Navbar from '../../components/main/Navbar'
// import Sidebar from '../../components/main/Sidebar'
export default {
  name: 'Home',
  components: {
    Navbar
    // Sidebar
  }
}
</script>

<style lang="scss" scoped>
.row-dashboard {
    padding: 0;
    margin-top: 180px;
    margin-bottom: 35px;
}
.row-default {
    margin: 0;
    width: 100%;
}
</style>
