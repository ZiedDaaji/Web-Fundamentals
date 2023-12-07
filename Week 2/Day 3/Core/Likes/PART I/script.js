var counter = 3;
var likes_number = document.querySelector("h4");

function add(){
    counter++
    likes_number.innerText = counter + " Like(s)"
}