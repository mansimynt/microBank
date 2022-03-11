<template>
    <div class="table-container">
        <table  class="table-contains">
            <tr class="table-headings">
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr v-for="data in this.tableData" :key="data.Date" >
                <td>{{ data.Transactionid}}</td>
                <td>{{ data.Date}}</td>
                <td> {{data.Amount}}</td>
                <td :class="getStatus(data.status)">{{data.status}}</td>
                <td><img src="src\assets\images\viewIcon.svg"/>
                <img class="downloadIcon" src="src\assets\images\downloadIcon.svg"/></td>
            </tr>
            
            <!-- <tr v-for="data in tableData" :key="data.Transactionid">{{data.Amount}}
                <td>{{ data.Transactionid}}</td>
                <td>{{ data.Date}}</td>
                <td>{{ data.Amount}}</td>
                <td :class="[data.status==='Approved' ? 'Approved':'rejected']" >{{ data.status}}</td>
                   <td><img src="src\assets\images\viewIcon.svg"/>
                <img class="downloadIcon" src="src\assets\images\downloadIcon.svg"/></td>
              
            </tr> -->
        </table>
    </div>    
</template>

<script>
import servicesData from "../jsonData/servicesData.json"

export default {
    data: function(){
        return{
          tableData:[],
        }
    },
    created(){
        this.tableData=servicesData.TransactionData;
    
    },
    methods:{
        getStatus(status){
          return  status==='Approved' ? 'Approved':'rejected'
        }

    },

}
</script>
<style scoped>
.Approved{
    color: #008000;
}
.rejected{
    color: #FF0000;
}
.table-contains{
    overflow: auto;
}
td{
    padding-right: 0px;border: 1px solid #E0E0E0;
box-sizing: border-box;

}
img{
    display: inline;
}
.table-container{
  margin: 12px 24px 350px 24px;
height: 300px;
background: #FFFFFF;
box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
border-radius: 12px;
padding: 28px;
overflow: auto;



}
.downloadIcon{
    padding-left: 20px;
    padding-right: 170px;
}
th{
    font-weight: bold;
font-size: 17px;
line-height: 157%;
color: #828282;
padding-right: 200px;
flex-direction: row;
}
tr{ width: 100%;
    height: 46px;
    background: rgba(244, 245, 253, 0.5);
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px;
   

}

.table-headings{
    background: #FFFFFF;

}

</style>