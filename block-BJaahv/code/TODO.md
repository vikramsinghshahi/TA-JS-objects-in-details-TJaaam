# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.


```js

// Using function to create object

function createObj(name, id, noOfProjects){

  let question ={};

  question.name = name;
  question.id = id;
  question.noOfProjects =  noOfProjects;
  
  question.getProjects = function(){
    return question.noOfProjects;
  };
  question.changeName = function(newName){
    return question.name;

  };
  question.incrementProject = function(){
    question.noOfProjects = question.noOfProjects + 1;

    return question.noOfProjects;
  };
    question.decrementProject = function(){
    question.noOfProjects = question.noOfProjects - 1;

    return question.noOfProjects;
  }

  return question;


}

let result1 = createObj("vikram",123,3);



//[ ] Using Object.create (prototypal pattern)

let methods = {
  getProjects: function(){
    return this.noOfProjects;
  },
  changeName:function(newName){
    return this.name;

  },
  incrementProject:function(){
    this.noOfProjects = this.noOfProjects + 1;

    return this.noOfProjects;
  },
  decrementProject: function(){
    this.noOfProjects = this.noOfProjects - 1;

    return this.noOfProjects;
  }
}

function createObj(name, id, noOfProjects){

  let question = Object.create(methods);

  question.name = name;
  question.id = id;
  question.noOfProjects =  noOfProjects;
  

  return question;


}


//[ ] Using Pseudoclassical Way


function CreateObj(name, id, noOfProjects){

  // let question = Object.create(createObj.prototype);

  this.name = name;
  this.id = id;
  this.noOfProjects =  noOfProjects;
  

  // return question;


}


CreateObj.prototype = {
   getProjects: function(){
    return this.noOfProjects;
  },
  changeName:function(newName){
    let prevNmame = this.name;
    
    this.name = newName;

    return prevName;

  },
  incrementProject:function(){
    this.noOfProjects = this.noOfProjects + 1;

    return this.noOfProjects;
  },
  decrementProject: function(){
    this.noOfProjects = this.noOfProjects - 1;

    return this.noOfProjects;
  }
}
  
let result1 = new CreateObj("vikram",123,3);


// Using Class

class CreateObj{

  constructor(name, id, noOfProjects){
      this.name = name;
      this.id = id;
      this.noOfProjects =  noOfProjects;
  }

    getProjects(){
    return this.noOfProjects;
  }
  changeName(newName){
    let prevNmame = this.name;
    
    this.name = newName;

    return prevName;

  }
  incrementProject(){
    this.noOfProjects = this.noOfProjects + 1;

    return this.noOfProjects;
  }
  decrementProject(){
    this.noOfProjects = this.noOfProjects - 1;

    return this.noOfProjects;
  }
  // let question = Object.create(createObj.prototype);

  

  // return question;


}

let result1 = new CreateObj("vikram",123,3);



```
