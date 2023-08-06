// let data = 1;
// console.log(data);
//  data = 2;
//   setTimeout(() => {
//     console.log("timer",data)
    
//   }, 2000);
// data = 3
//   console.log("last", data)




// let data = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject(
//             // nmae:"kabeer",
//             // age:21
//             "some issues")
        
//     },4000)
// })
// data.then((item)=>{
//     console.log(item)
// }).catch((err)=>{
//     console.log("catch block ", err)
// })
// console.log("hello ")

// let data = fetch('https://dummyjson.com/comments');

// data.then((item)=>{
//     console.log(data)
// })
// console.log(data1)




// let data = fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))









// const fetch = require('node-fetch');

// let data = fetch('https://dummyjson.com/comments');

// data.then((response) => {
//     return response.json();
// }).then((json) => {
//     console.log(json);
// }).catch((error) => {
//     console.error(error);
// });











// Use ESM import syntax instead of CommonJS require
// import fetch from 'node-fetch';

// let data = fetch('https://dummyjson.com/comments');

// data.then((response) => {
//     return response.json();
// }).then((json) => {
//     console.log(json);
// }).catch((error) => {
//     console.error(error);
// });



// const fetch = require('node-fetch').default;

// let data = fetch('https://dummyjson.com/comments');

// data.then((response) => {
//     return response.json();
// }).then((json) => {
//     console.log(json);
// }).catch((error) => {
//     console.error(error);
// });




// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation, e.g., an API call or a fetch request
      setTimeout(() => {
        const data = { message: 'Hello, world!' };
        // Resolve the promise with the data
        resolve(data);
        // Or reject the promise with an error
        // reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  // Using the promise
  fetchData()
    .then((data) => {
      console.log('Resolved:', data);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  




















