<template>
  <div>
    <header>
      <h2 class="login-p1">
        {{p1}}
      </h2>
      <p class="login-p2">
        {{p2}}
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['p1', 'p2']
}
</script>

<style lang="scss" scoped>
.login-p1 {
  font-family: Nunito Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: #3A3D42;
}

.login-p2 {
    font-weight: 400;
    line-height: 30px;
    margin: 30px 0 0 0;
    color: rgba(58, 61, 66, 0.6);
}

@media (max-width: 566px) {
  .login-p1 {
    font-size: 20px;
  }

  .login-p2 {
    font-size: 12px;
    line-height: 1.5em;
  }
}

</style>
