import React, { Component} from 'react'//component brukes ikke per nå

class Routerobj {
    constructor (datahastighet, bilde, pris , sikkerhetstiltak, standarder, userlimit,range) {
        this.datahastighet = datahastighet;
        this.bilde = bilde;
        this.sikkerhetstiltak = sikkerhetstiltak; //skal bli map key pair
        this.standarder = standarder; //skal bli map key pair
        this.userlimit = userlimit;
        this.range = range;
        console.log(this);
    }
    bildemethod(){
    <img src={require(this.bilde).default} /> }

}

class Switcher {
    constructor(bilde,pris,standarder,userlimit) {
        this.bilde = bilde;
        this.pris = pris;
        this.standarder = standarder;
        this.userlimit = userlimit;
    }


}

class aksesspunkt extends product{
    constructor(pris,standarder,range) {
        this.pris = pris;
        this.standarder = standarder;
        this.range= range;
        this.userlimit = userlimit;


    }

}

//attempt at making better code:
class product {
    pris;
    ttandarder;
    range;
    datahastighet;
    bilde;
    sikkerhetstiltak; 
    //might have done goofed
}

class network {
    datahastighet;
    earnings;
    sikkerhetstiltak;

     sikkerhetstiltaklistprint(){
        return <div>{sikkerhetstiltak}</div>
    }
    sikkerhetstiltaktoarray(){
    
        const tiltaklist = sikkerhetstiltak.map((service, status)// css stuff kan addes her) //why u deprecate
    
    } //er det bedre med service til indeksering en number keys?
    //kan være lurere  å bare ha alle sikkerhets tiltakene her og ikke på vær router
}

//øve med konstruktør
const sikkerhetstiltaksarray = [{key : 1, service: dhcp, status : true}] //hmmmm
const standarderarray = [{key : 1, standard: ieee, status : true}]

const router1 = new Routerobj(55,'img.png',100,sikkerhetstiltaksarray,standarderarray,2,10);
console.log(router1);

//functioner vi trenger : indeksere i standarer listen,
/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);console.log(doubled);*/
