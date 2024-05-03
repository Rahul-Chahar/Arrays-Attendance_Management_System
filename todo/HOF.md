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

* (JS) --> function are 1St class citizen OR HOF *
  ** 1st class citizen funtion koh hi other way mein higher order function bolte ha **


