<template>
  <div>
    <img src="../../assets/auth/success.svg" alt="success" width="70px" height="70px">
    <h2 class="login-p1">
        Your PIN Was Successfully Created
    </h2>
    <p class="login-p2">
        Your PIN was successfully created and you can now access <br>
        all the features in Zwallet. Login to your <br>
        start exploring!
    </p>
    <router-link to="/auth/login">
      <button type="submit" class="login-btn">Login Now</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PinSuccess'
}
</script>

<style scoped>
/* Start Login */
.login {
    box-sizing: border-box;
    padding: 120px 50px 0 50px;
}

/* Login Paragraf */
.login-p1 {
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: #3A3D42;
    margin: 50px 0 0 0;
}

.login-p2 {
    font-weight: 400;
    line-height: 30px;
    margin: 30px 0 0 0;
    color: rgba(58, 61, 66, 0.6);
}

/* End Login Paragraf */

/* Pin Input */
.pin-col {
    width: 430px;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: 50px 0 0 0;
}

.pin-outline {
    width: 53px;
    height: 65px;
    border-radius: 10px;
    border: 1px solid #6379F4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pin-box {
    width: 31px;
    height: 43px;
    /* border-bottom: 1px solid rgba(169, 169, 169, 0.4); */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FAFCFF;
}

.pin-in {
    font-family: Nunito Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    background: #fafcff00;

}

input {
    outline: 0;
    border: 0;
}

/* End Pin Input */

/* Login Button */
.login-btn {
    margin: 90px 0 0 0;
    border-radius: 12px;
    background-color: #6379F4;
    color: #fff;
    border: 0;
    outline: 0;
    width: 430px;
    height: 57px;
    /* //styleName: Bold (Button); */
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    transition: .3s;
}

.login-btn:hover {
  background-color: rgba(99, 121, 244, 0.8);
}

.login-btn:focus {
    outline: 0;
    border: 0;

}

/* End Login Button */

/* End Login */

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
        margin-bottom: 100px;
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
        padding: 80px 50px 0 50px;
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

    .pin-col {
        width: auto;
    }

    .login-btn {
        margin: 90px 0 100px 0;
    }

    .forgot {
        width: auto;
    }

    .sign-up {
        width: auto;
    }
}

@media (max-width: 442px) {
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
        padding: 80px 50px 0 50px;
    }

    .login-email {
        width: auto;
    }

    .login-pass {
        width: auto;
    }

    .login-btn {
        width: 100%;
        margin: 80px 0 50px 0;
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

    .pin-col {
        width: auto;
    }

    .pin-outline {
        width: 30px;
        height: 40px;
        border-radius: 8px;
    }

    .pin-box {
        width: 20px;
        height: 20px;
    }

    .pin-in {
        width: 20px;
        height: 20px;
        font-size: 20px;
    }

    .forgot {
        width: auto;
    }

    .sign-up {
        width: auto;
    }
}
</style>
