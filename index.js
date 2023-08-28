"use strict";
//  1- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
/*
var n:number = 100;
var sum:number = 0;
for (let a = 0; a <= n; a++) {
    if (a%2 == 0) {
        sum += a;
    }
    
}
console.log("sum of first " + n + " even numbers is "+sum);
*/
//  2- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
/*
const list:number[] = [2,4,2,7,4,6,1,9,12,56,34,12,4,23,44,66,22,77,33,12,16,22,18,8,9];
for (let a = 0; a <= list.length; a++) {
    if (list[a]%2 == 0) {
        console.log(list[a]);
        
    }
}
*/
//  3- Implement a program that uses a loop to iterate through an array of numbers and remove all the 
//     even numbers from them and just leave the odd ones
//  Method1
/*
const list:number[] = [2,4,2,7,4,6,1,9,12,56,34,12,4,23,44,66,22,77,33,12,16,22,18,8,9];
for (let a = 0; a < list.length; a++) {
    if (list[a]%2 == 0) {
        list.splice(a,1);
        a--;
    }
}
console.log(list);
*/
// Method2
/*
var list:number[] = [2,4,2,7,4,6,1,9,12,56,34,12,4,23,44,66,22,77,33,12,16,22,18,8,9];
list = list.filter((elem) => {
    if(elem%2 !=0){
        return elem;
    }
});
console.log(list);
*/
//  4- Write a program that defines a function to calculate the area of a circle. 
//     The function should take the radius as input and return the calculated area.
/*
function area(radius:number) {
    return 3.14 * radius**2;
}
console.log(area(3));
*/
//  5- Develop a program that reads a list of grades and uses the splice method to remove
//     failing grades (below 50) from the array.
//             Method1
/*
const stdNumber:number[]=[45,38,71,56,51,89,75,60,80,44];
for (let a = 0; a < stdNumber.length; a++) {
    if (stdNumber[a] < 50) {
        stdNumber.splice(a,1);
        a--;
    }
}
console.log(stdNumber);
*/
//              Method2
var stdNumber = [45, 38, 71, 56, 51, 89, 75, 60, 80, 44];
stdNumber = stdNumber.filter((elem) => {
    if (elem > 50) {
        return elem;
    }
});
console.log(stdNumber);
//  - Write a program that uses a function to find the largest element in an array of numbers.
/*
const list:number[] = [2,5,7,1,5,2,8,6,9];
function maxElement(){
    let max=Math.max(...list);
    console.log(max);
}
maxElement();
*/ 
