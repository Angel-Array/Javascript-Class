// function validateForm(){
//     alert("this form will not be submitted");
//     return false;
// }
// function validateForm(){
//     var firstName = document.getElementById("firstName").value;
//     if (firstName==""){
//         alert("please enter a value on the text feild");
//         return false;
//     }
// }
// function getValue(){
//     var val=document.getElementById("firstName").value;
//     alert("the value is " + val)
// }

// function programForm(){
//             alert("please enter a value on the text feild");
//             return false;
// }

// function validateForm(){
//         var firstName = document.getElementById("firstName")[0].value;
//         if (firstName==""){
//              alert("please enter a value on the text feild");
//              return false;
//          }
//      }

// function validateForm(){
//     var userName = document.getElementsByName("userName")[0].value;
//     var length= userName.length;
//     if (length > 10 ){
//         alert("you can not input more than ten characters");
//         return false;
//     }
// }

function validateForm(){
    var userName = document.getElementsByName("age")[0].value;
    var length= userName.length;
    if (length < 18 ){
        alert("the age of the user is less than 18 the form will not be submitted");
        return false;
    }
}