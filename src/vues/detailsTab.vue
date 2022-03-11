<template>
  <div>
    <page-heading></page-heading>
    <h1 class="dash-board">Dashboard</h1>
    <navigation-bar></navigation-bar>
    <transaction-table></transaction-table>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeading from "../component/pageHeading.vue";
import NavigationBar from "../component/navigationBar.vue";
import PageFooter from "../component/pageFooter.vue";
import TransactionTable from "../component/transactionTable.vue";
export default {
  components: { pageHeading, NavigationBar, TransactionTable, PageFooter }
};
</script>

<style>
.dash-board {
  font-family: Open Sans;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin-top: 32px;
  margin-left: 24px;
  margin-bottom: 24px;
}
.footer {
  margin-top: 345px;
}
</style>
