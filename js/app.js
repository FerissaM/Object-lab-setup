console.log('app.js is loaded');


const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7, // feet
    diet: 'vegetarian',
    woodlandFriends: [{name: 'bunny', age: 4}, {name: 'squirrel', age: 5}]
    
    // run: function (){

    // }
};

// log the age of bunny
console.log(bigFoot)
console.log(bigFoot.woodlandFriends[0].age);
// log out the squirrel
console.log(bigFoot.woodlandFriends[1].age);

// bigFoot = {
// name: 'Bigger Foot'
// }



delete bigFoot.isReal // delete the isReal property

// add argument to the hide function called location
// when you call it should say
// Lets hide in "location"

// to access values
bigFoot.name // 'Big Foot' // go-to ways to do it
// or the bracket
bigFoot['name'] // 'Big Foot'


let key = 'name'

bigFoot[key]

bigFoot.woodlandFriends[0] /// 'bunny'


function sayHello(name) {
    return `Hello, ${name}`
}

// for each woodlandFriend I want you to use the sayHello function

bigFoot.woodlandFriends.forEach(function(friend){
    console.log(sayHello(friend));
}); // this is with the loop

// above and below do the same thing
sayHello(bigFoot.woodlandFriends[0])
sayHello(bigFoot.woodlandFriends[1])
sayHello(bigFoot.woodlandFriends[2])
// this is without the loop

// you should see three logs
// Hello, bunny
// Hello, squirrel
// Hello, deer




// To print out deer from the woodland friends
console.log(bigFoot.woodlandFriends[1])


// I want to see if bigFoot is real
// retrieve the value of the isReal key (property) in bigFoot
console.log(bigFoot.isReal)

// Getting a property (Value) ^^^^

// See what diet bigFoot has
console.log(bigFoot.diet)


// SET KEY VALUE PAIRS
console.log(bigFoot.color, " <-------- bigFoot before")
// Change the color of bigFoot
bigFoot.color = 'strawberry blonde';
console.log(bigFoot)


// change the diet of bigFoot
bigFoot.diet = 'pescatarian';
console.log(bigFoot.diet)
