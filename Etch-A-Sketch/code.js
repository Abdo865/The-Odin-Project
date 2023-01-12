/* eslint-disable no-undef */

// making the global div for the grid
const globalDiv = document.createElement("div");
const grid = document.querySelector(".grid");
const boxesNumber = document.querySelector(".boxes-number");
const gridText = document.querySelector(".grid-size");
const applyGridSize = document.querySelector(".apply");
const eraser = document.querySelector(".eraser");
const colorPicker = document.querySelector(".change-color");
const visitedClass = document.querySelector(".visited");
let gridSize = 16;
grid.appendChild(globalDiv);
globalDiv.style.display = "flex";

function makeGrid(num = 16) {
	for (let i = 0; i < num; i++) {
		const subDiv = document.createElement("div");
		subDiv.className = "subDiv";
		for (let j = 0; j < num; j++) {
			const div = document.createElement("div");
			div.style.width = calculateBoxSize();
			div.style.height = calculateBoxSize();
			div.classList.add("child");
			div.addEventListener("mouseover", function (event) {
				event.target.style.backgroundColor = colorPicker.value;
			});
			subDiv.appendChild(div);
		}
		globalDiv.appendChild(subDiv);
	}
	gridText.textContent = `${gridSize} x ${gridSize}`;
}

function reset() {
	while (globalDiv.firstChild) globalDiv.removeChild(globalDiv.lastChild);
	makeGrid(gridSize);
}

boxesNumber.addEventListener("input", function (e) {
	gridSize = e.target.value;
	gridText.textContent = `${gridSize} x ${gridSize}`;
});

colorPicker.addEventListener("input", function (e) {
	visitedClass.style.backgroundColor = e.target.value;
});

function calculateBoxSize() {
	return `${750 / gridSize - 2}px`;
}

applyGridSize.addEventListener("click", function () {
	reset();
});

eraser.addEventListener("click", function () {
	colorPicker.value = '#ffffff';
	
});

makeGrid(gridSize);
