# Destructuring
* Example

```
let [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(C)

Output
1
2
3
```
```
let [b,c] = [1,2,3]
console.log(c)

Output
2
```
```
let [a,b,c,d] = [1,2,3]
console.log(d)

Output
Undefined
```
```
const [a,b,c,d] = [1,2,3,[4,5,6]]
console.log(d)

Output
[4,5,6]
```

```
const [a,b,c,d] = [1,2,3,[4,5,6]]

console.log(d)
console.log(d[1])

Output
5
```

```
const [a,b,c,[d,e,f]] = [1,2,3,[4,5,6]]

console.log(d)

OUTPUT
4
```

# How to destructure an object
```
const obj = {
  name : "Rahul",
  age : 99,
  salary : 1000000
}
===================
let {name, age, salary} = obj
console.log(age)

Output
99

```

```
const obj = {
  name : "Rahul",
  age : 99,
  salary : 1000000
}
===================
let {name, years,salary} = obj
console.log(years)
console.log(name)
console.log(salary)

Output
Undefined
Rahul
1000000
```

* Change Order

```
const obj = {
  name : "Rahul",
  age : 99,
  salary : 1000000
}
===================
let{salary,name,age} = obj
console.log(age)
console.log(name)
console.log(salary)

Output
99
Rahul
1000000
```
***Note***
**Obj-: isme order matter nahi karta hai**

**array-: isme order matter karta hai**


```

const obj = {
  name: "Rahul",
  age: 99,
  salary: 1000000,
  address: {
    city: "Mathura",
    state: "UP",
    country: "India"
  }
}


let (address : {country}) = obj
console.log(country)

Output
India

```
