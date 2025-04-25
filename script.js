let btn1 = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
     } else{
            currMode = "Light";
        }
        console.log(currMode);
    }
);
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("btn1 was clicked");
//     // let a =  25;
//     // a++;
//     // console.log(a);//26
// }
// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// };
// const btn = document.querySelector("button");
// function random(number){
//     return Math.floor(Math.random()*(number+1));
// }
// btn.addEventListener("click",()=>{
//     const rndCol = 'rgb(${random(255)} ${random(255)} ${random(255)})';
//     document.body.style.backgroundColor = rndCol;
// });
// let  para = document.querySelector("p");
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

// let newHeading = document.createElement("hi");
// newHeading.innerHTML = "<i>Hi, i am new!</i>";
// document.querySelector("body").prepend(); 
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();
// // let newBtn = document.createElement("button");
// // newBtn.innerText = "click me";
// // console.log(newBtn);
// //  let div = document.querySelector("div");
// //  div.append(newBtn);
// // div.style.backgroundColor = "green";
// // div.style.backgroundColor="purple";
// // //div.style.visibility="hidden";
// // div.style.fontSize = "26px";
// // div.innerText = "Hello";

// // console.log(para.getAttribute("class", "newClass"));
// // let div = document.querySelector("div");
// // // alert("Welcome to Harsh's Kingdom")

// //  console.dir(document.body)
// // // // // // function harsh(msg, n){

// // // // // //     //parameter -> input
// // // // // //     console.log(msg * n);
// // // // // //     //console.log("How are you");
// // // // // // }

// // // // // // harsh(msg,n); //argument

// // // // // // //parameter and arguments are same function definition ke andr jise use krre hai use parameter khte hai 
// // // // // // //function call ke andr jise use krre hai use argument khte hai 


// // // // // //Function -> 2 numbers, sum
// // // // // // function sum(x,y){
// // // // // //     console.log(x + y);
// // // // // // }
// // // // // // function sum (x,y){
// // // // // //     s = x+y;
// // // // // //     return s;
// // // // // // }
// // // // // // let val =sum(3,5);
// // // // // // console.log(val);
// // // // // // function sum (a,b){
// // // // // //     return a+b;
// // // // // // }

// // // // // // //multiplication function
// // // // // // function mul(a,b){
// // // // // //     return a*b;
// // // // // // }
// // // // // // function sub(a,b){
// // // // // //     return a-b;
// // // // // // }
// // // // // // function div(a,b){
// // // // // //     return a/b;
// // // // // // }

// // // // // const arr1 = (a,b) =>{
// // // // //     console.log(a+b);
// // // // // };

// // // // // const arr2 = (a,b)=>{
// // // // //     console.log("value of console : ",a*b);
// // // // //     return a*b;
// // // // // };


// // // // // // let ans = arr1(2, 4);
// // // // // // console.log(ans);


// // // // // // console.log(arr2(2, 4));
// // // // // let ans = arr2(2, 4);
// // // // // // console.log("value of ans: ",ans);
// // // // // n




// // // // // function countVowels(str){
// // // // //     let count = 0;
// // // // //     for(const char of str){
// // // // //         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
// // // // //             count ++ ;
// // // // //         }
// // // // //     }
// // // // //     console.log(count);
// // // // // }

// // // // // countVowels("aeiou");


// // // // const countVowels = (str) =>{
// // // //     let count = 0;
// // // //     for(const char of str){
// // // //         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
// // // //             count ++ ;
// // // //         }
// // // //     }
// // // //     console.log(count);
// // // // }

// // // // // countVowels("aeiwsd");
// // // // let arr = ["pune", "delhi", "mumbai"];

// // // // arr.forEach((val,idx,arr) => {
// // // //     console.log(val.toUpperCase(),idx);
// // // // });

// // // //-------forEach-----------
// // // let num = [2,3,4,5,6];
// // // // num.forEach((num) =>{
// // // //     console.log(num * num);
// // // // });

// // // //2nd===================

// // // // let calc = (num) =>{
// // // //        console.log(num * num);
// // // //     } ;
// // // // num.forEach(calc);

// // // //=========================
// // // //To print the largest no in an array 
// // // // let arr =  [5,3,8,51,9];

// // // // const large = arr.reduce(( pre , cur )=>{
// // // //     return pre > cur ? pre :cur;
// // // // });
// // // // console.log(large);

// // // //======================topper marks//
// // // // let marks = [23,55,65,76,97];
// // // // let newArr= marks.filter((val)=>{
// // // //     return val > 30;
// // // // })
// // // // console.log(newArr);

// // // //------------take and print no from user

// // // let n = prompt("enter a number : ");
// // // let arr =[];
// // // for (let i = 1; i<=n ;i++){
// // //     arr[i-1]=i;
// // // }

// // // console.log(arr);

// // // let sum =arr.reduce((pre ,cur) => {
// // //     return pre +cur;
// // // })
// // // console.log("sum = ",sum);
// // // let factorial = arr.reduce((pre,cur)=>{
// // //     return pre * cur;
// // // });
// // // console.log("factorial = ", factorial);


