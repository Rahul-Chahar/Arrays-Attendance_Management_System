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