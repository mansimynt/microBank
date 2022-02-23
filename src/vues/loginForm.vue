<template>
<div class="wrap">
  <form-design></form-design>
  <!-- <api-calls @invalid_Error="notMatch($event)"></api-calls> -->
    <div class="login-Card">
      <div class="login-Page">
        <p class="login-Heading">Login</p>
        <p class="Please-Login-Heading page-Text">Please login to your account</p>
        <p class="loginId page-Text">Email or Phone</p>
        <input
          type="text"
          class="input-Box page-Text"
          placeholder="Enter email"
          v-model="inputemail"
        />
        <p class="page-Text password-Label">Password</p>
        <input
          type="password"
          class="input-Box page-Text"
          v-model="inputpassword"
        />
        <p class="error-Message" v-if="invalidPassword" >Password and Email Not Matched</p>
        <p class="forgot-Password">Forgot Password?</p>
        <button class="loginBtn" @click="submit()">Login</button>
        <div class="dont-Have-Account-Text">
          Don't have an account?
          <router-link to="/createAccount">  <p class="create-Account">  Create an Account</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axious from "axios";
import {eventBus} from '../main'
import formDesign from '../component/formDesign.vue';
import store from '../store/store'

export default {
  
  components: { formDesign,store },
  data() {
    return {
      inputemail: "",
      inputpassword: "",
      invalidPassword:false,
      email: "",
      password: "",
      id:null,
      loginUser:''
    };
  },
  
  
  methods: {

    login(){
     eventBus.$emit('login',this.inputemail,this.inputpassword);
    
    },
    notMatch(event){
      console.log(event);
      
      this.invalidPassword=event;

    },

    submit() {
      axious.get(this.$site_url + "users")
        .then((res) => {
          const data = res.data;
          const allusers = [];
          for (let key in data) {
            const user = data[key];
            allusers.push(user);
            if (
              allusers[key].email === this.inputemail &&
              allusers[key].password === this.inputpassword

            ) {
           
             this.$store.state.userId=allusers[key].id;
             this.$store.state.loggedUser=allusers[key].FullName;
            console.log(this.$store.state.loggedUser);
               this.$router.push('/dashboard');
              
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.error-Message{
  color: red;
   margin-left: 400px;
}
.wrap {
  display: flex;
  flex-direction: row;
}
.create-Account{
  color: #d90429;
  display: inline ;
}
.login-Card {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 13px 19px 2px rgba(0, 0, 0, 0.14),
    0px 40px 40px 40px rgba(0, 0, 0, 0.12);
}
.login-Page {
  display: flex;
  flex-direction: column;
  /*justify-content: center;
        align-items: center;*/
}
.login-Heading {
  font-weight: bold;
  font-size: 55px;
  line-height: 44px;
  margin-top: 230px;
  margin-left: 400px;
}
.Please-Login-Heading {

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
.page-Text {
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  height: 19px;
  margin-left: 400px;
}
.loginId {

  margin-top: 40px;
  color: #1a1a1a;
}
.input-Box {
  width: 361px;
  height: 60px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
  margin-top: 8px;
}
.loginBtn {
  width: 361px;
  height: 58px;
  color: #ffffff;
  font-size: 25px;
  background: #d90429;
  margin-left: 400px;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  margin-top: 32px;
}
.forgot-Password {
  margin-top: 20px;
  color: #d90429;
  margin-left: 585px;
  font-weight: bold;
  font-size: 20px;
}
.dont-Have-Account-Text {
  margin-top: 34px;
  margin-left: 400px;
  color: #828282;
  font-weight: bold;
  font-size: 20px;
}
</style>