import Vue from "vue";
import Vuex from "vuex";


const axios = require("axios").default;
Vue.use(Vuex);
const site_url = "http://localhost:3000/";
const store = new Vuex.Store({
  state: {
    userId: null,
    loggedUser:[],
    jsonUserData: [],
    users: [],
    totalServices: [],
    currentServices:[],
    initials:""
  },
  mutations: {
    getUsers(state, getAllUsers) {
      state.jsonUserData = getAllUsers; //storing all json data
      state.users = state.jsonUserData.data;
      console.log("all Users",state.users);
    },
    calculateUserServices:(state)=>{

      console.log("current user",state.loggedUser);
    },
    getTotalServices:(state,allservices)=>{
      state.totalServices = allservices.data;
      console.log(state.totalServices,"all services fetch api");
    },
    currentUser:(state,currentUser)=>{
      state.loggedUser.push(currentUser)
    },
    setInitials:(state,initials)=>{
      state.initials=initials;
      
    }
  }
  ,
  actions: {
    getAllUsers({ commit }) {
      axios.get(site_url + "users").then(users => {
        commit("getUsers", users); //Get all users data api
      });
    },
    getTotalServices({ commit },) {
      axios.get(site_url + "allservices").then(allservices => {
      commit("getTotalServices",allservices); //Get all service data
      });
    },
    userAuthentication({commit},currentUserInfo){
     this.state.users.forEach((user)=>{
       if(user.email===currentUserInfo[0] && user.password===currentUserInfo[1]){
         commit("currentUser",user);
       }
     })
    },
     calculateUserServices({  commit, state }) {
    let i=[];
    let availableServices=[];
    let userServices=[];
    userServices=state.loggedUser[0].services;
    console.log(userServices,"user services");
    console.log(state.totalServices,"all services");
      commit("calculateUserServices");
    },
    nameInitials({commit,state}){
      let name="";
      let userInitials= state.loggedUser[0].FullName;
       name=userInitials.split(" ");
      let firstInitial= name[0][0];
      let lastInitial= name[1][0];
   let initials =firstInitial + lastInitial;
   commit("setInitials",initials);
    
    }
  }
  });

export default store;
