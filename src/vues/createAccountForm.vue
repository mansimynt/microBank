<template>
  <div class="wrap">
    <form-Design></form-Design>
    <div class="form-container">
      <div class="create-account-heading">Create an Account</div>
      <div class="form">
        <P class="form-label">Full Name</P>
        <input type="text" class="input-box" id="fullName" v-model="username" />

        <P class="form-label">Date of Incorporation</P>
        <input
          type="date"
          class="input-box"
          id="dateOfIncorporation"
          v-model="dateOfIncorporation"
        />
        <P class="form-label">Email</P>
        <input type="email" class="input-box" id="email" v-model="email" />
        <P class="form-label">Password</P>
        <input type="text" class="input-box" id="pass1" v-model="password" />
        <p
          id="password-Validation-Msg"
          style="color: red"
          v-if="this.invalidPassword"
        >
          {{ this.validationMsg }}
        </p>
        <P class="form-label">Confirm Password</P>
        <input
          type="password"
          class="input-box"
          id="pass2"
          v-model="confirmPassword"
        />
        <p id="not-Match" style="color: red" v-if="this.isNotEqual">
          {{ this.notEqualMessage }}
        </p>
        <button class="submitBtn" id="button" type="submit" @click="submit()">
          Create an Account
        </button>
      </div>
      <div class="aleady-Have-Account-Heading">
        Aleady have an account?
        <router-link to="/Login" class="login-heading"> Login</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import formDesign from "../component/formDesign.vue";
export default {
  components: { formDesign },
  data() {
    return {
      componets: {},
      validationMsg: "",
      notEqualMessage: "",
      invalidPassword: true,
      isNotEqual: false,
      username: "",
      dateOfIncorporation: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },

  methods: {
    validate() {
      
      if (this.password === "") {
        this.invalidPassword = true;
        this.validationMsg = "Please Enter Passwoard!!";
      } else if (this.password.length < 8) {
        this.invalidPassword = true;
        this.validationMsg = "password minimum contain 8 charachter!!";
      } else if (this.password.search(/[0-9]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg = "password must have at least one numeric value";
      } else if (this.password.search(/[a-z]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg =
          "password must have at least one lowerCase character!!";
      } else if (this.password.search(/[A-Z]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg =
          "password must have at least one uppercase character!!";
      } else if (this.password.search(/[#?!@$%^&*-]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg = "password must have at least one symbol!!";
      } else {
        this.invalidPassword = false;
        if (this.password != this.confirmPassword) {
          this.isNotEqual = true;
          this.notEqualMessage = "Password Not Match!!";
        } else {
          return true;
        }
      }
    },
    submit() {
      let result = this.validate();
      let data = {};
      if (result) {
        data = {
          FullName: this.username,
          dateOfIncorporation: this.dateOfIncorporation,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        this.$store.dispatch("createNewAccount", data);
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
}
.form-container {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 13px 19px 2px rgba(0, 0, 0, 0.14),
    0px 40px 40px 40px rgba(0, 0, 0, 0.12);
    padding-right: 50px;
}

.login-heading {
  color: #d90429;
}

.create-account-heading {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 44px;
  color: #1a1a1a;
  margin-left: 25%;
  margin-top: 100px;
}
.form-label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  margin-top: 30px;
  line-height: 19px;
  margin-left: 25%;
  margin-bottom: 10px;
}

.input-box {
  width: 250px;
  height: 50px;
  margin-left: 25%;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
  flex-basis: 3%;
}
.submitBtn {
  width: 260px;
  height: 60px;
  margin-left: 25%;
  margin-top: 30px;
  margin-bottom: 0px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  color: white;
  font-size: 23px;
}
#not-Match {
  margin-left: 330px;
}
#password-Validation-Msg {
  margin-left: 330px;
}
.aleady-Have-Account-Heading {
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #828282;
  margin-left: 23%;
  margin-top: 32px;
  padding-bottom: 19px;
}
@media screen and (min-width: 570px){
.input-box{
  width: 280px;
}
.create-account-heading{
  margin-top: 110px ;
  font-size: 35px;
}
.submitBtn{
  width: 280px;
}
.form-container{
  padding-left: 15%;
}
.aleady-Have-Account-Heading{
  font-size: 18px;
}
}

@media screen and (min-width: 1100px){
  .form-container{
    width: 50%;
    padding-left: 0;
  }
  .input-box{
  width:360px;
} 
.submitBtn{
  width: 360px;
}
}
@media screen and (max-width: 300px){
  .input-box {
    width: 290px;
  }
}
</style>
