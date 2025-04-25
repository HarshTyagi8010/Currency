// // function getData(dataId,getNextData){
// //     setTimeout(()=>{
// //         console.log("data",dataId);
// //         if (getNextData){
// //             getNextData();
// //         }
// //     },2000);
// // }
// // //callBack Hell
// // getData(1,() =>{
// //     console.log("getting data 2");
// //     getData(2,() =>{
// //         console.log("getting data 3");
// //         getData(3, () =>{
// //             console.log("getting data 4");
// //             getData(4);
// //         });
// //     });
// // });
// //------------------------------------------------
// // // to remove callBack hell problem we use promise
// // // Promise is for "eventual"completion of task
// // let promise = new Promise((resolve,reject) =>{
// //     console.log("Hello My Enemy");
// //     resolve("success");
// //     reject("Error occured");
// // });

// // function getData(dataId,getNextData){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(()=>{
// //                     console.log("data",dataId);
// //                     resolve("success");
// //                     if (getNextData){
// //                         getNextData();
// //                     }
// //                 },5000); 
// //     });
// // }

// function asyncFunc(){
//     return new Promise ((resolve,reject) =>{
//         setTimeout(( ) => {
//             console.log(" data1");
//             resolve("success");
//         },4000);
//     });
// }
// //promoise chaaining
// console.log("fetching data1...");
// asyncFunc1().then((res) =>{
//     console.log("fetching data2...");
//     asyncFunc().then((res) =>{});
// });

// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) =>{
//     console.log(res);
// })


function getData(dataId){
    return new promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data" ,dataId);
            resolve("success");
        },3000);
    });
}
//promise chain
getData(1)
.then((res) =>{
    return getData(2);
    })
    .then((res) => {
        return getData(3);
    }).then((res) =>{
        console.log(res);
    })
