<template>
  <div class="red-background">
    <img  class="form-design1" src="src\assets\images\formDesign1.svg" />
    <img class="team-logo" src="src\assets\images\Team spirit logo.svg"/>

    <img class="micro-bank-logo" src="src\assets\images\banklogo.svg" />
    <img class="form-design2" src="src\assets\images\formDesign2.svg" />
  </div>
</template>
<style>
.red-background {
  width: 50%;
  background: hsl(350, 96%, 43%);
  display: flex;
  flex-direction: column;
  display: none;
}
.form-design1 {
  width: 277px;
  height: auto;
  display: block;
}
.team-logo {
  margin-left: 90px;
  width: 500px;
  height: 500px;
  height: auto;
  margin-top: -150px;
}

.micro-bank-logo {
  margin-left: 150px;
  width: 400px;
  height: 80px;
  margin-top: -23px;
}
.form-design2 {
  width: 137px;
  height: 137px;
  margin-right: 24px;
  margin-left: 650px;
  margin-top: -30px;
}

@media screen and (min-width: 1100px){

div.red-background{
  display: block;
}

div.team-logo {
  width: 500px;
  height: auto;
  margin-top: 4%;
}
.micro-bank-logo{
  width:450px;
  margin-left: 90px
}
}
@media screen and (min-width: 1300px){
  .team-logo{
    margin-left: 150px;
  }
  .micro-bank-logo{
    margin-left: 150px;
  }
}
</style>
