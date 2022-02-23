<template>
  <div class="available-Services-Card ">
        <p class="Available-Services-Heading">Available Services</p>
        <div class="available-Sevice-Flexbox">
        </div>
  </div>        

    
</template>
<script>

export default {
  data() {
    return {
      totalServices: [],
      subscribeServices: [],   /* declaring arrays */
      availableServices: [],
      result: [],
	  userId: 0
    };
  },
  created() {
     this.userId=this.$store.state.userId;  // assigning currently login user id
    this.getData();
  },
  methods: {
    getData: function() {

		this.$http.get(this.$site_url+"allservices").then(response=>{
			return response.json();
			})
			.then(data=>{ 
          for(let i=0;i<data.length;i++)//calculate total services
          {                               
             let j=data[i].service;
             this.totalServices.push(j);
          }
         
		
	
	this.$http.get(this.$site_url+ "users").then(response=>{ return response.json()})
    .then((data)=>{
  
    for(let i=0;i<data[this.userId].services.length;i++)//Calulating subsribe service by user
    {
        let j=data[this.userId].services[i].servicename;
      this.result = this.subscribeServices.push(j);
    }
   
    this.availableServices=this.totalServices;//assigning total services to available services
   // console.info("availableservice before camparing",this.availableServices);
    for(let i=0;i<this.availableServices.length;i++)
    {
        for(let j=0;j<this.subscribeServices.length;j++)
        { 
            if(this.availableServices[i]===this.subscribeServices[j])
            {
                this.availableServices.splice(i,1);
            }
        }
    }//console.info("remaining available services",this.availableServices); 
	
      for(let i=0;i<this.availableServices.length;i++)
    { 
     let availableflex=document.querySelector('.available-Sevice-Flexbox');
     let div=document.createElement('div');
     div.className='availableservice';
     let img=document.createElement('img');
     let src= "src/assets/images/"+this.availableServices[i] + ".svg";
     img.src=src;
     img.className='serviceimg';
     div.appendChild(img);
     let p=document.createElement('p');
     p.innerHTML=this.availableServices[i];
     p.className='servicename';
     div.appendChild(p);
     availableflex.appendChild(div);
    }
 });
});//
	} }
};
</script>
<style>
.available-Services-Card{
	height: 311px;
	background: #FFFFFF;
	margin: 24px 24px 0px 24px;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
border-radius: 12px;
padding-bottom: 10px;
}
.availableservice{
	width: 130px;
	height: 95px;
	margin-top: 24px;
	margin-left: 24px;
}
.Available-Services-Heading{
	margin-left: 24px;
	padding-top: 24px;
	font-size: 18px;
	font-weight: bold;
	height: 25px;
	padding-bottom: 6px;
}
.available-Sevice-Flexbox
{
	display: flex;
	flex-wrap: wrap;
}
@media screen and ( min-width: 482px){

  div.available-Services-Card {
  height: 288px;

}}
@media screen and ( min-width: 644px){
	div.available-Services-Card {
    height: 192px;

} 
}
@media screen and (min-width: 973px) {
  div.availableservice {
    width: 218px;
    height: 123px;
  }
  img.serviceimg{
	margin-left: 84px;
}
p.servicename{
  margin-bottom: 25px;
	text-align: center;
}

}
</style>