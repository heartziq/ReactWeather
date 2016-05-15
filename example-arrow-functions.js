// var names = ['Square', 'Pants', 'Me', 'John'];
// //
// // names.forEach(function (name){
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// //
// // names.forEach((name) => console.log('shorter', name)); //suitable without curly braces
//
// var indiv = (nama) => nama + '!'; //whatever inside the exp is auto-return
// console.log(indiv('Hadziq'));
//
// //same as
//
// function indiv(name) {
//   return name + '!';
// }
//
// console.log(indiv('Another'));
//
// var person = {
//   name: 'Hadziq',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
//
// var says = function (jen){
//   console.log('Hi, ' + jen);
// };
//
// says('Karl');
//
//challenge

function add(a, b){
  return a + b;
}

//oneLine (expression)
var oneLineAdd = (a, b) => a + b;
console.log('oneLineAdd: ' + oneLineAdd(10, 5));

//curlyBrace a.k.a multiple line (statement)
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1, 3));
// console.log(add(3, 8));
