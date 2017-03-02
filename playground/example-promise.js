//
// //Callbacks => wrong logical output
// function getTempCallback (location, callback) {
//   callback(undefined, 78); //If there is no error, calls this one
//   callback('City not found'); //If there is an error, it calls this one
// }
//
// getTempCallback('Lund', function (err, temp) {
//   if(err) {
//     console.log('error',err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// //Promises
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 3000)
//
//   });
// }
//
// getTempPromise('Lund').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', temp);
// });

//Challenge area

function addPromise (a, b) {
  return new Promise(function (resolve,reject) {
    if (typeof a ===  'number' && typeof b === 'number') {
      var sum = a + b;
      resolve(sum);
    } else {
      reject('One of them isn t a number');
    }
  });
}

addPromise(5,6).then(function (sum) {
  console.log('The sum is:', sum);
}, function (err) {
  console.log('Error:', err);
})
