"use strict";
//Question 1
let person = {
    "name" : "",
    DOB : "",
    getName : function() {
        return this.name;
    },

    setName : function(newName){
        this.name = newName;
    }
};

Object.create(person);
person.name ="John";
person.DOB = "1998-12-10";

console.log("The person’s name is "+ person.getName());
console.log(person.getName() +" was born on "+ person.DOB);

//Question 2

let employee = {
    salary : 0,
    hireDate : "",
     doJob : function (jobTitle){
        //“[Employee’s name] is a [jobTitle] who earns $[salary]”
        console.log(this.name +" is a "+jobTitle+" who earns $"+ this.salary);
    }
}

let employeeObj = Object.create(employee);
employeeObj.prototype = person;
employeeObj.name = "Anna";
employeeObj.salary = 249995.50 ;

employeeObj.doJob("Programmer");




function Person(name){
    name = "";
    DOB : "";
};

let p = new Person();
Person.prototype.DOB = "1998-12-10";
Person.prototype.getName = function(){
    return this.name;
};
Person.prototype.setName = function(newName){
    this.name = newName;
};
Person.prototype.toString = function() {
    console.log("{Name: "+this.name+", DateOfBirth: "+this.DOB+"}");
};

p.setName("John")
p.toString();







