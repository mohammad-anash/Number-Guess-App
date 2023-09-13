let button = document.querySelector(".button")
let input = document.querySelector("#input")
let para = document.querySelector(".para")

let generatNumbers = Math.floor(Math.random() * 100) + 1;

button.addEventListener("click", function () {
    console.log(generatNumbers)
    let inputValue = input.value;
    let convert = Number(inputValue);

    if (convert == generatNumbers) {
        para.innerHTML = "Congratulation! you guess number is correct";
    } else if (convert < 0) {
        para.innerHTML = "Please Enter Valid Input"
    } else if (convert < generatNumbers) {
        para.innerHTML = "Try To Higher Number";
    } else {
        para.innerHTML = "Try To Lower Number";
    }
})

