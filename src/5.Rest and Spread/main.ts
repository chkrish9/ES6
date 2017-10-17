const person1={
    name:"Murali",
    age:27,
    company:'Company'
}
//Getting error
//const {name, ...demographics}=person1;
const {age, ...demographics}=person1;
console.log(demographics);


const ages = [20,30,40,50];
const numbers=[1,2,3,4,50];

const collection=[...ages,...numbers];

console.log(collection);