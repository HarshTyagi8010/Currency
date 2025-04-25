//API the fetch api provides an interface for fetching(sending and receiveing ) resources and data .
// it uses request and response objects 
//the fetch() method is used to fetch a resource(data).

const url = "https://dummyjson.com/products";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async() =>{
//     console.log("Getting data...");
//     let response = await fetch(url);
//     console.log(response); //JSON format
//     let data=await response.json();
//     console.log(data);
//     factPara.innerText = data.products[3].brand;
// };
function getFacts  (){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
            factPara.innerText = data.products[3].brand;

    });
}


btn.addEventListener("click",getFacts);
//AJAX is Asynchronous JS and xml
//json is javascript object notation
// json() method : return a second promise that resolves with the result of parsing the 
// response body text as json .(input is json , output is js object  )