let a = function(){
    console.log('I am a valid function');
    console.log('I am not a normal function');
    console.log('I am a anonymous  function');
}
//a(); Call back function

function dusrafunction(Kahitari){
    Kahitari();
    //return Kahitari;
}
dusrafunction(a);

function xyz(){
    return function(){
        console.log('I am a valid function');
        console.log('I am not a normal function');
        console.log('I am a anonymous  function');
    }
}//It only returns is not called

let b = xyz();
b();
xyz()();

function xyz(){
    return ()=> {
        console.log('I am a valid function');
        console.log('I am not a normal function');
        console.log('I am a arrow function');
    }
}          //It only returns is not called
xyz()();


const c = [1,3,4,2,4];

function getSum(arr){ 
    let sum = 0;
    for (let i = 0;i<arr.length;i++)
    {
        sum = sum + arr[i];
        //sum += arr[i];
    }
    return sum;
}

let sum = getSum(c);
console.log(sum());

//console.log(getSum(a));

const d = [1,3,4,2,4];

const getSum = (arr) =>  {
    let sum = 0;
    for (let i = 0;i<arr.length;i++)
    {
        sum = sum + arr[i];
        //sum += arr[i];
    }
    return sum;
}

let s = getSum(d);
console.log(s);

function printTheOutput(b){  //b -call by function
    const res = b(); //getSum called
    console.log(res);
}
printTheOutput(getSum);  //printTheOutput is a Higher Order function and function which returns another function is a hof