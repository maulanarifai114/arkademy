<template>
    <div id="landing">
        <!-- <router-link to="/login">
            <button class="btn btn-primary inibutton">Ini Login</button>
        </router-link>
        <router-link to="/signup">
            <button class="btn btn-primary">Ini SignUp</button>
        </router-link>
        <router-link to="/home">
        <Button title="Login"/>
        </router-link> -->
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

.btn {
  border: 0;
}
.inibutton {
    border-radius: 20px;
    background-color: rgb(255, 133, 133);
}
</style>
