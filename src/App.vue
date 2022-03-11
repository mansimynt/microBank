<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import createaccount from "./vues/createAccountForm.vue";
import DashBoard from "./vues/dashBoard.vue";
import loginForm from "./vues/loginForm.vue";
export default {
  components: { loginForm, createaccount, DashBoard },
  name: "app",
  props: ["name"],
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
      display: true
    };
  }
};
</script>

<style>
body {
  background: #e5e5e5;
  font-family: Open Sans;
}
h1 {
  margin: 0px;
}
</style>
