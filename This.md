# This
`function func(){
console.log(this)
}
func();`
* now this refers to a global object
* Agar ham aise hi direct use krte hai this toh bou global object koh reffers karta hai

## Using this indide the js objects
`const obj ={
name : 'Rahul',
age : 99,
greet : function(){
console.log(this.name)
}
}`
## Output
Rahul
* jab ham function ke ander this koh use karte hai toh bou reffer karta hai apne object koh
* reffering to the object it's part of


`const obj ={
name : 'Rahul',
age : 99,
greet : function(){
},
address : {
city : 'Mathura',
country : this.name + " " + "India"
}
}
console.log(obj.address.conuntry)`

## Output
Undefined India

* Jab bhi ham this koh outside the function use kregye in the object, this is always refferece to global object.

=========

`const obj ={
name : 'Rahul',
age : 99,
greet : function(){
},
address : {
city : 'Mathura',
country : this.name + " " + "India",
name : 'Chahar',
greet1 : function(){
console.log(this.name)
}
}
}
obj.address.greet1()`

}
}
## Output
Chahar


# Constructor Function
