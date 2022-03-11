<template>
  <div class="current-services-card">
    <p class="current-services-heading">Current Services</p>
    <div class="current-services-flex" id="current-services-flex">
      <div class="current-service" >
        <div class="service-image" v-for="img in serviceImages" :key="img.id"><img :src="img.imageUrl" /></div>
      </div>
      <div class="current-service" >
          <p class="service-names " v-for="service in servicename" :key="service.id">{{ service.value }}</p>
        </div>
 
      <!-- <table class="current-service">
        <tr>
          <td v-for="img in serviceImages" :key="img.id">
            <img :src="img.imageUrl" />
          </td>
        </tr>
        <tr>
          <td v-for="service in servicename" :key="service.id">
            {{ service.value }}
          </td>
        </tr>
      </table> -->
    </div>
  </div>
</template>
<script>
import store from "../store/store";
import currentAccount from "../assets/images/CurrentAccount.svg";
import loans from "../assets/images/Loans.svg";
import payroll from "../assets/images/Payroll.svg";
import servicesData from "../jsonData/servicesData.json";

export default {
  components: { store },
  data: function() {
    return {
      serviceImages: [],
      servicename: []
    };
  },
  created() {
    this.serviceImages.push(
      { id: 1, imageUrl: currentAccount },
      { id: 2, imageUrl: loans },
      { id: 3, imageUrl: payroll }
    );
    this.servicename = servicesData.currentServices;
  }
};
//---------------------------------------------------------------------
</script>
<style>
td {
  padding-right: 230px;
  width: 10%;
}
.service-names{
display: flex;
margin-right: 90px;
}
.service-image img{
   margin-right: 90px;
}
.current-service p{
  margin-right: 90px;
}
.current-service {
  height: 80px;
  display: flex;
  margin-left: 40px;
  overflow: auto;
  
}
.current-service div{
  margin: 20px;
}

.current-services-card {
  height: 392px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  margin: 0px 24px 0px 24px;
}
.current-services-heading {
  width: 148px;
  height: 25px;
  padding-top: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}
.current-services-flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
@media screen and (min-width: 482px) {
  div.current-services-card {
    height: 250px;
  }
}
</style>
