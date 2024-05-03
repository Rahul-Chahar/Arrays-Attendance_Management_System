# Higher Order Function

# Function
### two types of function
* 1-> First order function
  is function ke parameter /argumnets sirf primitive yaha object houte hai

* 2-> Higher Order function
or isme parameter/arguments primitive,object yaha function houta hai

Example of HOF  
   ```
  fucntion calculator(operator,a,b){
  return operator(a,b)
  }
  console.log(calculator(a,b) => a+b, 5,6))
  ```

### object as a argument example   
#### also example of first order of function
```
function calculateFoodBill(perObject){
if(perObject.age>11){
console.log("Your food bill is Rs 900")
} else{
console.log("You are chotu babu, so your bill is  300 only")
}
}
calculateFoodBill({"name": "Rahul", "age": 99})
```

*(JS) --> function are 1St class citizen OR HOF*

  **1st class citizen funtion koh hi other way mein higher order function bolte ha**


## HOF example
```
function getMeGreetFun(){
return (message) => console.log(`hello, ${message}')
}
getMeGreetFun()("how are you?")
```

***agar koi bhi function HOF koh support karta hai bou function 1st class citizen houta khelata hai***



# Callbacks
* function houta hai
* which passed as an argument to a function

->ye basically ek function houta hai joh pass karta hai argument as a function

***Note-> function ke ander function known as callbacks***

   ```
  fucntion calculator(fn,a,b){
  return fn(a,b)
  }
  console.log(calculator(a,b) => a+b, 5,6))
  ```
* ye higher order function hai pura magar isme joh fn hai bou callback hai

# function Composition:-
* composition-> combining together

```
1-> Take a number
2-> Make it twice
3-> Sequre of the number

const twice = x => x*2
const sqr = x => x*x

const compose = (fn1,fn2) => (value) => fn1(fn2(value))

console.log(compose(sqr,twice)(5))

#Output
100
```

* without using arrow function
```
function compose(fn1,fn2){
return (value) => fn1(fn2(value))
}
console.log(compose(sqr,twice)(5))
```

### callback
function passed as an argument to a function

```
function calculateMatches(isMatch){
other_person_match_interest = ['l','l','l','r','l','l','r','l']

for( i of other_person_match_interest){
if(isMathc(i)){
console.log("yaya, I got a match")
}
}
}
calculateMatches((m) => m=='r')
```

# Synchronous Processing
*example
```
console.log("hello 1")
console.log("hello 2")

functon greet(msg){
console.log(msg)
}
greet("hello students !")
console.log("hello 3")

# Output
hello 1
hello 2
hello students !
hello 3
```

# Asynchronous Proceesing
* setTimeout ->

kiya functon yaha code execute karana hai or kitni derr baad karana hai

```
console.log('Hello from the begining')

setTimeout{()=>{
console.log("Hello from the call back fn")
},3000)

console.log("Hello from the end")

#Output
Hello from the begining
Hello from the end
Hello from the call back fn
```

* without using arrow function
  ```
  console.log('Hello from the begining')

  function hello(){
  console.log("hello from the call back fn")
  }

  setTimeout(hello,3000)

  console.log("Hello from the end")

  #Output
  Hello from the begining
  Hello from the end
  Hello from the call back fn
  ```

#### Q-> print hello studetns every 2 seconds
* so we using **setInterval** 
```
console.log('Hello from the begining')
setInterval(() =>{
console.log("Hello students")
},2000)
```

* -> how to stop it?
**clearInterval**  -> using this for stop

  ```
  console.log('Hello from the begining')
  id = setInterval(() =>{
  console.log("Hello students")
  clearInterval(id) // It will stop the interval job
  },2000)
  ```

  ```
  let count = 1
  id = setInterval(() =>{
  console.log("Hello students")
  console.log(id)
  contn = count +1
  if(count ==3) {
  clearInterval(id)
  }
  },2000)


  #Output
  Hello students
  Hello students
  Hello students
  ```

  # forEach Method
  ```
  fruits = ["Mango", "Apple", "Banana"]

  fruits.forEach(print)

  function print(str){
  console.log(str)
  }

  #Output
  Mango
  Apple
  Banana
  ```

  * UpperCase

  ```
  fruits = ["Mango", "Apple", "Banana"]

  fruits.forEach(capital)

  function capital(str){
  console.log(str.toUpperCase())
  }

  #Output
  MANGO
  APPLE
  BANANA
  ```

  # Map
  * transform the given array
 
  [1,2,3,4] ----> [1,4,9,16]

  -> apply square to all the elements

  --> in such case use Map

  ```
  sqr_arr = [1,2,3,4].map(elem => elem*elem)
  console.log(sqr_arr)
  ```
```
fruits = ["Mango", "Apple", "Banana"]

tranformed_fruits = fruits.map(f => f.toUpperCase())

console.log(tranformed_fruits)
```

***Note-> 
forEach -> Same array is changed
Map -> new array is created***
