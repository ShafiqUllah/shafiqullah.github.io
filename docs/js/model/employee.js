"use strict";

import { Person } from "./person.js";

export class Employee extends Person {
    constructor(name, dob,salary, hireDate){
        super(name,dob);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    doJob(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}

