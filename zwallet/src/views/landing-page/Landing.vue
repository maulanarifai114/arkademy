<template>
    <div id="landing">
        <router-link to="/login">
            <button class="btn btn-primary inibutton">Ini Login</button>
        </router-link>
        <router-link to="/signup">
            <button class="btn btn-primary">Ini SignUp</button>
        </router-link>
        <Button title="Login"/>
    </div>
</template>

<script>
import Button from '../../components/Button'
export default {
  name: 'Landing',
  components: [
    Button
  ]
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
