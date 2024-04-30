const promise = new Promise(function(resolve,reject){
    if(Math.random()>0.5){
        resolve('success')
    } else {
        reject ('Failure')
    }
})

console.log(promise);

# then
* jab bhi successful kaam houta hai tab then chlta hai

const promise = new Promise(function(resolve,reject){
    if(Math.random()>0.5){
        resolve('success')
    } else {
        reject ('Failure')
    }
})

promise.then(response => console.log(response));

# catch
* Unsuccessful par catch chlta hai

const promise = new Promise(function(resolve,reject){
    if(Math.random()>0.5){
        resolve('success')
    } else {
        reject ('Failure')
    }
})

promise.catch(error => console.log(error));


# Chaining 
const promise = new Promise(function(resolve,reject){
    if(Math.random()>0.5){
        resolve('success')
    } else {
        reject ('Failure')
    }
})
promise.then(response => console.log(response)).catch(error => console.log(error));

# finally
* jab sab kuch hou gya successful yaha unsuccesful ab final karna kya hai

const promise = new Promise(function(resolve,reject){
    if(Math.random()>0.5){
        resolve('success')
    } else {
        reject ('Failure')
    }
})
promise.finally((data)=>{
    console.log('stop loader');
});

# Chaining
const promise = new Promise(function(resolve,reject){
    console.log('start loader');
    if(Math.random()>0.5){
        resolve({city: 'Delhi', temperature: '39'});
    } else {
        reject ({code: 402, message: 'Data not found'});
    }
})
promise
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => {
    console.log('stop loader');
});



# Promise Methods
* 1-> Promise.all()
* 2-> Promise.any()
* 3-> Promise.resolve()
* 4-> Promise.reject()

# promise.all()
* isme ek promise mein hi multiple promise houte hai

const promise1 = new Promise(function(resolve){
    resolve('first');
})
const promise2 = new Promise(function(resolve){
    resolve('second');
})
const promise3 = new Promise(function(resolve){
    resolve('third');
})

const allPromises = [promise1, promise2, promise3];

Promise.all(allPromises)
.then(res => console.log(res));

* Output
['first','second','third']


# promise.any()
* ye OR gate ki trha kaam karta hai ise jaise hi sabse phela joh bhi successful mil jayega ye ous ke saath hi deal karega

const promise1 = new Promise(function(resolve, reject){
    resolve('first');
})
const promise2 = new Promise(function(resolve){
    resolve('second');
})
const promise3 = new Promise(function(resolve){
    resolve('third');
})

const anyPromises = [promise1, promise2, promise3];

Promise.any(anyPromises)
.then(response => console.log(response));

* Output
"Second"


# promise.resolve()
* is case mein aisa promise create kar rhe hai joh shuru houte hi resolve hou jaata hai
direct resolve

const promise = Promise.resolve('first');
promise.then(response => console.log(response));

* Output
'first'

# promise.reject()
* aisa promise joh direct reject ki state mein create houta hai

const promise = Promise.reject('first');
promise.catch(response => console.log(response));

* Output
'first'