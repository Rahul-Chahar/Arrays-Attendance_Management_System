# Splice
function removeStudent(name){

* Task1: find the index of the element to be removed => indexOf

let elementIndex = students.indexOf(name)

* Task2: To remove the element from that index => splice

student.splice(element.Index, 1)  (Agar element.Index ke baad kuch nahi likha toh sab remove hou jaayega agr 1 likha hai toh 1 element agr 2 toh 2 element remove...)

* Task3: To print something
return `student $(name) removed successfully

}


# Object Or Map

* Object
const studentRegistry ={
    1: "Rahul",
    2: "Kumar",
    3: "Chahar"
}
console.log(studentTegistry);

Output : {'1': 'Rahul','2': 'Kumar','3': 'Chahar'}

* Isne number koh 1,2,3 koh bhi String mein convert kar diya magar hame aise nahi chaiye tha joh hai wahi chaiye tha is disadvatage koh Map solve karta hai

* Map
const studentRegistryMap = new Map{
    [
        [1, "Rahul"],
        [2, "Kumar"],
        [3, "Chahar"]
    ]
}
console.log(studentRegistryMap);

Output : Map(3) {1=> 'Rahul', 2=> 'Kumar', 3=> 'Chahar'}

* Object ka joh disadvatage tha bou Map ne solve kar diya

# Array or Set

* Array
const emailIds = ["rahul@pw.live", kumar@pw.live", "rahul@pw.live"]

// Loop way of removing duplicated

let uniqueEmailIds = []

for(let i =0; i< emailIds.length; i++){
    if(!uniqueEmailIds.includes(emailIds[i])){
        uniqueEmailIds.push(emailIds[i])
    }
}
console.log(uniqueEmailIds);

Output : 'rahul@pw.live', 'kumar@pw.live'

* Set
console.log(new Set(emailIds));

output : 'rahul@pw.live', 'kumar@pw.live'

# Set duplicate allowed nahi karta 



# Callback
* function returning another function
Note: The function that we pass as an argument to another function is called the callback function. Note: Functions such as filter(), map(), reduce(), some(), etc, all are examples of Higher-Order Functions.


# foreach
* ye method kuch bhi return nahi karta ye sirf visit karke aata hai 


# foreach or Map

* foreach
1-> visits each element
2-> reuturns nothing

* Map
1-> visits each element
2-> reuturns new array

# filter
1-> visits each elements
2-> condition
3-> returns condition satisfied output


# Reduce 
* final output is in single output
1-> visits each element
2-> accumulate / gather
3-> return the value