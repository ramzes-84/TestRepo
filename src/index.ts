import './index.html';
import './index.css';
import './normalize.css';
// import code from './img/code.png';


const mult = (a: number, b: number): number => a * b;

console.log(mult(2, 4));
console.log(mult(3, 4));

const img = new Image();
// img.src = code;

const imgWrap = document.querySelector('.img');
if (imgWrap) imgWrap.append(img);