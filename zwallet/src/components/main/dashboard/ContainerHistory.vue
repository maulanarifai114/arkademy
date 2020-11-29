<template>
  <div>
    <section class="container-history">
      <img src="../../assets/home/samuel-suhi.png" alt="profile-h" class="profile-h">
      <div class="container-name-purpose">
        <div class="name cut-text">{{nameprof}}</div>
        <div class="purpose">Transfer</div>
      </div>
      <div class="amount-plus">{{amount}}/div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContainerHistory',
  props: {
    nameprof: String,
    amount: String
  }
}
</script>

<style lang="scss" scoped>

</style>
