// Create grid function
function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = ""; // clear old grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Initial grid
createGrid(16);

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size! Please enter a number between 1 and 100.");
  }
});
