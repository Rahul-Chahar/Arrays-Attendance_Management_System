# Synchronous Callbacks
* function f1(cb){
    cb()
}
function f2() {
    console.log('pw');
}
f1(f2)

* Output 
"PW"

# Asynchronous callbacks
* setTimeout (() => {
    console.log('pw')
}, 3000);

* Output 
after wait of 3 second its print 
"PW"