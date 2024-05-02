# This
Here's the corrected and clearer version of the text you provided:

```
function func() {
  console.log(this);
}

func();
```


* now this refers to a global object
* Agar ham aise hi direct use krte hai this toh bou global object koh refers karta hai

## Using this inside the js objects
```
const obj ={
name : 'Rahul',
age : 99,
greet : function(){
console.log(this.name)
}
}
```
## Output
Rahul
* jab ham function ke ander this koh use karte hai toh bou reffer karta hai apne object koh
* referring to the object it's part of


```
const obj ={
name : 'Rahul',
age : 99,
greet : function(){
},
address : {
city : 'Mathura',
country : this.name + " " + "India"
}
}
console.log(obj.address.conuntry)
```

## Output
Undefined India

* Jab bhi ham this koh outside the function use kregye in the object, which always refers to the global object.

=========
```
const obj ={
name : 'Rahul',
age : 99,
greet : function(){
},
address: {
city : 'Mathura',
country : this.name + " " + "India",
name : 'Chahar',
greet1 : function(){
console.log(this.name)
}
}
}
obj.address.greet1()

}
}
```
## Output
Chahar


# Constructor Function
`function Person(name{`

``this.name = name``

`}`

`const person_obj = new Person("Rahul")`

`console.log(person_obj)`

`console.log(person_obj.name)`

## Output
Person { name: 'Rahul' }
Rahul


# Function Methods
* 1-> call
* 2-> apply
* 3-> bind

# Call
The code below has been revised to ensure that it is free of any errors and easy to understand. Please review the updated code:

```
const mechanic = {
  name: 'Rahul',
  fixItem: function(itemName) {
    console.log(`${this.name}'s ${itemName} has been fixed.`);
  }
}

const person = {
  name: 'Chahar'
}

mechanic.fixItem.call(person, 'TV');
```


## Output
Chahar TV has been fixed

* call allow me to set the value of this keyword

* agar mein mechanc.fixItem("TV") call karta
* toh output aata Rahul TV has been fixed

* call -> set what 'this' should refer to

# Apply
* Apply bilkul hi call ki trha kaam karta hai
* difference ye hai ki Apply mein we pass Array as an argument

```
const mechanic = {
  name: 'Rahul',
  fixItem: function(itemName) {
    console.log(`${this.name}'s ${itemName} has been fixed.`);
  }
}

const person = {
  name: 'Chahar'
}

mechanic.fixItem.apply(person, ['TV']);
```

## Output
Chahar TV has been fixed



# Bind
* Ye bhi same kaam karta hai call or apply ki trha
* bas ye output mein function bana kar dedeta hai

```
const mechanic = {
  name: 'Rahul',
  fixItem: function(itemName) {
    console.log(`${this.name}'s ${itemName} has been fixed.`);
  }
}

const person = {
  name: 'Chahar'
}

mechanic.fixItem.bind(person, 'TV')();
```
## Output 
Chahar TV has been fixed


# call/apply/bind
* to make use of other object functions
* by setting the 'this' value

## call/apply
* execute the object methods immediately

# bind
* give function()
* so execute it later on demand

============================================

# Math/String/Date

# Math
```
console.log(typeof Math)
```
## Output
Object

### Minimum of two numbers
```
console.log(Math.min(5,-7)
```
Output
-7

### Getting all the properties of the object Math
```
console.log(Object.getOwnPropertyNames(Math))
```

=================
# String
* Immutable -> something can not be change
* Sequence of characters

```
let name = "Rahul" // "" or ''
```
### Access the character based on the index
```
console.log(name[2])
```
## Output
h

### immutable
```
name[2]="L"
console.log(name)
```
## Output
Rahul

### length
```
console.log(name.length)
```
## Output
5

### Find the character at any given index
```
console.log(name[2])
console.log(name.at(2))       // you can also put negative index 
console.log(name.charAt(2))
```
## Output
h

h

h

* name.at(-2)   // at method support negative indexing 
* output -> u 

### String concatenation
```
first_name = 'Rahul'
last_name = 'Chahar'
full_name = first_name + last_name
or
full_name = first_name.concat(last_name)
console.log(full_name)
```
## Output
Rahul Chahar

### Search a substring in a given string
```
str = "I am mad for teaching"
console.log(str.includes("mad"))
console.log(str.includes("Rahul"))
```
## Output
* true
* false

### I want to know the starting index of sub string
```
console.log(str.indexOf("mad"))
console.log(str.indexOf("Rahul"))
```
## Output
* 5
* -1

### I want to repeat e string
```
console.log("Hello ".repeat(11))
```
## Output
Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello

### Replace sub String
```
str = " I am Rahul Kumar Kumar"
console.log(str.replace("Kumar","Singh"))
console.log(str.replaceAll("Kumar", "Chahar:))
```
## Output
I am Rahul Singh Kumar

I am Rahul Chahar Chahar


# String Slicing
## slice 
```
str = "Rahul Chahar"
console.log(str.slice(4,8))
console.log(str.slece(4))
console.log(str.slice(-1))
console.log(str.slice(-3))
```
## Output
* l ch
* l chahar
* r
* har


### convert string to an array
```
arr = str.split("")
console.log(arr)
```
## Output
['R','a','h'......
...'r']

```
arr1 = str.split(" ")
console.log(arr1)
```
['Rahul' 'Chahar']

```
str = "Rahul$Singh$Chahar"
arr = str.split("$")
console.log(arr)
```
## Output
['Rahul', 'Singh', 'Chahar']

```
arr =["I","am","Rahul"]
console.log(arr.join(","))
```
## Output
I,am,Rahul

