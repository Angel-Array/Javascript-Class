var person = {
    name: "John doe",
    age:30,
    hobbies: ["coding","playing chess"]
};

document.getElementById("demo").innerHTML = 
person["name"] + "<br>" +
person["age"] + "<br>" +
person["hobbies"][0];