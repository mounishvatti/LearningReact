let count = document.querySelector("#count");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let incrementCount = () => {
    count.innerText = parseInt(count.innerText) + 1;
}

let decrementCount = () => {
    if (parseInt(count.innerText) <= 0) {
        return;
    }
    count.innerText = parseInt(count.innerText) - 1;
}

increment.addEventListener("click", incrementCount);
decrement.addEventListener("click", decrementCount);