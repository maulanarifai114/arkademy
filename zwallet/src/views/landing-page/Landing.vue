<template>
    <div id="landing">
        <router-link to="/login">
            <button class="btn btn-primary inibutton">Ini Login</button>
        </router-link>
        <router-link to="/signup">
            <button class="btn btn-primary">Ini SignUp</button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.inibutton {
    border-radius: 20px !important;
    background-color: rgb(255, 133, 133);
}
</style>
