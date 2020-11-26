<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand my-3" href="#">Zwallet</a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto d-flex align-items-center">
                    <li class="nav-item ml-auto mr-lg-5 mb-3 mb-lg-0 my-lg-3">
                      <router-link to="/login">
                        <ButtonOutline title="Login"/>
                      </router-link>
                    </li>
                    <li class="nav-item ml-auto mb-2 mb-lg-0">
                      <router-link to="/signup">
                        <ButtonSolid title="Sign up"/>
                      </router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
</template>

<script>
import ButtonOutline from './ButtonOutline'
import ButtonSolid from './ButtonSolid'

export default {
  name: 'Navbar',
  components: {
    ButtonOutline,
    ButtonSolid
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: #FAFCFF !important;
}
a {
    transition: .3s;
}

.navbar-brand {
    font-family: Nunito Sans;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #6379F4 !important;
}

.navbar-toggler {
    border: 1px solid rgba(99, 121, 244, 0.3);
    padding: .5rem;
    border-radius: 10px !important;
    transition: .3s;
}

.navbar-toggler:focus {
    outline: 0;
    border: 1px solid #6379F4 !important;
    background-color: rgba(204, 128, 128, 0) !important;
}

.navbar-toggler-icon {
    background-color: #6379f400;
}
</style>
