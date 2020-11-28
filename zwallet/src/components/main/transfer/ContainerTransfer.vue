<template>
  <div>
    <div class="container-history">
      <div class="container-receiver">
        <div class="profile-h">
          <img src="" alt="profile">
        </div>
        <div class="container-name-purpose">
          <div class="name cut-text">{{nameprof}}</div>
          <div class="purpose">{{phonenumber}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerTransfer',
  props: {
    nameprof: String,
    phonenumber: String
  }
}
</script>

<style lang="scss" scoped>
.container-history {
    display: flex;
    box-sizing: border-box;
    height: 110px;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    background-color: white;
    padding: 0 30px;
    cursor: pointer
}

.container-receiver {
    /* width: calc(100%-1px); */
    width: 790px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    padding: 20px;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.profile-h {
  width: 70px;
  height: 70px;
  margin: 0 20px 0 0;
  border-radius: 10px;
  background-color: rgb(196, 196, 196);
}

.container-name-purpose {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: calc(100% - 14px);
    justify-content: center;
}

.name {
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
}

.name {
    width: fit-content;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #4D4B57;
    margin-bottom: 10px;
}

.cut-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.purpose {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #7A7886;
}

@media (max-width: 375px) {
  .container-history {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 320px) {
  .profile-h {
    width: 56px;
    height: 56px;
  }

  .name {
    font-size: 14px;
  }

  .purpose {
    font-size: 12px;
  }
}
</style>
