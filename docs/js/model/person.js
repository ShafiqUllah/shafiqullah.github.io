"use strict";

export class Person{
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    getDateOfBirth(){
        return this.dob;
    }

    setDateOfBirth(newDOB){
        this.dob = newDOB;
    }

    toString(){
        return `{ Name: ${this.name}, DateOfBirth: ${this.dob} }`;
    }
}