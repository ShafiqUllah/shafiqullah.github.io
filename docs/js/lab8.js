"use strict";

//Question 6
const count = {
    x : 9 ,

    add : function(){
        return ++this.x;
    },

    reset : function(){
       this.x = 0 ;
       return this.x;
    }
}

// alert(count.add());
// alert(count.reset());

//Question 7
// var counter is a free variable.
// The variable defined there is a closure variable. 
// it can be used all over the closure itself but is not part of a global namespace.

//Question 8
const make_adder = function(x){
    let privateCount = 0;
    

    function changeBy(val){
       return privateCount += val;
     
    }

    return function(){
           return changeBy(x);  
    }
}

const add5 = make_adder(5);

add5();
add5();
// alert(add5());

const add7 = make_adder(7);
add7();
add7();
// alert(add7());

// Question 9
//Use Module pattern IIFE - Declare and immediately call the anonymous function 

//Question 10

const module = (
    function(){
        let name ;
        let age ;
        let salary ;

        const setAge = function(newAge){
            age = newAge;
        };

        const setSalary = function(newSalary){
            salary = newSalary;
        };

        const setName = function(newName){
            name = newName;
        };

        const getAge = function(){
             return age ;
        };

        const getSalary = function(){
            return salary;
        };

        const getName = function(){
            return name;
        };

        const increaseSalary = function(percentage){
            salary = getSalary() + (percentage/100)*getSalary();
            return salary;
        };

        const incrementAge  = function(){
            age = getAge() + 1;
            return age;
        };

        return {
            setAgeMethod : setAge,
            setSalartMethod : setSalary,
            setNameMethod : setName,
            increaseSalaryMethod: increaseSalary,
            incrementAgeMethod: incrementAge,
        }
        
    }
)();

// module.setSalartMethod(5000);
// alert(module.increaseSalaryMethod(50));


// Question 11

module.address = "This is my address"; 

module.setAddress  = function (newAddress){ 
    module.address = newAddress;
};

module.getAddress = function(){
    return module.address;
};

module.setAddress("This is new Address");
// alert(module.getAddress());

