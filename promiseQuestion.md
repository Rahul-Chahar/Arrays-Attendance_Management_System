# Q -> Given two promise1 and promise2, reutrn a new promise. promise1 and promise2 will both resolve with a number. the returned promise should be resolved with the sum of the two numbers.

const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

const promise = new Promise(function(resolve){
    let num1, num2;

    promise1.then(res => {
        num1 = res;

        if(num1 && num2){
            resolve(num1+num2)
        }
    })
    promise2.then(res => {
        num1 = res;

        if(num1 && num2){
            resolve(num1+num2)
        }
    })
})

promise.then(res => console.log(res))

* Output
15

# Promise all 

const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

const promise = new Promsie(function(resolve){
    Promise.all([promise1, promise2]).then(res => {
        resolve(res.reduce((sum,num)=>sum+num))
    })
})
promsise.then(res => console.log(res))

* Output
15
