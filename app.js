// let a=5;
// let b=4;
// let c= a + b ;
// output=`The sum of ${a} and ${b} is ${c}`;
// console.log(output);
// alert("Something went wrong!");
// console.log("This is a simple msg");
// console.error("There is an error in your code!");
// console.warn("warning! Dont touch it.");
// let firstName = prompt("First name");
// let secondName = prompt("Last name");
// let fullName = firstName+secondName;
// console.log(`Full Name: ${fullName}`);
// console.log("Wellcome", firstName ," ",secondName,"!");

// num=prompt("Enter the Numbner you want");
// if(num%10==0){
//     console.log(" good ");

// }
// else{
//     console.log(" bad ")
// }

// Name=prompt("Enter your name");
// age=prompt("Enter your age");
// alert(Name + "is" + age +  "year old");

// msg = "    hello   ";
// console.log(msg.trim());
//strings are imutable in js.
// let num = [ 7 , 9 , 0 , -2]

// let todo = [];
// let req = prompt("Please enter your request here: ");
// while(true){
//     if( req == "quit"){
//         console.log("quiting the app");
//         break;
//     }else if( req == "list"){
//         console.log("----------------");
//         for(let i=0 ; i<todo.length; i++){
//             console.log(i,todo[i]);
//         }
//         console.log("----------------");
//     }else if( req == "add"){
//         let task = prompt("please enter your task here : ");
//         todo.push(task);
//         console.log("task added");
//     }else if( req == "delete"){
//         let idx = prompt("please enter the index of list you want to delete : ");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }else{
//         console.log("wrong entry!")
//     }

//     req = prompt("Please enter your request here again: ");
// }
// num =287152;
// sum=0;
// let copy = num;
// while(copy > 0){
//     digit = copy % 10;
//     sum+= digit;
//     copy = Math.floor(copy/10); 
// }
// console.log(sum);
// copy = 2871;
// digit = copy % 10;
// console.log(digit);

// let n=7;
// let fact=1;
// for (let i=1; i<=n; i++){
//     fact *=i;
   
// }
// console.log(fact);

// function findLargNumber(){
//     let input = prompt("Enter the list of numbers:");
//     let arr = input.split(",").map(Number);
//     if (arr.length===0){
//         console.log("you have not put any number yet");
//     }
//     let largest=arr[0];
//     for(let i=0 ;i<arr.length;i++){
//         largest<arr[i];
//         largest=arr[i];

//     }
//     console.log("the largest number is "+largest);
// }
 



// function rollDice(){
//     rand = Math.floor(Math.random() * 6)+1;
//     console.log(rand);
// }
// function calcAverage(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }
// function multTable(n){
//     for(let i=1 ;i<=10; i++){
//         b=n*i;
//         console.log(`${n} x ${i} = ${b}`);
//     }
// }
function add(){
    let sum=0
    let n=Number(prompt("num:"))
    for(let i=0 ; i<=n; i++){
        sum+=i;
        
    }
    let avg=sum/n;
    console.log(sum);
    console.log(avg);
    
}

add();


// console.log(sum(1,10));
const student = {
    fname: "Marwan",
    age : 21,
    eng : 97,
    maths: 99,
    science : 100, 
    getAvg(){
        let avg = (this.eng+this.maths+this.science)/3;
        console.log(`The average of ${this.fname} is ${avg}`);
    }
}
let num=Math.max(100,300,-330,900);

function rollDice(){
    let rand = Math.floor(Math.random()*15)+1;
    console.log(rand);
    if (rand==12){
        console.log("the number is 12");
    }
}

function frame() {
    let name = prompt("name:");
    console.log(name);
}

function avg(){
    let x=Number(prompt("x:"));//only prompt gives us the string value i.e if we enter 2 it will observe like "2".
    let y=Number(prompt("y:"));
    let z=Number(prompt("z:"));
    
    let n=((x+y+z)/3);
    console.log(n);
}

function mulTable(){
    let x = Number(prompt("Enter the number for which you want the table for it : "));
    for(i=1;  i<=10 ; i++){
        console.log(x, "x",i ,"=",x*i);
    }
}
// mulTable();
function sumNumbers(){
    let n= Number(prompt("number:"));
    for(i=0; i<=n;i++){
        sum=sum+i;
        console.log(sum);
}
    }
    
// sumNumbers();