# Async
* jab bhi normal function koh asynchronous bana hou tab async kewword use karte hai

async function f () {

}

# Await
* rukoh, aisi cheeze ke liye rukoh joh cheeze kuch derr baad response degyi
but ye ous excution nahi rokta, jab bhi resoponse aaye tab tak rukoh or resoponse aate hi is cheeze koh aage bhadoau baaki cheeze apni chlti rhe

async function f() {
    const promise = new Promise(function(reoslve){
        setTimeout(()=>{
            resolve('res')
        },1000);
    });
    const data = await promise;
    console.log(data);
}
f();

* Output
'res'
