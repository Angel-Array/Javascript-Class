/*
var person = {
    fullName: "Jhon Doe",
    age: 30,
    hobbies: ["coding", "playing chess", "gaming"],
    isMarried: true
}


var person = {
    fullName: "Jhon Doe",
    age: 30,
    showName: function(){
        alert(this.fullName);
    },
    showAge: function(){
        alert(this.age);
    }
    }
    */

    var person ={
        name: "john doe",
        age: 30,
        showDetails: function(){
            alert(this.name + " is " + this.age + "years old");
        }
    };