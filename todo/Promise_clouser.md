# Promise
```
const promiseFromSimran = new Promise((resolve,reject)=>{

let parentDecision = true
if(parentDecision){
resolve('Yaay, shaadi ki tayyari karo')
} else {
reject ('Papa ne doosra IAS dhoond lia hai')
}
});

promiseFromSimran.then((message) =>{
console.log("Message from my girl : "+ message)
console.log("My life is set !!!")}).catch((msg) => {
console.log("Message from my girl : "+ msg)
console.log("Where is my tinder !")
}).finally(() => {console.log("finally I am clear")})


#Output
Message from my girl : Yaay, shaadi ki tayyari karo
My life is set !!!
finally, I am clear

```

* resolve -> It is always postive scenario

* reject -> It is always negative scenario

#### Where we use Promises in the world of Js
* Jha bhi asynchronous process karna hai waha promise is going to root it's a new friend for us!


# Promise.all
```
const dost1Promise = new Promise((resolve,reject) => {
setTimeout (() => {
if(Math.random () > 0.5){
  resolve("Dost1 is ready to come")
} else{
  reject('Dost1 is not coming')
}
},3000)
})

const dost2Promise = new Promise((resolve,reject) => {
setTimeout (() => {
if(Math.random () > 0.5){
  resolve("Dost2 is ready to come")
} else{
  reject('Dost2 is not coming')
}
},1000)
})

const dost3Promise = new Promise((resolve,reject) => {
setTimeout (() => {
if(Math.random () > 0.5){
  resolve("Dost3 is ready to come")
} else{
  reject('Dost3 is not coming')
}
},2000)
})

/**
* Only if all of them come, I will marry, else not marry
*/

const friendPromises = [dost1Promise, dost2Promise, dost3Promise]

Promise.all(friendPromises).then(result=>{
console.log(result)
console.log("I will marry")
}).catch(mess => {
console.log(mess)
console.log("Since all my friends didn't come, I will not marry")
})
```

# Promise.any
```
const gf1Promise = new Promise((resolve,reject) =>{
setTimeout(() => {
if(Math.random() > 0.5){
  resolve("gf1 is ready to come")
} else{
reject('gf1 is not coming')
}
},3000)
})

const gf2Promise = new Promise((resolve,reject) =>{
setTimeout(() => {
if(Math.random() > 0.5){
  resolve("gf2 is ready to come")
} else{
reject('gf2 is not coming')
}
},1000)
})

const gf3Promise = new Promise((resolve,reject) =>{
setTimeout(() => {
if(Math.random() > 0.5){
  resolve("gf3 is ready to come")
} else{
reject('gf3 is not coming')
}
},2000)
})

const gfPromises = [gf1Promise,gf2Promise,gf3Promise]

Promise.any(gfPromises).then((message) => {
console.log(message)
console.log("My Valentine date is confirmed")
}).catch((message) =>{
console.log(message)
console.log("Kitne aur relationship banau")
})
```

**Note-:**

***Jab logo koh promise ka syntax complex lagne laga or unhone Js waalou koh bola ki bhai kuch karo java c++ ki trha kuch kro toh Js waalou ne bola never ham nahi kar skte kyu ki java or c++ toh mota bhai hai mein toh gareeb hu kyuki java or c++ ke pass toh multiple thread hai mere pass toh bss single thread hai java or c++ toh synchornous kar skte hai magar mujhe toh asynchonous karna pdega***

***phir logo ne bola thik hai bhai magar phir bhi kuch dekhou tab Js wwaale bole thik Async Await ka concept use karte hai***

***Async Await -> ye ek saath use houte hai without Async ke Await nahi laga skte Await use karne ke liye Async lagana jaruri hai***

```
async function printMessage(){
return "Hello Students"
}
console.log(printMessage())

printMessage().then(msg => console.log(msg))

#Output
Promise {"Hello Students")
Hello Students
```
***yaha hamne jaise hi function ke aage async keyword lagaya these trasform the function into an asynchronous function, asynchronous function is nothing but a Promise***

***Await tab use karte hai jab hame asychronous data chaiye or without ouske aage nahi jaana hai toh ham Await ka use karte hai Await lagane se bou aage nahi jaayega jab tak data nahi aajta yaha resoponse***

```
function printHelloAfterWait() {
  setTimeout(() => {
    console.log("Hello Students");
  }, 3000);
  console.log("This line should be the last print");
}
printHelloAfterWait();

Output
This line should be the last print
Hello Students
```

***Magar mein wait karna chaata hu setTimeout par phele Hello students print hou ouske baad ham neeche jaaye or print hou this line should be the last print***

***Is problem koh solve karne ke krne ke liye use kregye Await ka***
```
async function printHelloAfterWait() {

//await is always applied to promise
let result = await new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve("Hello Students");
  }, 3000)
})
console.log(result)
  console.log("This line should be the last print");
}
console.log("first line")
printHelloAfterWait();
console.log("last line")

Output
first line
last line
Hello Students
This line should be the last print
