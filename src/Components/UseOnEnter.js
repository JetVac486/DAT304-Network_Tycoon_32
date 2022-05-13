import React, { useState } from 'react';
//bullshit code
/* Kunne skrive til enten cards eller https://github.com/JetVac486/DAT304-Network_Tycoon_32/blob/maria2/src/classes/Routerclass.js
kunne kjøre en funksjon som starter en serie med kommandoer som sjekker input for hver gang til du er ferdig medoppsett
 *//*
const [routerreturnarray,setRouterreturnarray] = useState([]);
setRouterreturnarray (["selected router is running, enabled exec mode, you hve succeeded in configuring the router automaticly with default settings the host name of selected router is :  "]);
*/
//const { useState } = React; //kan v're den allerede er her


function ettelerant (){
//angy code
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
function quit(){

    //const Routerreturnarray=useState([]);
    //Routerreturnarray.push = ["selected router is running"] //value never exits

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
                                                                /* const [configarray, setConfigarray] =useState([]);
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
const commands = {
   /* help: help(),
    quit: quit(),
    inventory: "this functions lists the routers you have purchased. updated ",*/
    Router_enable_routername1: routerenable(1),
    Router_enable_routername2: routerenable(2),//would be nice to be able to edit prompt for these so router wasnt in the command but in prompt
   /* Router_configure_terminal: configterm(),
    ping: pingfunc(),
    router_show_running_config:"this should print running routers",
    router_startup_config:startupconfig(),
    router_show_flash: filesarray,
    iptable: iptables(),*/
};

const UseOnEnter = () => {
    const [consoleOutput, updateConsoleOutput] = useState([]);

    const onEnter = (value, key) => {
        if (key === "Enter") {
            const newConsoleLine = commands[value] || "Invalid Command";
            return updateConsoleOutput(consoleOutput =>consoleOutput.concat(newConsoleLine)); //lagrer commands
        }
    };

    return [consoleOutput, onEnter];
};
}

export default UseOnEnter;

/*
tror disse er viktige
https://docs.vmware.com/en/VMware-Cloud-Director-Availability/4.0/VMware-Cloud-Director-Availability-40-Admin-Guide/GUID-3051B9A2-F711-4BEE-B6BC-EBC08A57DACD.html
*/

/*more sources
https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_46_se/command/reference/cr1/intro.pdf
https://www.pluralsight.com/blog/it-ops/cisco-console-router-configuration
*/