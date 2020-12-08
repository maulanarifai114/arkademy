<template>
  <div>
    <nav class="container-fluid container-out fixed-top">
      <div class="container container-in">
        <h1 class="title primary-z-c">Zwallet</h1>
        <div class="profile">
          <div class="photo-p">
            <img src="../../assets/home/profile.png" alt="profile">
          </div>
          <div class="name-phone">
            <div class="name">{{firstName + ' '+ lastName}}</div>
            <div class="phone">{{phone}}</div>
          </div>
          <img src="../../assets/home/bell.svg" alt="bell" class="bell">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      firstName: 'Raden',
      lastName: 'Maulana',
      phone: '+6285771926851'
    }
  }
}
</script>

<style lang="scss" scoped>

.primary-z {
    background: #6379F4;
    background-color: #6379F4;
}

.primary-z-c {
    color: #6379F4;
}

.dark-z {
    background: #3A3D42;
    background-color: #3A3D42;
}

.dark-z-c {
    color: #3A3D42;
}

.error-z {
    background: #FF5B37;
    background-color: #FF5B37;
}

.error-z-c {
    color: #FF5B37;
}

.white-z {
    background: #ffffff;
    background-color: #ffffff;
}

.white-z-c {
    color: #ffffff;
}

/* Navbar */
.container-out {
    padding: 0;
    height: 140px;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 0 0 40px 0;
}

.container-in {
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-family: 'Nunito Sans';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
}

.profile {
    width: auto;
    height: 55px;
    display: flex;
    align-items: center;
}

.photo-p {
    margin: 0 20px 0 0;
}

.name-phone {
    height: 100%;
    width: auto;
    margin: 0 30px 0 0;
    color: #3A3D42;
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

.phone {
    font-family: 'Nunito Sans';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(58, 61, 66, 0.9);

}

/* End Navbar */

@media (max-width: 575px) {

    .container-in {
        box-sizing: border-box;
        padding: 0 30px;
    }

    .name-phone {
        display: none;
    }
}

@media (max-width: 320px) {

    .title {
        font-size: 20px;
    }

    .container-out {
        height: 100px;
    }
}
</style>
