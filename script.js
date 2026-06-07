const element = document.getElementById("level");

let level = 1;
let current = element.parentElement;

while (current) {
  level++;
  current = current.parentElement;
}

alert(`The level of the element is: ${level}`);