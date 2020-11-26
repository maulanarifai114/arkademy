<template>
  <div>
    <h2 class="login-p1">
        Did You Forgot Your Password? <br>
        Don’t Worry, You Can Reset Your <br>
        Password In a Minutes.
    </h2>
    <p class="login-p2">
        Now you can create a new password for your Zwallet <br>
        account. Type your password twice so we can confirm your <br>
        new passsword.
    </p>
    <label class="login-pass" for="pass-1">
        <img src="../../assets/auth/lock-inactive.svg" alt="" class="login-icon">
        <input type="password" class="form-pass" placeholder="Create your password" id="pass-1">
        <img src="../../assets/auth/eye-crossed.svg" alt="" class="login-icon-eye">
    </label>
    <label class="login-pass" for="pass-2">
        <img src="../../assets/auth/lock-inactive.svg" alt="" class="login-icon">
        <input type="password" class="form-pass" placeholder="Create your password" id="pass-2">
        <img src="../../assets/auth/eye-crossed.svg" alt="" class="login-icon-eye">
    </label>
    <router-link to="/home">
    <button type="submit" class="login-btn">Reset Password</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NewPass'
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
}

.login-p2 {
    font-weight: 400;
    line-height: 30px;
    margin: 30px 0 0 0;
    color: rgba(58, 61, 66, 0.6);
}

/* End Login Paragraf */

/* Form Username */
.login-person {
    width: 430px;
    height: 42px;
    margin: 60px 0 0 0;
    border-bottom: 1.5px solid #6379F4;
    display: flex;
    padding: 0 0 0 0;
}

/* End Form Username */

/* Form Email */

.login-email {
    width: 430px;
    height: 42px;
    margin: 60px 0 0 0;
    border-bottom: 1.5px solid #6379F4;
    display: flex;
    padding: 0 0 0 0;
}

.login-icon {
    margin: 0 16px 0 0;
    width: 24px;
    height: 24px;
}

.form-email {
    border: 0;
    outline: 0;
    width: 300px;
    height: 24px;
    font-weight: 600;
}

.form-email::placeholder {
    color: #a9a9a999;
}

.form-email:focus {
    outline: 0;
}

/* End Form Email */

/* Form Password */
.login-pass {
    width: 430px;
    height: 42px;
    margin: 74px 0 20px 0;
    /* border-bottom: 1.5px solid #6379F4; */
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    display: flex;
    padding: 0 0 0 0;
}

.login-icon-eye {
    margin: 0 0 0 66px;
    width: 24px;
    height: 24px;
}

.form-pass {
    border: 0;
    outline: 0;
    width: 300px;
    height: 24px;
    font-weight: 600;
}

.form-pass::placeholder {
    color: #a9a9a999;
}

.form-pass:focus {
    outline: 0;
}

/* End Form Password */

/* Forgot */
.forgot {
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(58, 61, 66, 0.8);
    width: 430px;
    display: flex;
    flex-direction: row-reverse;
    transition: .3s;
}

.forgot:hover {
    text-decoration: none;
    color: #6379F4;
}

/* End Forgot */

/* Invalid */
.invalid {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    margin: 30px 0 28px 0;
    color: #FF5B37;
    width: 430px;
}

/* EndInvalid */

/* Login Button */
.login-btn {
    margin: 90px 0 50px 0;
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
    color: #ffffff;
}

.login-btn:focus {
    outline: 0;
    border: 0;

}

/* End Login Button */

/* Sign Up */
.sign-up {
    width: 430px;
    margin: 40px 0 70px 0;
    display: flex;
    justify-content: center;
    /* //styleName: Regular (Label); */
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;

}

.sign-up a {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: none;
    margin: 0 0 0 3px;
    color: #6379F4;
    transition: .3s;
}

.sign-up a:hover {
    color: rgba(99, 121, 244, 0.8);
}

/* End Sign Up */

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

    .login-person {
        width: auto;
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
