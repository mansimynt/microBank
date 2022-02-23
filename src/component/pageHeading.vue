<template>
    <div class="header">
        <div class="head-Mearge">
            <div class="wrap-Header">
             <img class="company-Logo" src="src\assets\images\headerBankLogo.svg">
                <div class="divider"></div>
                <p class="company-Name">ABC Pvt. Ltd.</p>
            </div>
            <div class="flex">
               <img class="notification-Icon" src="src\assets\images\notificationBellIcon.svg">
                <div >
                    <div class="wrap-Profile-Icon">
                      <img class="profile-Icon-Circle" src="src\assets\images\profileIconCircle.svg">
                        <div class="profile-Icon-Name">{{initials}}</div>
                    </div>
					
                </div>
			<router-link to="/EditProfile">	<img class="drop-Down-Arrow" src="src\assets\images\profileSettingDropDownArrow.svg"></router-link>
				</div>
            </div>
			
        </div>
</template>
<script>
export default {

	data(){
		return{
			username:'',
			initials:''
		}
	},
	mounted(){
		let name=[]
		this.username=this.$store.state.loggedUser;
		 name=this.username.split(' ');
		 let i = name[0].split('')[0];
		 let j=name[1].split('')[0];
		 console.log(i,j);
		return this.initials=i+j;

	}
    
}
</script>
<style scoped>
.drop-Down-Arrow{
	display: none;
	padding-top: 25px;
}
.header{
	height: 72px;
	background: #FFFFFF;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
}
.head-Mearge{
	height: 51px;
	padding-left: 12px;
	padding-top: 12px;
	padding-bottom: 9px;
	display: flex;
}

.wrap-Header{
	width: 169px;
	display: flex;
	flex-direction: column;
	margin-right: 0px;
}

.company-Logo{
width: 200px;
height: 40px;
}
.company-Name{
	width: 89px;
	height: 19px;
	font-weight: bold;
font-size: 14px;
}
.flex{
	display: flex;
	flex-wrap: wrap;
	width: 1550px;
	justify-content: flex-end;

}
.notification-Icon{
	margin-left: 80px;
	margin-top: 0px;
	margin-right: 20px;
}
.wrap-Profile-Icon{
	margin-left: 14.02px;
	margin-top: 5px;
	display: block;
	margin-right: 10px;
}
.gr{
	display: block;
}
.profile-Icon-Name{
	margin-top: -35px;
	font-size: 16px;
	margin-left: 7px;
	color: rgb(255, 255, 255);
}

@media screen and (min-width: 768px)
{
	
	div.wrap-Header{
		flex-direction: row;
		width: auto;
	}
	img.company-Logo{
		margin-left: 20px;
		margin-top: 6px;
	}
	p.company-Name{
		font-size: 25px;
		width: 170px;
		height: 33px;
		margin-top: 10px;
		margin-left: 32px;
		
	}
	.drop-Down-Arrow{
	padding-right: 50px;
	display: block;
   }
	div.divider{
	width: 1px;
	height: 40px;
	margin-top: 6px;
	background: #C4C4C4;
	display: block;
	margin-left: 32px;
   }
}

</style>