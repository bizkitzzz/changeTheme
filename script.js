let bodyStyle = getComputedStyle(document.body);
let bodyColor = bodyStyle.backgroundColor;

let getRandom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

let changeColor = () => {
  let x = String(getRandom(255));
  let y = String(getRandom(255));
  let z = String(getRandom(255));
  bodyColor = document.body.style.backgroundColor = bodyColor;
  bodyColor = "rgb(" + x + ", " + y + ", " + z + ")";
};
