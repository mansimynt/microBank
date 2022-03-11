<template>
  <div class="available-services-card ">
    <p class="available-services-heading">Available Services</p>
    <div class="available-sevice-flexbox">
       <div class="service-image">
         <div  v-for="img in serviceImages" :key="img.id"><img :src="img.imageUrl" /></div>
       </div>
       <div class="service-image">
         <div class="service-names" v-for="service in servicename" :key="service.id"> {{ service.value }}</div>
       </div>
       
       
       
       
       
       
       <!-- <table class="">
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
      
      
      <!-- <table>
       <tr><td><img v-for="img in serviceImages" :key="img.id" :src="img.imageUrl" /></td><tr>
        <tr v-for="service in servicename" :key="service.id"> {{ service.value }}</tr>
      </table> -->
      </div>
    </div>
  
</template>
<script>
import wallet from "../assets/images/Wallet.svg";
import taxPayment from "../assets/images/Taxpayment.svg";
import investments from "../assets/images/Investments.svg";
import loans from "../assets/images/Loans.svg";
import servicesData from "../jsonData/servicesData.json";
export default {
  data() {
    return {
      serviceImages: [],
      servicename: []
    };
  },
  created() {
    this.serviceImages.push(
      { id: 1, imageUrl: wallet },
      { id: 2, imageUrl: taxPayment },
      { id: 3, imageUrl: investments },
      { id: 4, imageUrl: loans }
    );
    this.servicename = servicesData.availableServices;
  }
};
</script>
<style scoped>
th {
  padding-right: 200px;
}
.service-image {
  display: flex;
  margin-left: 50px;
}
.service-image img{
   margin-right: 80px;
       margin-left: 26px;
}
.service-name {
  display: flex;
  flex-direction: column;
}
.available-services-card {
  height: 311px;
  background: #ffffff;
  margin: 24px 24px 0px 24px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding-bottom: 10px;
}
.service-img {
  display: flex;
  flex-direction: row;
}
.service-names{
display: flex;
margin-right: 90px;
}

.available-services-heading {
  margin-left: 24px;
  padding-top: 24px;
  font-size: 18px;
  font-weight: bold;
  height: 25px;
}
.available-sevice-flexbox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
@media screen and (min-width: 482px) {
  div.available-services-card {
    height: 288px;
  }
  td {
    padding-right: 80px;
  }
}
@media screen and (min-width: 644px) {
  div.available-services-card {
    height: 192px;
  }
  td {
    padding-right: 92px;
  }
}
@media screen and (min-width: 973px) {
  div.available-service {
    width: 218px;
    height: 123px;
  }
  td {
    padding-right: 200px;
  }
}
</style>
