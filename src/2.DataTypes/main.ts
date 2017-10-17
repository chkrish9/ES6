//Var keyword
function displayLoop(loopValue){
    for(var i=0;i<loopValue;i++){
        console.log("Inside:"+i);
    }
    console.log("Finally:"+i);
}
displayLoop(5);

//Let keyword
function displayLooplet(loopValue){
    for(let i=0;i<loopValue;i++){
        console.log("Inside:"+i);
    }
    //Error ts can't find the variable i 
    //console.log("Finally:"+i);
}
displayLoop(5);

//Datatype
let count;//Datatype any by default
let age=10;//Datatype Number
let message="Some message";//Datatype string
console.log(message.indexOf("m"));//String functions of javascript will give as inteligence 

//Enum datatype
enum ResponseCodes{
    Ok,
    NotFound
}

enum ResponseCodes1{
    Ok=200,
    NotFound//201
}

enum ResponseCodes2{
    Ok=200,
    NotFound=404
}

console.log(ResponseCodes.Ok);
console.log(ResponseCodes1.Ok);
console.log(ResponseCodes2.Ok);
