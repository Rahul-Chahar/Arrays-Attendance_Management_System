# Types of error in JS
* 1-> Syntax Error
* 2-> Logical Error
* 3-> Run-Time Error

# Syntax Error

console.log('rahul);
// isme closing ' mising hai

# Run-Time Error
* isme chalne ke baad pata chlta hai ki error hai

console.log('abc'.toUppercase());

# Logical Error
* isme desired output mein error houta hai 

const sellPrice = 50;
const discount = 10;
const finalPrice = sellPrice + discount;
console.log(finalPrice);

* Output
60 

or aana chaiye tha 40 
hamne logical ki glti kar di discount plus kar diya minus ki jagha


# Error Handling in Js
* using try catch

try {
    //
    f()
    //
} catch () {

}

f(){
    //error
}


try{
    cosole.log('abc')
} catch(error){
    console.log(error)
} finally {

}

# Q-> Write a function that simulates fetching data asynchronously using a Promise. Handle error that might occur during the data fetching process.

const fetchData = (url) => {
    new Promise(function(resolve,reject){
        setTimeout(()=>){
            if(Math.random()>0.5){
                resolve('api data')
            } else{
                reject(new Error('error'))
            }
        },1000
    })
}
fetchData('url')
.then((res)=>{console.log(res)})
.catch(err)=>{console.log(err)}

# Q-> Write a function that fetches data from two differnt APIs concurrently using Promise. handle errors for each API call independently.

const fetchData = (url) => {
    new Promise(function(resolve,reject){
        setTimeout(()=>){
            if(Math.random()>0.5){
                resolve(`api data: ${url}`);
            } else{
                reject(new Error(`custom error: ${url}`))
            }
        },1000
    })
}
Promise.all([fetchData('url1'), fetchData('url2')])
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})