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
  question.incrementProject = function( n =1){
    question.noOfProjects = question.noOfProjects + n;

    return question.noOfProjects;
  };
    question.decrementProject = function( n = 1){
    question.noOfProjects = question.noOfProjects - n;

    return question.noOfProjects;
  }

  return question;


}

let result1 = createObj("vikram",123,3);



//[ ] Using Object.create (prototypal pattern)

let methods = {
  getProjects: function(){
    return question.noOfProjects;
  },
  changeName:function(newName){
    return question.name;

  },
  incrementProject:function( n =1){
    this.noOfProjects = this.noOfProjects + n;

    return this.noOfProjects;
  },
  decrementProject: function( n = 1){
    this.noOfProjects = this.noOfProjects - n;

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


function createObj(name, id, noOfProjects){

  let question = Object.create(createObj.prototype);

  question.name = name;
  question.id = id;
  question.noOfProjects =  noOfProjects;
  

  return question;


}

createObj.prototype = {
   getProjects: function(){
    return question.noOfProjects;
  },
  changeName:function(newName){
    return question.name;

  },
  incrementProject:function( n =1){
    this.noOfProjects = this.noOfProjects + n;

    return this.noOfProjects;
  },
  decrementProject: function( n = 1){
    this.noOfProjects = this.noOfProjects - n;

    return this.noOfProjects;
  }
}
  






```
