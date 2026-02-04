let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let counter = 0;
    counter++;
    console.log(counter);
})

let input = document.getElementById("input")

input.addEventListener("input", (e) => {
    if (e.target.value === "test") {
        console.log("error");
    }
})

input.addEventListener("input", (e) => {
    if (e.target.value.includes(" ")) {
        console.log("error");
    }
})