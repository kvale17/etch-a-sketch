const container = document.querySelector("#sketch-pad");
const gridButton = document.getElementById('set-grid');

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
});

gridButton.addEventListener("click", promptGrid);

addGrid(16);

function addGrid(squareUnits) {
    if (squareUnits > 100) squareUnits = 100;

    const length = `calc(100% / ${squareUnits})`;

    for (let i = 1; i <= (squareUnits ** 2); i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "cell-" + i);
        div.setAttribute("class", "cell");
        div.setAttribute("style", `width: ${length}; height: ${length};`);

        container.appendChild(div);
    }
}

function promptGrid() {
    const squareUnits = prompt("Enter the new grid size in units squared", "0");

    if (squareUnits <= 0) {
        alert("Please enter a positive number greater than 0");

        return promptGrid();
    }
    if (isNaN(squareUnits)) {
        alert("That's not a number");

        return promptGrid();
    }
    if (squareUnits > 100) {
        alert("The max limit is 100");

        return promptGrid();
    }

    clearGrid();

    addGrid(parseInt(squareUnits));
}

function clearGrid(){
    container.innerHTML = '';
}
