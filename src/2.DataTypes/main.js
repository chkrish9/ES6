//Var keyword
function displayLoop(loopValue) {
    for (var i = 0; i < loopValue; i++) {
        console.log("Inside:" + i);
    }
    console.log("Finally:" + i);
}
displayLoop(5);
//Let keyword
function displayLooplet(loopValue) {
    for (var i = 0; i < loopValue; i++) {
        console.log("Inside:" + i);
    }
    //Error ts can't find the variable i 
    //console.log("Finally:"+i);
}
displayLoop(5);
//Datatype
var count; //Datatype any by default
var age = 10; //Datatype Number
var message = "Some message"; //Datatype string
console.log(message.indexOf("m")); //String functions of javascript will give as inteligence 
//Enum datatype
var ResponseCodes;
(function (ResponseCodes) {
    ResponseCodes[ResponseCodes["Ok"] = 0] = "Ok";
    ResponseCodes[ResponseCodes["NotFound"] = 1] = "NotFound";
})(ResponseCodes || (ResponseCodes = {}));
var ResponseCodes1;
(function (ResponseCodes1) {
    ResponseCodes1[ResponseCodes1["Ok"] = 200] = "Ok";
    ResponseCodes1[ResponseCodes1["NotFound"] = 201] = "NotFound"; //201
})(ResponseCodes1 || (ResponseCodes1 = {}));
var ResponseCodes2;
(function (ResponseCodes2) {
    ResponseCodes2[ResponseCodes2["Ok"] = 200] = "Ok";
    ResponseCodes2[ResponseCodes2["NotFound"] = 404] = "NotFound";
})(ResponseCodes2 || (ResponseCodes2 = {}));
console.log(ResponseCodes.Ok);
console.log(ResponseCodes1.Ok);
console.log(ResponseCodes2.Ok);
