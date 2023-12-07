var new_name = document.querySelector("#user_name");

function change_name() {
    new_name.innerText = "other name";
}


var new_counter = document.querySelector("#requests_number");
var new_counter2 = document.querySelector("#connections_number");
var array =[1 , 2];
var counter = 2;
var counter2 = 418;

function add(element) {
    x =".content" + array[element];
    var new_content = document.querySelector(x);
    new_content.remove();
    counter--;
    counter2++;
    new_counter.innerText = counter;
    new_counter2.innerText = counter2;
}

function refuse(element) {
    x =".content" + array[element];
    var new_content = document.querySelector(x);
    new_content.remove();
    counter--;
    new_counter.innerText = counter;
}
