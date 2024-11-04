const reg_viraz = /\b[^aA\s]{6,}\b/g;
const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const vikon = text.match(reg_viraz);

console.log(vikon);
