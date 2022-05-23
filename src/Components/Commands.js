/*import {useState} from "react";
const { useState } = React;


function routerenable(nae){ //why u no close?
    
    const [routerreturnarray, setRouterreturnarrayy] = useState([]);
    if (routerreturnarray[nae]!=null){
        if (nae === 1){
        //neeeds something to check what has been bought so far
    
         routerreturnarray.push("router1")
        console.log(routerreturnarray);
            return  routerreturnarray[0,1]
        } 
            else{
           //needs stuff
           routerreturnarray.push("router2")
           return  routerreturnarray[0,2]
           console.log(routerreturnarray);
            }
    }
       else{
           return"This router is already enabled."
       }

   // return ["loading ..\n ...\n Router online",true]
};
/*

function quit(){

     Routerreturnarray=useState([]);
    Routerreturnarray.push = ["selected router is running"] //value never exits

    return "bye-nara~"
};
function help(){
    return "helplist"
}
 // const renable = routerenable();
//const renable = ["router1","router2"];
 

//where commands go and otuput :(
//handleconsoleinput(event) {}
    /*  Ignore this:
    telnet og ssh versioner i tilegg?
     Router>enable
      Router#configure terminal
      Router#show running-config
      Router#show startup-config
      Router#show version
      Router#show flash
      Router#copy running-config startup config
      */ 

   /* 
const [configarray, setConfigarray] =useState([]);
configarray.push(Routerreturnarray[1,2]) ;
 function configterm(){
if (Routerreturnarray.length!= 0 || null ){


    configarray.push(" display name and ip maybe ask if user would like to change if we have time")
return configarray();
}
else{
    return " no routers enabled please run router_enable_routername* where * is the name of your router"}
 };
const startupcofarr=[]; 
 function startupconfig(){
if (configarray != null){
    startupcofarr = configarray[0,1];
    startupcofarr.map("enabled routers with the correct config will be added to network started up these") 
    Routerreturnarray =null;
     return startupcofarr;
    }
     else{
         return "you haven't configured anything"
     }
 }
  function pingfunc(ip){

    if( configarray.includes(ip)){
      return "if this asked for input that would be amazing but lets pretend you pinged something ";}
      else 
      return "this ip is out of scope or unreachable"
  }
    const filesarray = ['iptables.txt']
  function iptables(){
    const fs = require('fs');
    let fileContent = 'i wrote some iptable rules for router';
    fs.writeFileSync('iptables.txt', fileContent);

      return "iptables rules generated automatically"
     } 
*/ 