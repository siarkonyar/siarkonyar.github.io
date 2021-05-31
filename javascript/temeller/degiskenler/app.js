// var a = 13453;
// var b = 242323;
// var c = 765565;

// console.log(a, b, c);

//primitve

// var a = 10;
// var b = 3.14;
// console.log(typeof a , typeof b);

//string 
// var name = "mustafa";
// console.log(name);
// console.log(typeof name);

//boolean
// var a = true;
// console.log(typeof a);

//null
// var a = null;
// console.log(a);
// console.log(typeof a);

//undefined
//  var a;

//  console.log(typeof a);

 //REFERANS

//array
// var numbers = [1,2,3,4,5,6];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[0] , numbers[3]);

// var person = {
//     name : "şiar",
//     age:25
// }

// console.log(person);
// console.log(typeof person);
// console.log(person.age);

//date
// var date = new Date();

// console.log(date);
// console.log(typeof date);

//fonksiyon
// var merhaba = function(){
//     console.log("merhaba");
// };

// console.log(merhaba);
// console.log(typeof merhaba);

// var a = 10;
// var b = a;

// console.log(a,b);

// a=20;
// console.log(a,b);

var a = [1,2,3];
var b = a;
a[2]=5;
console.log(b[2]);

a.push(4);
console.log(b);