// function getSum(a, b) {
//   console.log (a + b);
// }
// getSum(10, 6);


// function length (x){
//   console.log("Слово " + x + " занимает " + x.length + " кодовых значений");
// }
// length("ленина");

// let num = 5
// while(num < 25) {
//   console.log(num);
//   num ++;
// }


// for (let a = 10; a >= -10; a --){
//   console.log(a);
// }



let example1 = [];
let example2 = [3,4,5,45,63];
let example3 = ["hello", 55,true,null];

let example4 = [" Aijan ", " Dastan " ," Omurbek "];

let example5 = ["Naryn", "Osh", "Jalal Abad","At-Bashy", "Karakol" ,"Kochkor"];
console.log(example5);
console.log (example5[0]);
console.log (example5[4]);

example4.push("Aida");//adds
console.log(example4);

example4.unshift( "Rahman");//add in the begining
console.log(example4);


let name1 = example4.pop();//cuts
let name2 = example4.shift();//cuts from the begining
console.log(example4);

example4[0] = "Aichurok";
console.log(example4);
console.log(example4.length);


console.log(" hello, my name is " + example4[0]);

console.log(" hello, my name is " + example4[1]);
console.log(" hello, my name is " + example4[2]);

example4.push("Omyrbek");
example4.push("Bakyt");
example4.push("Ilgiz");

for (let i = 0; i < example4.length; i ++){
  console.log("hello, my name is " + example4[i]+ ".Nice to meet you." );
}

// for (let i = 0; i < example5.length; i ++){
//   console.log("hello, my favorite town is " + example5[i] );
// }
// console.push("Bishkek");


for (let name of example4){
  console.log("Hello, I'm" + name);
}
for (let i in example4){
  let name = example4[i];
  console.log("Hello, name is" + name);
}

example4.forEach (function(name, i){
  console.log("Hello..." + name);
});

while (example4.length > 0){
  console.log(example4.pop());
}

