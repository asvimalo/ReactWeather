var names = ['Andrés', 'Pepe', 'Marco']

names.forEach(function (name) {
  console.log('forEach:',name);
});
//Arrow functions wit anonimous functions

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrés'));


var person = {
  name: 'Andrés',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();


function add(a,b) {
  return a + b;
}
console.log(add(1,3));
console.log(add(9,3));

var addStatement = (a,b) => {
  return a+ b;
}
console.log(addStatement(1,3));

var addExpression = (a,b) =>  a + b;
console.log(addExpression(1,3));
