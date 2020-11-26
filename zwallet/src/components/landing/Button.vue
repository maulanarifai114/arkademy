<template>
  <button type="submimt" class="btn-custom outline-btn">{{ title }}</button>
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
.outline-btn {
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  border: 2px solid #6379f4;
  color: #6379f4;
  transition: 0.3s;
}
.outline-btn:hover {
  background: #6379f4;
  border: 2px solid #6379f4;
  color: #fff !important;
}
.outline-btn:focus {
  background: rgb(79, 98, 207) !important;
  color: #fff !important;
}
.outline-btn:active {
  background: rgb(58, 75, 172) !important;
  border: 2px solid rgb(79, 98, 207) !important;
}
</style>
