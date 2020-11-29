<template>
  <div>
    <section class="container-history">
      <div class="profile-h">
        <img src="" alt="profile">
      </div>
      <div class="container-name-purpose">
        <div class="name cut-text">{{nameprof}}</div>
        <div class="purpose">Transfer</div>
      </div>
      <div class="amount-minus">-{{amount}}/div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContainerHistory',
  props: {
    nameprof: String,
    amount: Number
  }
}
</script>

<style lang="scss" scoped>
.container-history {
    display: flex;
    box-sizing: border-box;
    padding: 20px 30px;
    height: 96px;
    align-items: center;
}

.profile-h {
  margin: 0 15px 0 0;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: rgb(196, 196, 196);
}

.container-name-purpose {
    display: flex;
    flex-direction: column;
    width: 112px;
    height: 52px;
}

.name {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 9px;
}

.cut-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.purpose {
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
}

.amount-minus {
    display: flex;
    margin-left: auto;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: #FF5B37;
}
</style>
