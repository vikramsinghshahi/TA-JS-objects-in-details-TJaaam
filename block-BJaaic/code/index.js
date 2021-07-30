// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`



let animalMethods = {
       eat: function(){
           console.log( `I live in ${this.location} and I can eat`)
       },
       changeLocation: function(newLocation){
           this.location = newLocation;

           return this.location;

       },
       summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
       }

}



function createUser(location, numberOfLegs){
    let user = Object.create(animalMethods)

    user.location = location;
    user.numberOfLegs = numberOfLegs;

    return user

}


let cat = createUser("delhi", 4);

console.log(cat.location)
console.log(cat.numberOfLegs)
console.log(cat.eat());
console.log(cat.changeLocation("himachal"));
console.log(cat.location);
console.log(cat.summary());



// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`