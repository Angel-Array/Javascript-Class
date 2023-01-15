/*var age = 21;
if (age>18) {
    alert("user is old enough to enter")
}

var age = 15;
if (age<18){
    alert("User is old enough to enter");
}
else{
    alert("user is not old enough to enter")
}
*/

function greetUser(){
    var time = new Date().getHours();
    if(time<11){
        return "good morning";
    }else if(time<18){
        return "good day";
    }else{
        return "good evening"
    }
}
document.getElementById("demo").innerHTML = greetUser();


