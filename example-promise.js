// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Singapore', function (err, temp){
//   if (err){
//     console.log('error', err);
//
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//     setTimeout (function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000) //run the function after 1000 millisecond
//
//   });
// }
//
// getTempPromise('Singapore').then(function (temp){
//   console.log('Promise success', temp)
// }, function (err) {
//   console.log('err', err)
// })

//Challenge Area

//define promise
function addNumber(a, b){
  return new Promise(function (resolve, reject){
    if ((typeof a === 'number') && (typeof b === 'number')){
      var answer = a + b;
      resolve(answer);
    } else {
      reject('Both MUST be numbers!');
    }
  });
}

//sucess case
addNumber(10, 10).then(function (answer){
  console.log('Addition Success! ', answer)
}, function (answer){
  console.log('Error: ', answer)
});

//fail case
addNumber(3, 'Mine').then(function (answer){
  console.log('Addition Success! ', answer)
}, function (answer){
  console.log('Error: ', answer)
});
