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





// let animalMethods = {
//     eat: function(){
//         console.log( `I live in ${this.location} and I can eat`)
//     },
//     changeLocation: function(newLocation){
//         this.location = newLocation;

//         return this.location;

//     },
//     summary: function(){
//      return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
//     }

// }


function createUser(location, numberOfLegs){

    let user = Object.create(animalMethods)

    user.location = location;
    user.numberOfLegs = numberOfLegs;

    return user

}

function dogObj(location, numberOfLegs, name , color){
    let dog = createUser(location, numberOfLegs);

    Object.setPrototypeOf(dog, dogMethods);

    dog.name = name;
    dog.color = color;

    return dog;

}



let dogMethods = {
    bark: function(){
         alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
        return this.name

    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;

    },
    summary: function(){

        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

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

Object.setPrototypeOf(dogMethods, animalMethods);


let dog = dogObj("delhi", 4,"pochi","brown");

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


function createUser(location, numberOfLegs){

    let user = Object.create(animalMethods)

    user.location = location;
    user.numberOfLegs = numberOfLegs;

    return user

}


function catObj(location, numberOfLegs, name, colorOfEyes){
    let cat = createUser(location, numberOfLegs);

    Object.setPrototypeOf(cat, catMethods);

    cat.name = name;
    cat.colorOfEyes = colorOfEyes;

    return cat;



}


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

let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName(newName){
        this.name = newName;
        return this.name
    },
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}

Object.setPrototypeOf(catMethods , animalMethods);


