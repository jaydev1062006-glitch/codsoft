const display = document.getElementById("display");

let current = "";
let operator = "";
let previous = "";

function update() {
    display.textContent = current || "0";
}

document.querySelectorAll(".keys button").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value) || value === ".") {
            if (value === "." && current.includes(".")) return;
            current += value;
        } 
        else if (value === "C") {
            current = "";
            previous = "";
            operator = "";
        } 
        else {
            if (current === "") return;
            previous = current;
            operator = value;
            current = "";
        }

        update();
    });
});

document.getElementById("equal").addEventListener("click", () => {
    if (current === "" || previous === "" || operator === "") return;

    let result = 0;

    switch (operator) {
        case "+":
            result = parseFloat(previous) + parseFloat(current);
            break;
        case "-":
            result = parseFloat(previous) - parseFloat(current);
            break;
        case "*":
            result = parseFloat(previous) * parseFloat(current);
            break;
        case "/":
            result = parseFloat(previous) / parseFloat(current);
            break;
    }

    current = String(result);
    previous = "";
    operator = "";
    update();
});
