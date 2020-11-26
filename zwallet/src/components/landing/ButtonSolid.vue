<template>
  <button type="submimt" class="btn-custom solid-btn">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String
  }
}
</script>

<style scoped>

button:focus {
  outline: 0;
}

.btn-custom {
  border-radius: 12px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  width: 120px;
  height: 48px;
  /* Fonts */
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
}

.solid-btn {
background: #6379F4;
border: 0;
transition: 0.3s;
color: white;
}

.solid-btn:hover {
background: rgb(79, 98, 207);
}

.solid-btn:active {
background: rgb(58, 75, 172) !important;
border: 0;
}
</style>
