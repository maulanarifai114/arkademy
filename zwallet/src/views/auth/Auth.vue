<template>
    <div>
      <section class="container-fluid">
        <div class="row">
          <aside class="mask primary-z col-xl-7 col-lg-6 col-md-4 col-sm-12 ">
            <h1 class="title">Zwallet</h1>
            <div class="phone">
                <img src="../../assets/auth/phone1.png" alt="phone-1" class="phone-1">
                <img src="../../assets/auth/phone2.png" alt="phone-2" class="phone-2">
            </div>
            <div class="mask-paragraph">
                <h4 class="mask-p1">
                    App that Covering Banking Needs.
                </h4>
                <h6 class="mask-p2">
                    Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage.
                </h6>
            </div>
          </aside>
          <main class="login white-z col-xl-5 col-lg-6 col-md-8 col-sm-12">
            <router-view></router-view>
          </main>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
/* Start Container */

/* End Container */

/* Login */
.login {
    box-sizing: border-box;
    padding: 120px 50px 0 50px;
}
/* End Login */

/* Start Mask */
.mask {
    min-height: 100vh;
    /* min-width: 100vw; */
    background-image: url(../../assets/auth/mask-group.svg);
    background-size: cover;
}

.title {
    margin: 50px 0 0 135px;
    font-family: Nunito Sans;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
}

.phone {
    width: 100%;
    margin: 40px 0 0 0;
    position: relative;
}

.phone-1 {
    margin: 0 0 0 100px;
}

.phone-2 {
    position: absolute;
    left: 250px;
}

.mask-paragraph {
    margin: 12px 0 0 135px;
    width: 60%;
}

.mask-p1 {
    /* //styleName: Bold (H2); */
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
}

.mask-p2 {
    /* //styleName: Regular (Label); */
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin: 30px 0 70px 0;
}

/* End Mask */

/* Media Large >992 - <1199 */
@media (max-width: 1199px) {
    .phone-1 {
        margin: 0 0 0 0px;
        position: relative;
        left: -15px;
    }

    .phone-2 {
        position: absolute;
        left: 135px;
    }

    .mask-paragraph {
        margin: 12px 0 0 40px;
        width: 80%;
    }

    .mask-p1 {
        font-size: 18px;
    }

    .mask-p2 {
        font-size: 13px;
    }
}

/* Media Medium >768 - <991 */
@media (max-width: 991px) {
    .mask {
      overflow: hidden;
    }
    .title {
        margin: 50px 0 0 20px;
    }

    .phone-1 {
        left: -80px;
    }

    .phone-2 {
        position: absolute;
        top: 0px;
        left: 75px;
    }

    .mask-paragraph {
        margin: 12px 0 0 20px;
        width: 80%;
    }
}

/* Media Small >=576 - <767  Small */
@media (max-width: 767px) {
    .title {
        margin-left: 40px;
    }

    .mask {
        min-height: auto;
    }

    .phone-1 {
        left: 50px;
    }

    .phone-2 {
        left: 150px;
    }

    .login {
        padding: 80px 50px 0 50px;
    }

    .login-email {
        width: auto;
    }

    .login-pass {
        width: auto;
    }

    .login-icon-eye {
        margin-left: auto;
    }

    .forgot {
        width: 100%;
    }

    .login-btn {
        width: 100%;
    }

    .sign-up {
        width: 100%;
    }
}

/* Media Extra Small <567 */
@media (max-width: 566px) {
    .mask {
        overflow: hidden;
    }

    .phone-1 {
        left: -70px;
    }

    .phone-2 {
        left: 70px;
    }

    .login {
        padding: 80px 40px 0 40px;
    }

    .login-email {
        width: auto;
    }

    .login-pass {
        width: auto;
    }

    .login-btn {
        width: 100%;
    }

    .login-icon-eye {
        margin-left: auto;
    }

    .login-p1 {
        font-size: 20px;
    }

    .login-p2 {
        font-size: 12px;
        line-height: 1.5em;
    }

    .forgot {
        width: auto;
    }

    .sign-up {
        width: auto;
        font-size: 14px;
    }

    .sign-up a {
        font-size: 14px;
    }

    .invalid {
        width: 100%;
        font-size: 15px;
    }
}
</style>
