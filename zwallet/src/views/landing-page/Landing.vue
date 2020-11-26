<template>
    <div id="landing">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/landing/Navbar'
import Body from '../../components/landing/Body'
import Footer from '../../components/landing/Footer'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Body,
    Footer
  }
}
</script>

<style >
body {
    font-family: 'Nunito Sans';
    background: #FAFCFF !important;
}
</style>
