const container = document.querySelector("#sketch-pad");

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
});

addGrid(16);

function addGrid(size) {
    const length = `calc(100% / ${size})`;

    for (let i = 1; i <= size ** 2; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "cell-" + i);
        div.setAttribute("class", "cell");
        div.setAttribute("style", `width: ${length}; height: ${length};`);

        container.appendChild(div);
    }
}
