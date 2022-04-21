 
 //this is rough code only
 import React from "react";
 const MapConsoleOutput = ({ consoleOutput }) => {

function terminalcont(){
  <><div id='terminalresultscont'></div><form>
    <input id="terminaltextinput" type="text"
      placeholder="text appeared lol"
      autocomplete="off" />
  </form></>
</div>
<script src='function.js'></script>

/*
//terminal structure: 
//help dialogue at root. 
//go to ip adress of router etc to config
//mapper:  ls ved root network, documents, 
//network : Devices,services
//devices : Each router has its own file ith info.
//if cd equals a router command config dhcp er lov
//ifconfig?


//Map key id for index
//currentdir var
//text foralt
//skrive til filer

//functions

//clear input
//ls
//cd
document.addEventListener("domcontentloaded", function(){

})

//https://www.youtube.com/watch?v=V4763SB94yM
//https://www.youtube.com/watch?v=B047pkqRCak
//https://www.youtube.com/watch?v=HVVNR96GhPk
//https://www.youtube.com/watch?v=7Vo_VCcWupQ
//https://www.youtube.com/watch?v=V4763SB94yM

const UseOnEnter = ()=>{
  const [terminaltextinput, terminalresultscont] = React.useState([]);

  const onEnter =(value,key) =>{
    if (key == enter){
      const newterminalline = commands[value] || "invalid command"; //cpoming
      return terminalresultscont(terminaloutput=>
        terminaloutput.concat(newterminalline)); 
    }
  }
  return terminaloutput, onEnter;
}

/*
var prompting = prompt("$")
if in prompting (string.includes(cd){
  //func to get class into scope (classx)
  print classx.name}
)
);
 */
/*#if (string.includes(cdcheck) {
  # Hvis Cd finnes i setningen så skal den kjøre cd(som jeg vil skal være en react route path) til Inputen etter CD, vet ikke om dette fungerer.
#}

# Kommando ls som lister alle klasser, eller alle variabler innafor en klasse?

# Cat for å lese fra variablene

# Noe for å skrive/overwrite variablene. 

# etc etc


# Kanskje lettere å bare bruke classes med variabler i dem som en kan skrive til å lese fra som meg sa.*/



//kode fra kilden som jeg diller med. 

//app line : <Console />
//import React from "react";




  return (
    <div className="console-output">
      {consoleOutput.map((item, index) => (
        <div key={index}>
        
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

const commands = {
};

function UseOnEnter() {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  const onEnter = (value, key) => {
    if (key === "Enter") {
      const newConsoleLine = commands[value] || "Invalid Command";
      return updateConsoleOutput(consoleOutput => consoleOutput.concat(newConsoleLine)
      );
    }
  };

  return [consoleOutput, onEnter];
}

const Console = () => {
  const [consoleOutput, onEnter] = UseOnEnter();
  
   
    return (
      <section className="console">
        <MapConsoleOutput consoleOutput={consoleOutput} />
        <div className="input">
          <input
            type="text"
            onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
          />
        </div>
      </section>
    );
  };
export default Console
