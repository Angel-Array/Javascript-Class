// converting json data to object data 
// var text = `{
//     "firstName": "John",
//     "lasName": "Angel",
//     "age": 30,
//     "isMarried": true
// }`;

// var obj = JSON.parse(text);  //return an object 

// document.getElementById("demo").innerHTML= 
// obj.firstName + " " + obj.lastName + " is " + obj.age + " years old";


// convertig object data to jason data 
var obj = {
    "firstName": "John",
    "lasName": "Angel",
    "age": 30,
    "isMarried": true
};

var text = JSON.stringify(obj);  //return an object 

document.getElementById("demo").innerHTML= text;
