// Var Declaration
// var _my__Name= 'priya';


//Console PRinting
// console.log(_my__Name);

// Type of operator
// console.log(typeof(_my__Name));

// Tricky operations

// console.log(10+"20");
// console.log(9-"5"); //first_bug
// console.log("java"+"script");
// console.log(""+"");
// console.log(""+"0");
// console.log("priya"-"degwekar");
// console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true);

//Null vs undefined
// var iAmnull = null;
// console.log(iAmnull);
// console.log(typeof(iAmnull)); //second_bug

// var iAmStandby;
// console.log(iAmStandby);

//NaN
// var myPhnNumber = 8577863698;
// var testText = "Priya";
// console.log(myPhnNumber);
// console.log(testText);
// console.log(isNaN(myPhnNumber));
// console.log(isNaN(testText));

// Tricky Question

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));

// x=5;
// y=5;
// console.log("both are equal" + x == y);
// console.log(`both are equal: ${ x == y }`); //ecma script


//Increment and Decrement
// var num = 15;
// var newNum = num++;//postfix
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = num--;
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = --num;
// console.log(num);
// console.log(newNum);


//Comparison 
// var x = 20;
// var y = 20;
// console.log(x == y);



//Conditional and ternary operator
// var age=18;
// console.log((age >= 18 ? "you can vote" : "you can't vote"));


// Tricky
// console.log(3**3);//3*3*3
// console.log(3**5);//3*3*3*3*3
// console.log(3*3);//3*3

// diff b/w == vs ===
// var num = 5;
// var num1 = '5';
// console.log(num==num1); //checks only value
// console.log(num===num1);//checks value and data type also


//control statments
// var tom= 'rain';
// if (tom == 'rain') {
//     console.log("take raincoat");
// } else {
//     console.log("Not take raincoat");
// }


//leap year progran
// var year = 2020;
// debugger;
// if ( year % 4 === 0 ) {
//     if( year % 100 === 0  ) {
//         if( year % 400 === 0 ) {
//             console.log( year + "is not a leap year" );
//         }
//         else{
//             console.log( year + "is a leap year" );
//         }
//     }
//     else {
//         console.log( year + "is a leap year");
//     }
// }
// else {
//     console.log( year + "is not a leap year" );
// }


//truthy falsy value


//switch statement
// var area = "circle";
// var PI=3.142, l=5, b=4, r=3;
// switch(area){
//     case 'circle':
//         console.log("Area of circle" + PI*r**2 );
//     break;

//     case 'rectangle':
//     console.log("Area of rectangle" + (l*b)/2 );
//     break;

//     default:
//     console.log("pls enter valid data");
// }

//while and do while
// var num =0;
// while(num <= 20){
//     console.log(num); //while
//     num++;
// }


// var num =0;
// do{
//     console.log(num);  //dowhile
//     num++; 
// }
// while(num <= 20);



//function defination n calling

// function sum(){
//     var a=10, b=5;
//     var total= a+b;
//     console.log(total);
// }
// sum();

//function parameter vs function argument
// function sum(a,b){ //a and b are parameter
//     var total= a+b;
//     console.log(total);
// }
// sum();
// sum(20,50); //20,50 are argument


//function expression m return keyword use
// function sum(a,b){
//     return total= a*b;
// }
// var funExp = sum(2,5);
// console.log("the total of a and b is" + funExp);

//Anonomyous function 
// var funExp = function(a,b){
//     return total= a*b;
// }
// var sum = funExp(2,5);
// console.log("the total of a and b is" + sum);


//template literals

// for(let num=1;num<= 10; num++){
//     let tableOf =12;
//     console.log(` ${tableOf} * ${num} = ${tableOf * num}`); //template literals
// }


//Fat arrow function

/*Normal func
//console.log(sum()); 
// function sum(){ 
//         let a=5,b=4;
//         let total =a*b;
//         return `the o/p is ${total}`;
// }
*/

/*Fat arrow
//  const sum = () => {
//     let a=5,b=4;
//     let total =a*b;
//     return `the o/p is ${total}`;
//  }
//  console.log(sum()); 
*/


//Short code of function
const sum = () => `the o/p is ${(a=1) + (b=8)}`;
console.log(sum());

