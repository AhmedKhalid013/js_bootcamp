//Arrays
/*
const numbers=['apple','ornage','banana'];
console.log(numbers);
console.log(numbers[0]); //apple
numbers[3]='grape'; //adding new value to array
console.log(numbers);//['apple','ornage','banana', 'grape']
numbers.push('mango'); //adding new value to array in the end
numbers.unshift('kiwi'); //adding new value to array in the beginning
numbers.pop();
console.log(numbers);

console.log(Array.isArray(numbers)); //true
console.log(numbers.indexOf('banana')); //3

//Multi valued data type array
const arr=[1,2,'appple','orange', true,];
console.log(arr); */









//Object Literals
/*
const person={
    firstName:'Ahmed',
    lastName:'Khalid',
    age:25,
    hobbies:['music','sports'],
    address:{
        street:'123 main st',
        city:'lahore',
        state:'punjab'
    }
}

person.email='ahmedkhalid013@gmail.com'

//console.log(person.hobbies[1]);
const {firstName, lastName, address:{city}}=person; //destructuring
console.log(firstName, lastName, city); // Ahmed Khalid
console.log(person); //
*/


/*
//ToDo Arrays
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted:false
    }
];
*/

/*
console.log(todos);
console.log(todos[2].text); //Dentist appointment
*/

/*
const todoJSON=JSON.stringify(todos); //convert object to JSON string
console.log(todoJSON); //string

*/


/*
//Looping through arrays
//For Loop
for(let i=0;i<=10;i++){
console.log(`For Loop Number: ${i}`);
//or     console.log('For Loop Numbers:'+i);
}

//while loop
let i=0;
while(i<=10){
    console.log(`While loop numbers: ${i}`);
    i++;
}
*/

/*
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text)
}*/

/*
//or u can use this loop (for...of loop)
for(let todo of todos){
    console.log(todo.text);
}*/

/*
//forEach Loop
todos.forEach(function(todo){
    console.log(todo.id, todo.text, todo.isCompleted);
});*/

/*
//map method
const todoText=todos.map(function(todo){ ///with map method we can create new array
    return todo.id;
});
console.log(todoText); // [1,2,3]
*/

/*
//filter method
const todoText=todos.filter(function(todo){
    return todo.isCompleted===true; //returning only those todos which are completed
});
console.log(todoText);
*/



/*
//we can also chain filter and map methods together
const todoText=todos.filter(function(todo){
   return todo.isCompleted===true; 
}).map(function(todo){
    return todo.text;
})

console.log(todoText); //['Take out trash', 'Meeting with boss']
*/



/*
//Conditionals
const x=10;
if(x==10){
    console.log('x is 10');//== is used for only value comparison
}
*/

/*
const x='10';
if(x==10){
    console.log('x is 10');//== is used for only value comparison (still true because of same value)
}
*/

/*
const x='10';
if(x===10){
    console.log('x is 10');//=== false because of different data type (string and number) === compares both value and data type
}*/

/*
const x=10;
if(x===10){
    console.log('x is 10');
}else if(x>10){
    console.log('X is greater then 10');
}else{
    console.log('X is less then 10');
}
*/

/*
//Conditional OR  any one condition should be true 
const x=10;
const y=20;
if(x>9 || y>19){
    console.log('x is greater then 9 or y is greater then 19');
}
*/
/*
//Conditional && both the condition should be true 
const x=10;
const y=20;
if(x>9 && y>19){
    console.log('x is greater then 9 and y is greater then 19');
}*/


//Ternary Operator
/*
const x=10;
const color=x>10?'red':'blue'; //if x is greater then 10 then color will be red otherwise blue
console.log(color); //blue
*/

/*
//Switch Statement
const color='red';
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
}*/


//Functions
/*
function addValues(n1,n2){
    console.log(n1+n2);
}

addValues(2,5);
*/

//Arrow Function
/*
const addValues=(n1,n2)=>{ //best for short or oneliner code and where this is not used
    console.log(n1+n2);
}
addValues(2,5);*/

/*
//Constructor function
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear=function(){
        return this.dob.getFullYear(); //getFullYear() method returns the year of a date as a four digit number
    }
    this.getFullName=function(){
        return `${this.firstName} ${this.lastName}`; //template literals
    }
}
//Insantiate Object
const person1=new Person('Ahmed', 'Khalid', '01-01-2000');
const person2=new Person('Ali', 'Khan', '02-02-2000');
console.log(person1); //Person { firstName: 'Ahmed', lastName: 'Khalid', dob: '01-01-2000' }
console.log(person1.firstName); //Ahmed
console.log(person2); //Person { firstName: 'Ali', lastName: 'Khan', dob: '02-02-2000' }
console.log(person2.firstName); //Ali
console.log(person2.dob); //02-02-2000
console.log(person2.getBirthYear()); //2000
console.log(person2.getFullName()); //Ali Khan
*/



//Class
class Person{
    constructor(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear(); //getFullYear() method returns the year of a date as a four digit number
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`; //template literals
    }
}

//Insantiate Object
const person1=new Person('Ahmed', 'Khalid', '01-01-2000');
const person2=new Person('Ali', 'Khan', '02-02-2000');
console.log(person1); //Person { firstName: 'Ahmed', lastName: 'Khalid', dob: '01-01-2000' }
console.log(person1.getFullName()); //Ahmed Khalid
console.log(person2.getBirthYear());