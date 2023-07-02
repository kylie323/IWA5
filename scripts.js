const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const customers = 1;
const country = "RSA";
let currency = null;
let shipping = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let cost = shoes + toys + shirts + batteries + pens;

if (country === "RSA") {
  shipping = 400;
  currency = "R";
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

if (country === "NK") {
  console.log(BANNED_WARNING);
}

if ((cost >= 1000 && country === "RSA") || (cost >= 60 && country === "NAM")) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

console.log("Price:", cost + shipping);
