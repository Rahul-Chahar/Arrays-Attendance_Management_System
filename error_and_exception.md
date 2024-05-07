# Errors
* Syntax error

```
console.log("Hello)

Output
Error
```
* Runtime Error

```
let x = 5
console.log(x.toUpperCase())

Output
error
but ye error run hone ke baad hi pata chlti hai
```

```
let x = 25
let y = 0
let res = x/y
console.log(res)

Output
Infinity
```

* Logical Error

```
let i =5

while(i>=0){
console.log("Hello Students")
}

Output
Hello Students
Hello Students
Hello Students
Hello Students...
infinite
```

# Exception
```
console.log("I am at the first line")
try{
let x = 5
console.log(x.toUpperCase())
}
catch(err){
console.log("Error has been handled. Please proceed")
}

console.log('I am at the last line')


Output
I am at the first line
Error has been handled. Please proceed
I am at the last line

```
