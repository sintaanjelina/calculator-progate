const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    console.log(number);
    number.addEventListener("click", (event) => {
        console.log(event.target.value, "number is pressed");
    })
})
