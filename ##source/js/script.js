// Задание №1 кординаты мышки
const container = document.createElement("div");
container.setAttribute("class", "container");
container.style.cssText =
	"display: flex; flex-direction: column; align-items: center;";
document.querySelector("body").appendChild(container);

const h2 = document.createElement("h2");
h2.textContent = "События";
h2.style.cssText = "display: inline-block; ";
container.appendChild(h2);

const div = document.createElement("div");
container.appendChild(div);
div.style.cssText = "width: 400px; height: 400px; background-color: Cyan;";

const cordsOut = document.createElement("div");
container.insertBefore(cordsOut, div);

const cordsIn = document.createElement("div");
container.appendChild(cordsIn);

document.querySelector(".container").addEventListener("mousemove", (event) => {
	cordsOut.textContent =
		"Кординаты внешние X:" +
		" " +
		event.pageX +
		" Y:" +
		" " +
		event.pageY;
});

div.addEventListener("mousemove", (event) => {
	cordsIn.textContent =
		"Кординаты внутренние X:" +
		" " +
		event.offsetX +
		" Y:" +
		" " +
		event.offsetY;
});
