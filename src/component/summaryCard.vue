<template>
  <div class="summary-card ">
    <h1 class=" summary-card-heading">Summary</h1>
    <div class="summary-card-flex">
      <div class="summary-info-block" v-for="data in summaryData" :key="data.id">
        <h1 class="summary-card-label">{{ data.label }}</h1>
        <p class="summary-card-number">{{ data.value }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import servicesData from "../jsonData/servicesData.json"
export default {
  data() {
    return {
      data: [
        { label: "Account Number", amount: "67238744" },
        { label: "Income", amount: "$20,00,000" },
        { label: "Spends", amount: "$11,00,000" }
      ],
      summaryData:[]
    };
    
  },
  created(){
    this.summaryData=servicesData.summaryData
  }
};
</script>
<style scoped>
.summary-card {
  margin: 12px 24px 0px 24px;
  height: 269px;
  background: #fff0f3;
  border: 1px solid rgba(217, 4, 41, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  display: block;
}
.summary-card-heading {
  margin-left: 24px;
  margin-top: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 25px;
}
.summary-card-flex {
  display: flex;
  flex-wrap: wrap;
}
.summary-info-block {
  width: 288px;
  height: 48px;
  margin-left: 24px;
  margin-bottom: 14px;
}
.summary-card-label {
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.38);
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 9.5px;
}
.summary-card-number {
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
}
@media screen and (min-width: 644px) {
  div.summary-card {
    height: 258px;
  }
}
@media screen and (min-width: 711px) {
  div.summary-card {
    height: 210px;
  }
}
@media screen and (min-width: 954px) {
  div.summary-card {
    height: 187px;
  }
}
@media (min-width: 1024px) {
  div.summary-card {
    height: 145px;
  }
}
</style>
