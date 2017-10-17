function displayDetails(name:string,age:number,salary:number){

}
displayDetails("Murali",26,26000);

function displayDetails1(person:{name:string,age:number,salary:number}){
    
}
displayDetails1({name:"Murali",age:26,salary:26000});

interface Person{
    name:string,
    age:number
    salary?:number//Optional variable
}
function displayDetails3(person:Person){
    
}
displayDetails3({name:"Murali",age:26,salary:26000});

//ShortHand
function getAnimal(name,age){
    return {
        name,
        age
    }
}