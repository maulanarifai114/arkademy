<template>
  <div class="col-lg-3">
    <aside class="col-menu">
      <div class="menu">
        <section class="menu-row menu-active">
          <img src="../../assets/home/dashboard-active.svg" alt="Dashboard">
          <p class="menu-abjad-active">Dashboard</p>
        </section>
        <section class="menu-row">
          <img src="../../assets/home/transfer-inactive.svg" alt="Transfer">
          <p class="menu-abjad-inactive">Transfer</p>
        </section>
        <section class="menu-row">
          <img src="../../assets/home/topup-inactive.svg" alt="Top Up">
          <p class="menu-abjad-inactive">Top Up</p>
        </section>
        <section class="menu-row">
          <img src="../../assets/home/profile-inactive.svg" alt="Profile">
          <p class="menu-abjad-inactive">Profile</p>
        </section>
        <section class="menu-logout">
          <div class="menu-row logout">
            <img src="../../assets/home/logout-inactive.svg" alt="Logout">
            <p class="menu-abjad-inactive">Logout</p>
          </div>
        </section>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.col-menu {
    padding: 0;
    width: 100%;
    height: 678px;
    margin: 0;
}

.menu {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
    padding: 45px 0 0 0;
    display: flex;
    flex-direction: column;
}

.menu-row {
    width: 100%;
    height: 35px;
    margin: 0 0 48px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 35px;
}

.menu-active {
    border-left: 5px solid #6379F4;
    padding-left: 30px;
}

.menu-abjad-active {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #6379F4;
    margin: 0 0 0 20px;
}
.menu-abjad-inactive {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 0 20px;
    color: rgba(58, 61, 66, 0.8);
}
.menu-logout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
}

@media (max-width: 991px) {
  .col-menu {
    height: fit-content;
    position: fixed;
    bottom: 0;
    z-index: 10;
  }

  .menu {
    width: 100%;
    height: 100px;
    margin: 0;
    border-radius: 0;
    flex-direction: row;
    padding: 0;
  }

  .menu-row {
    height: 100%;
    width: 20%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .menu-abjad-active {
    display: none;
  }

  .menu-active {
    border: 0;
  }

  .menu-active {
    border-bottom: 5px solid #6379F4;
  }

  .menu-active img {
    position: relative;
    bottom: -2.5px;
  }

  .menu-abjad-active {
    display: none;
  }

  .menu-abjad-inactive {
    display: none;
  }

  .menu-logout {
    width: 20%;
    flex-direction: row;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 375px) {
  .col-menu {
    height: 75px;
  }
  .menu {
    height: 100%;
  }
  .menu-row img {
    transform: scale(.8);
  }
}

@media (max-width: 320px) {
  .col-menu {
    height: 64px;
  }
}
</style>
