<template>
  <div class="wrap">
    <form-design></form-design>
    <div class="login-card">
      <div class="login-page">
        <p class="login-heading">Login</p>
        <p class="please-login-heading page-text">
          Please login to your account
        </p>
        <p class="login-id page-text">Email or Phone</p>
        <input type="text" class="input-box page-text" v-model="inputemail" />
        <p class="page-text password-Label">Password</p>
        <input
          type="password"
          class="input-box page-text"
          v-model="inputpassword"
        />
        <p class="forgot-Password">Forgot Password?</p>
        <button class="login-btn" @click="submit()">Login</button>
        <div class="dont-have-account-text">
          Don't have an account?
          <router-link to="/CreateAccount">
            <p class="create-account">Create an Account</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import formDesign from "../component/formDesign.vue";
import store from "../store/store";

export default {
  components: { formDesign, store },
  data() {
    return {
      inputemail: "",
      inputpassword: "",
      invalidPassword: false,
      email: "",
      password: "",
      id: null,
      loginUser: ""
    };
  },
  beforeCreate() {
    this.$store.dispatch("getAllUsers");
    this.$store.dispatch("getTotalServices");
  },
  methods: {
    submit() {
      let currentUserDetails = [this.inputemail, this.inputpassword];
      this.$store.dispatch("userAuthentication", currentUserDetails);
      const user = this.$store.state.loggedUser;
      console.log("current user", user);
      if (user.length > 0) {
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>
<style scoped>
.error-Message {
  color: red;
  margin-left: 400px;
}
.wrap {
  display: flex;
  flex-direction: row;
}
.create-account {
  color: #d90429;
  display: inline;
  text-decoration: none;
}
.login-card {
  background: #ffffff;
  width: -webkit-fill-available;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 13px 19px 2px rgba(0, 0, 0, 0.14),
    0px 40px 40px 40px rgba(0, 0, 0, 0.12);
  padding-bottom: 95px;
}
.login-page {
  display: flex;
  flex-direction: column;
}
.login-heading {
  font-weight: bold;
  font-size: 50px;
  line-height: 44px;
  margin-top: 200px;
  margin-left: 30%;
}
.please-login-heading {
  margin-top: 25px;
  color: #828282;
  font-family: Open Sans;
  font-style: normal;
}
.password-Label {
  margin-top: 24px;
}
p {
  margin: 0px;
}
.page-text {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  height: 19px;
  margin-left: 30%;
}
.login-id {
  margin-top: 40px;
  color: #1a1a1a;
}
.input-box {
  width: 215px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
  margin-top: 8px;
}
.login-btn {
  width: 215px;
  height: 58px;
  color: #ffffff;
  font-size: 25px;
  background: #d90429;
  margin-left: 30%;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  margin-top: 32px;
}
.forgot-Password {
  margin-top: 20px;
  color: #d90429;
  margin-left: 40%;
  font-weight: bold;
  font-size: 15px;
}
.dont-have-account-text {
  margin-top: 55px;
  margin-left: 30%;
  color: #828282;
  font-weight: bold;
  font-size: 17px;
}
@media screen and (max-width: 360) {
  .login-heading {
    font-size: 50px;
    margin-left: 30%;
    margin-top: 200px;
  }
}
@media screen and (min-width: 412px) {
  .dont-have-account-text {
    font-size: 19px;
  }
  .login-card {
    padding-bottom: 150px;
  }
}

@media screen and (min-width: 802px) {
  .login-heading {
    font-size: 40px;
    margin-top: 20%;
    margin-left: 25%;
  }
  .page-text {
    font-size: 16px;
    margin-left: 25%;
  }
  .please-login-heading {
    margin-top: 5%;
  }
  .forgot-Password {
    font-size: 16px;
  }
  .login-btn {
    margin-left: 25%;
    width: 300px;
  }
  .dont-have-account-text {
    margin-left: 25%;
  }

  .input-box {
    width: 300px;
  }
}
@media screen and (min-width: 1100px) {
  .login-card {
    width: 50%;
  }
}
</style>
