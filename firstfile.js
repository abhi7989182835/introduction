console.log("heelo world")
function addthreenumbers(a, b, c) {
  return a + b + c;
}
let c = addthreenumbers(1, 2, 232)
console.log(c)
let b = "abhi"
console.log(b)
let n="harish"
let m=10
console.log(n+m)
console.log(typeof(n+m))
const hi={
  name:"ramesh",
  srn:"2",
  marks:"450/500"
}
hi['friend']="ravi"
console.log(hi.friend)
let g= prompt("what is your age?")
if(g>18){
  alert("eligible to vote");
}
else{
  alert("not eligible to vote");
}
//chapter2 ps
//question 1
let y= prompt("mention your age?")
if (y>10 && y<15){
  console.log("your age is between 10 and 15")
}
else{
  console.log("your age is not between 10 and 15")
}
//question 2
let x= prompt("note your age?")
switch(x){
  case '1':
    console.log("your age is 1")
  case '2':
    console.log("your age is 2")
  case '3':
    console.log("your age is 3")
}
//chapter 4 practice set
let point= "hig\""
console.log(point.length)
let arc="ARMANI"
console.log(arc.toLowerCase())

let task= "please give rs 1000"
console.log(task.slice(15,19))