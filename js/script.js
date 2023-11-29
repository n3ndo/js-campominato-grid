function cell(){
    const element = document.createElement("div");
    element.classList.add("square");

    return element;
}

const grid = document.getElementById("grid");

for(let i=1; i<=100; i++){
    let square = cell();
    square.textContent = i;
    grid.appendChild(square);
}
