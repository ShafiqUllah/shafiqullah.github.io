"use strict";

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";


// Name: Ana Smith, Date of Birth: 1998-12-15
// Name: Bob Jone, Date of Birth: 1945-11-16
// Name: Carlos Slim Helu, Date of Birth: 1976-09-24

let anna = new Person("Anna Smith", new Date(1998,11,14));
let bob = new Person("Bob Jone", new Date(1945,10,16));
let carlos = new Person("Carlos Slim Helu", new Date(1976,8,24));

const personArray = [anna, bob, carlos];

personArray.forEach(a => console.log(a.toString()));

let emp1 = new Employee("Jim Hanson", new Date(1998,11,14) ,245990.01, new Date(2022,10,25));
emp1.doJob("Software Engineer");
