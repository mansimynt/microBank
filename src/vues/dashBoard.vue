<template>
<div>
    <page-heading></page-heading>
    <h1 class="dashboard">Dashboard</h1>
    <navigation-bar> </navigation-bar>
    <summary-card  ></summary-card>
    <div class="bank-service-message">
        <p class="services-word">Services</p>
        <p class="services-for-you-message">Micro bank services for you</p>
    </div>
    <current-service-card></current-service-card>
    <available-services-card> </available-services-card>
    <footer-bar></footer-bar>
    
</div>    
</template>
<script>
import transactionTable from '../component/transactionTable.vue'
import availableServicesCard from '../component/availableServicesCard.vue'
import currentServiceCard from '../component/currentServiceCard.vue'
import footerBar from '../component/pageFooter.vue'
import pageHeading from '../component/pageHeading.vue'
import NavigationBar from '../component/navigationBar.vue'
import SummaryCard from '../component/summaryCard.vue'



export default {
  components: { pageHeading, NavigationBar, SummaryCard, currentServiceCard, availableServicesCard, footerBar,transactionTable },
  methods:{

      hello(){
          console.log('this is hello method from parent dashboard componnet');
      }
  }
    
}
</script>
<style scoped>
.dashboard{
	font-family: Open Sans;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
    margin-top: 32px;
    margin-left: 24px;
    margin-bottom: 24px;
}
.bank-service-message{
	display: flex;
	width: 248px;
	height: 19px;
	font-size: 14px;
	line-height: 19px;
    margin: 32px 24px 12px 24px;

}
.services-word{
	
	font-weight: bold;
	margin-right: 8px;
    display: inline;
}
.services-for-you-message{
	font-style: italic;
}
p{
    display: inline;
    margin: 0px;
}
</style>