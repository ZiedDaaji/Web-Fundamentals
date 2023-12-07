var counter1 = 9;
var counter2 = 12;
var counter3 = 9;
var likes_number1 = document.querySelector("#like1");
var likes_number2 = document.querySelector("#like2");
var likes_number3 = document.querySelector("#like3");
console.log(likes_number1)
console.log(likes_number2)
console.log(likes_number3)


function add1(){
    counter1++
    console.log(likes_number1)
    likes_number1.innerText = counter1 + " Like(s)"
}
function add2(){
    counter2++
    likes_number2.innerText = counter2 + " Like(s)"
}


function add3(){
    counter3++
    likes_number3.innerText = counter3 + " Like(s)"
}


