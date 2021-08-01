## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

```js

class Person{
    constructor(name, age, gender){
        this.name = name ;
        this.age = age;
        this.gender = gender;

    }
    eat(){
        
    }
    sleep(){

    }
    walk(){

    }

}

class Player extends Person{
    constructor(){
        this.sportsName = sportsName;
    }
    play(){

    }
}

class Teacher extends Person{
    constructor(){
        this.instituteName = instituteName;
    }
    teach(){

    }
}

class Artist extends Person{
    constructor(){
        this.kind = kind;
    }
    createArt(){

    }
}

class Cricketer extends Player{
    constructor(){
        this.teamName = teamName;
    }
    playCricket(){

    }


}
```

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
