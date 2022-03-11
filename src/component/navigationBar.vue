<template>
  <nav class="navigation-bar ">
    <ul>
      <router-link to="/Dashboard" tag="li" active-class="navigation1">
        <a>Summary</a>
      </router-link>
      <router-link to="/Details" tag="li" active-class="active-tab">
        <a>Details</a>
      </router-link>
    </ul>
  </nav>
</template>
<style scoped>
ul {
  list-style: none;
  height: 60px;
  margin-top: 0px;
  padding-left: 0px;
}
li a {
  text-align: center;
  padding: 24px;
  text-decoration: none;
  color: #1a1a1a;
}
li {
  height: 54px;
  padding-top: 6px;
  border-right: 1px solid #f2f2f2;
  font-size: 16px;
  line-height: 175%;
  float: left;
}
.navigation-bar {
  font-family: Open sans;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  display: flex;
  margin: 0px 24px 0px 24px;
}
.active-tab {
  font-weight: bold;
  font-size: 16px;
  color: #1a1a1a;
  border-top: 3px solid #e8544b;
}
.navigation1 {
  width: 125px;
  height: 60px;
  font-weight: bold;
  border-right: 1px solid #f2f2f2;
  border-top: 3px solid #e8544b;
  border-top-left-radius: 9px;
}
</style>
