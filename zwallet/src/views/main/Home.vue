<template>
    <div id="home" class="padding-180">
      <Navbar/>
        <div class="container-lg d-flex flex-row mb-5">
          <Sidebar/>
          <div class="col-12 col-lg-9">
            <router-view></router-view>
          </div>
        </div>
      <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/main/Navbar'
import Sidebar from '../../components/main/Sidebar'
import Footer from '../../components/main/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.padding-180 {
  padding: 180px 0 0 0;
}

.container-fluid {
  margin-top: 180px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  height: fit-content;
  // width: 100%;
  background-color: rgb(132, 248, 116);
}
.container-lg {
  padding: 0;
  height: fit-content;
  width: 100%;
  background-color: rgb(248, 224, 116);
}

.col-lg-9 {
  padding-right: 0;
}
</style>
