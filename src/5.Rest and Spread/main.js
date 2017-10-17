var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var person1 = {
    name: "Murali",
    age: 27,
    company: 'Company'
};
//Getting error
//const {name, ...demographics}=person1;
var age = person1.age, demographics = __rest(person1, ["age"]);
console.log(demographics);
var ages = [20, 30, 40, 50];
var numbers = [1, 2, 3, 4, 50];
var collection = ages.concat(numbers);
console.log(collection);
