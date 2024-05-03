// this: Point of view

# Call
* immediately invoke a function

```
const student ={
fname : "Rahul",
lname : "Chahar"
}

const anotherStudent = {
fname : "Vivek",
lname : "Sharma"
}
function sayName(fname,lname){
console.log(`Hii, your name is ${fname + lname}`)
}
sayName("Rahul","Chahar")

function sayName1(fname,lname){
console.log(`Hii, your name is ${fname + lname}`)
}
sayName(student.fname, student.lname)

function sayName2(fname,lname){
console.log(`Hii, your name is ${fname + lname}`)
}
sayName2(student.fname, student.lname)

function sayName3(person){
console.log[`Hii, your name is ${person.fname + person.lname}');
}
sayName3(student)

function sayName4(person){
const {fname,lname} = person
console.log[`Hii, your name is ${fname + lname}');
}
sayName4(student)



#Output
Hii, your name is Rahul Chahar
Hii, your name is Rahul Chahar
Hii, your name is Rahul Chahar
Hii, your name is Rahul Chahar
Hii, your name is Rahul Chahar
```

# call
```
const student ={
fname : "Rahul",
lname : "Chahar"
sayName: function(fname,lname){
console.log(`Hii your name is ${fname + lname)`};
},
sayNameInPOV : function(){
console.log(`Hii your name is ${this.fname + this.lname)`)
},
sayNameInPOVWithOtherParameters : function(greet){
console.log(`${greet} your name is ${this.fname + this.lname}`);
}
}




const anotherStudent = {
fname : "Vivek",
lname : "Sharma"
}
student.sayNameInPOV.call(student)
student.sayNameInPOV.call(anotherStudent)



#Output
Hii, your name is Rahul Chahar
Hii, your name is Vivek Sharma
```

# Bind
* it will return a function
```
const binedFunction1 = student.sayNameInPOV.bind(student)
const binedFunction2 = student.sayNameInPOV.bind(anotherStudent)
bindFunction1()
bindFunction2()


#Output
Hii, your name is Rahul Chahar
Hii, your name is Vivek Sharma
```

# Apply
* immediately invoke a function, extra parameters can be passed as an array
  
```
student.sayNameInPOVWithOtherParameters.call(student,"Hello")
student.sayNameInPOVWithOhterParameters.apply(student,["Hello"])

#Output
Hello your name is Rahul Chahar
Hello your name is Rahul Chahar

```

