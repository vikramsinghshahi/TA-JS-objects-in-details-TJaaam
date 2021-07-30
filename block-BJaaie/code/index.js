// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`


// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function CreateAnimal(location, numberOfLegs){
    // let obj = Object.create(animalMethods);

    this.location = location;
    this.numberOfLegs = numberOfLegs;

    // return obj;
}



CreateAnimal.prototype = {
     eat: function(){
       console.log(`I live in ${this.location} and I can eat`)
     },

     changeLocation(newLocation){
         this.location = newLocation;
         return this.location

     },
     summary(){
       return `I live in ${this.location} and I have ${this.numberOfLegs}`
     }
 }


 let animal = new CreateAnimal("india" , 4);

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`


function CreateAnimal(location, numberOfLegs){
    // let obj = Object.create(animalMethods);

    this.location = location;
    this.numberOfLegs = numberOfLegs;

    // return obj;
}


function CreateDog(location, numberOfLegs, name ,color){
    // let obj = Object.create(animalMethods);
    CreateAnimal.call(this, location,numberOfLegs)

    this.name = name;
    this.color = color;

    // return obj;
}


CreateAnimal.prototype = {
    eat: function(){
      console.log(`I live in ${this.location} and I can eat`)
    },

    changeLocation(newLocation){
        this.location = newLocation;
        return this.location

    },
    summary(){
      return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

CreateDog.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color
    },
    summary: function(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
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

function CreateAnimal(location, numberOfLegs){
    // let obj = Object.create(animalMethods);

    this.location = location;
    this.numberOfLegs = numberOfLegs;

    // return obj;
}


function CreateCat(location, numberOfLegs, name ,colorOfEyes){
    // let obj = Object.create(animalMethods);
    CreateAnimal.call(this, location,numberOfLegs)

    this.name = name;
    this.colorOfEyes = colorOfEyes;

    // return obj;
}


CreateAnimal.prototype = {
    eat: function(){
      console.log(`I live in ${this.location} and I can eat`)
    },

    changeLocation(newLocation){
        this.location = newLocation;
        return this.location

    },
    summary(){
      return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}



CreateCat.prototype = {
    meow: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.color = newColor;
        return this.color
    },
    summary: function(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);


let cat = new CreateCat("india",6,"suchi", "black")



// class method

//animal
class Animal{
    constructor(location, numberOfLegs){
        this.location = location;
         this.numberOfLegs = numberOfLegs;

    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
      }
 
     changeLocation(newLocation){
          this.location = newLocation;
          return this.location
 
      }
      summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
      }


}


//  let animal = new Animal("india" , 4);


//dog

class Dog extends Animal {
    constructor(location, numberOfLegs, name ,color){

        super( location,numberOfLegs);

        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color
    }
    summary(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
    
}

let dog = new Dog("india" , 4);


//cats



class Animal{
    constructor(location, numberOfLegs){
        this.location = location;
         this.numberOfLegs = numberOfLegs;

    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
      }
 
     changeLocation(newLocation){
          this.location = newLocation;
          return this.location
 
      }
      summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
      }


}


class Cat extends Animal{
    constructor(location, numberOfLegs, name ,colorOfEyes){

        super(location,numberOfLegs);

        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }

    meow(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color
    }
    summary(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}


let cat = new Cat();


