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
finally I am clear

```

* resolve -> its always postive scenario

* reject -> its always negative scenario

#### Where we use Promises in the world of Js
* Jha bhi asychronous process karna hai waha promise is go to root its a new frined for us!


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
* Only if all of them comes, I will marry , else not marry
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

***Jab logo koh promise ka syntax complex lagne laga or unhone js waalou koh bola ki bhai kuch karo java c++ ki trha kuch kro toh js waalou ne bola never***
