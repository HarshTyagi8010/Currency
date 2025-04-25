// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }
// //callBack Hell
// getData(1,() =>{
//     console.log("getting data 2");
//     getData(2,() =>{
//         console.log("getting data 3");
//         getData(3, () =>{
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });
//------------------------------------------------
// // to remove callBack hell problem we use promise
// // Promise is for "eventual"completion of task
let promise

// // //     console.log("hello");
// // // }
// // // setTimeout(hello,2000);

// // //using arrow function 
// // console.log("one");
// // console.log("two");
// // setTimeout(() => {
// //     console.log("hello");
// // },4000);
// // console.log("three");
// // console.log("four");

// // //callBack is a function passed as an argument to another function
// // function sum(a,b){
// //     console.log(a+b);
// // }
// // function calculator(a,b,sumCallback){
// //     sumCallback(a,b);
// // }
// // calculator(1,2,(a,b) => {
// //     console.log(a+b);
// // });

// // const hello = ( )=>{
// //     console.log("hello");
// // };
// // setTimeout(hello,2000);

// // //Nesting 
// // let age = 19;
// // if(age >=18){
// //     if(age>=60){
// //         console.log("Senior");
// //     } else {
// //         console.log("middle");
// //     }
// // } else {
// //     console.log("child");
// // };

// // for(let i = 0; i<5 ; i++){
// //     let str = "";
// //     for(let j = 0; j<5; j++){
// //         str = str + j;
// //     }
// //     console.log("str");
// // }
// // let DATA = "secret information";
// // class User{
// //     constructor(name, email){
// //         this.name = name;
// //         this.email = email;
// //     }
// //     viewData(){
// //         console.log( "website data")
// //     } 
// // }
// // class Admin extends User{
// //     constructor(name,email){
// //         super(name,email);
// //     }
// //     editData(){
// //         DATA = "Some new value";
// //     }
// // }
// // let student1 = new User("Harsh","harsh@email.com");
// // let student2 = new User("Fakeer,fakeer@gmail.com");
// // let teacher1 = new User("Deen" ,"deen@gmail.com" );
// // let admin1 = new Admin("admin","admin@gmail.com");

// // //ERROR HANDELING
// // try{

// // } catch (err) {
// //         console.log(err);  
// // }
// // class Person{
// //     constructor(){
// //         this.species = "homo sapiens";
// //     }
// //     eat(){
// //         console.log("eat");
// //     }
    
// // }


// // class Engineer extends Person{
// //     constructor () {
// //         this.branch = branch;
// //     }
// //     work(){
// //         console.log("solve problems , build something");
// //     }
// // }


// // let Harsh   =  new Engineer("chemical engg");
// // // class Parent{
// // //     hello(){
// // //         console.log("Hello Harsh");
// // //     }
// // // }
// // // class Child extends Parent {

// // // }
// // // let obj = new Child();