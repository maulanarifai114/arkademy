<template>
  <div>
    <Header
      p1="Start Accessing Banking Needs
          With All Devices and All Platforms
          With 30.000+ Users"
      p2="Transfering money is eassier than ever, you can access
          Zwallet wherever you are. Desktop, laptop, mobile phone?
          we cover all of that for you!"
    />

    <form @submit.prevent="login">

      <label
        class="login-email"
        :class="{
          'valid': isFocused,
          'invalid': isInvalid
        }"
        for="email">
          <img
            src="../../assets/auth/mail-inactive.svg"
            alt="icon"
            class="login-icon"
            v-if="isFocused === false && isInvalid === false">
          <img
            src="../../assets/auth/mail-active.svg"
            alt="icon"
            class="login-icon"
            v-if="isFocused === true">
          <img
            src="../../assets/auth/mail-error.svg"
            alt="icon"
            class="login-icon"
            v-if="isInvalid === true && isFocused === false">
          <input
            @focus="isFocused=true, isInvalid = false"
            @blur="email !== '' ? (isInvalid = false, isFocused=true) : (isFocused=false, isInvalid = true)"
            v-model="email"
            type="email"
            class="form-email"
            placeholder="Enter your e-mail"
            id="email"
            required>
      </label>

      <label
        :class="{'valid': isFocused, 'invalid': isInvalid}"
        class="login-pass"
        for="password">
        <img
            src="../../assets/auth/lock-inactive.svg"
            alt="icon"
            class="login-icon"
            v-if="isFocused === false && isInvalid === false">
          <img
            src="../../assets/auth/lock-active.svg"
            alt="icon"
            class="login-icon"
            v-if="isFocused === true">
          <img
            src="../../assets/auth/lock-error.svg"
            alt="icon"
            class="login-icon"
            v-if="isInvalid === true && isFocused === false">
        <input
          @focus="isFocused=true, isInvalid = false"
          @blur="password !== '' ? (isInvalid = false, isFocused=true) : (isFocused=false, isInvalid = true)"
          v-model="password"
          :type=visible
          class="form-pass"
          placeholder="Enter your password"
          id="password"
          required>
        <img
          src="../../assets/auth/eye-crossed.svg"
          alt="icon"
          class="login-icon-eye ml-auto"
          @click="visible === 'password' ? hidePassword() : showPassword()"
        >
      </label>

      <div>
        <router-link to="/auth/reset" class="forgot">
          Forgot password
        </router-link>
      </div>

      <div>
        <p
          :class="isInvalid === false ? 'p-invalid p-invalid-inactive' : 'p-invalid error-z-c'">
          Email or Password Invalid
        </p>
      </div>

      <!-- <router-link to="/home"> -->
        <button
          type="submit"
          class="this-btn"
          :class="{'valid-btn': isFocused}"
        >
          Login
        </button>
      <!-- </router-link> -->

      <p class="route-link">
        Don’t have an account? Let’s <router-link to="/auth/signup"> Sign Up</router-link>
      </p>
    </form>

  </div>
</template>

<script>
import Header from '../../components/auth/Header'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      visible: 'password',
      isFocused: false,
      isInvalid: false,
      emailInactive: 'inactive',
      emailActive: 'active',
      emailError: 'error',
      email: '',
      password: ''
    }
  },
  components: {
    Header
  },
  methods: {
    ...mapActions(['LOGIN']),
    hidePassword () {
      this.visible = 'text'
    },
    showPassword () {
      this.visible = 'password'
    },
    login () {
      console.log('login dipanggil')
      const user = {
        email: this.email,
        password: this.password
      }
      this.LOGIN(user)
        .then((res) => {
          this.$router.push('/home')
        })
        .catch((err) => {
          console.log(err)
          this.isInvalid = true
          this.isFocused = false
        })
    }
  }
}
</script>

<style scoped>

input {
  background-color: rgba(0, 0, 0, 0);
}

body {
  position: relative;
}

div .p-invalid {
  width: 430px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.p-invalid {
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  margin: 0;
  transition: .3s;
}

.p-invalid-inactive {
  color: rgba(0, 0, 0, 0) !important;
}

/* Form Email */
.login-email {
  width: 430px !important;
  height: 42px !important;
  margin: 60px 0 0 0 !important;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6) ;
  display: flex !important;
  padding: 0 0 0 0 !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

.valid {
  border-bottom: 1.5px solid #6379F4 !important;
}

.valid-btn {
  background-color:  #6379F4 !important;
}

.valid-btn:hover {
  background-color:  rgba(99, 121, 244, 0.8) !important;
}

.invalid {
  border-bottom: 1.5px solid #FF5B37 !important;
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
  /* //styleName: Regular (Label); */
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
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
  margin: 60px 0 0 0 !important;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  display: flex;
  padding: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0) !important;
}

.login-icon-eye {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.form-pass {
  border: 0;
  outline: 0;
  width: 300px;
  height: 24px;
}

.form-pass::placeholder {
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #a9a9a999;
}

.form-pass:focus {
    outline: 0;
}

/* End Form Password */

/* Forgot */
div .forgot {
  margin: 20px 0 0 0;
  width: 430px;
  display: flex;
  flex-direction: row-reverse;
  transition: .3s;
}

.forgot {
  width: auto;
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(58, 61, 66, 0.8);
}

.forgot:hover {
  text-decoration: none;
  color: #6379F4;
}

/* End Forgot */

/* Login Button */
.this-btn {
  /* margin: 90px 0 0 0; */
  border-radius: 12px;
  /* background-color: #6379f4; */
  background-color: #dadada;
  color: #ffffff;
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
.this-btn:hover {
  background-color: #6379f4;
}
.this-btn:focus {
  outline: 0;
  border: 0;
}

/* End Login Button */

/* Sign Up */
.route-link {
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

.route-link a {
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
    cursor: pointer;
}

.route-link a:hover {
    color: rgba(99, 121, 244, 0.8);
}

/* End Sign Up */

/* End Login */

/* Media Small >=576 - <767  Small */
@media (max-width: 767px) {

  div .p-invalid {
    width: 100%;
  }

  .login-email {
    width: auto !important;
  }

  .login-pass {
    width: auto;
  }

  .login-icon-eye {
    margin-left: auto;
  }

  div .forgot {
    width: 100%;
  }

  .this-btn {
    width: 100%;
  }

  .route-link {
    width: 100%;
    margin: 40px 0 0 0;
  }
}

/* Media Extra Small <567 */
@media (max-width: 566px) {

    .this-btn {
        width: 100%;
    }

    .login-icon-eye {
        margin-left: auto;
    }

    .forgot {
        width: auto;
    }

    .route-link {
        width: auto;
        font-size: 14px;
    }

    .route-link a {
        font-size: 14px;
    }

    .invalid {
        width: 100%;
        font-size: 15px;
    }

    .p-invalid {
      font-size: 14px;
    }
}
</style>
