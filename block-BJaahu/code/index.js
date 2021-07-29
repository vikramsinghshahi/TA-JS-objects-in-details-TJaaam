// ### For single question we need the following data and methods:

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.

// ### To test use the following data

// You can use the data given below. You will also have to change the name of the function while calling them.

// ```js
// let firstQuestion = new Question(
//   'Where is the capital of Jordan',
//   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   1
// );
// let secondQuestion = new Question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// );


// let title = "Where is the capital of Jordan";
// let options =  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex = 1;

// function isAnswerCorrect(index){
//     return index ===correctAnswerIndex;

// }

// function getCorrectAnswer(){
//     return options[correctAnswerIndex];
// }

// let obj1 = {
//     title:"Where is the capital of Jordan",
//     options:['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,
//     isAnswerCorrect(index){
//         return index === obj1.correctAnswerIndex;
    
//     },
//     getCorrectAnswer(){
//         return obj1.options[obj1.correctAnswerIndex];
//     }
// }



// Prototypal pattern

let questionMethods= {
            isAnswerCorrect:  function(index){
            return index === this.correctAnswerIndex;

            },

            getCorrectAnswer: function (){
                return this.options[this.correctAnswerIndex];
            },
}

function question( title , options , correctAnswerIndex){

        let obj1 = Object.create(questionMethods);
        obj1.title = title;
        obj1.options= options;
        obj1.correctAnswerIndex= correctAnswerIndex;
        return obj1;

}

let question1 = question('Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1);
let question2 = question()


// Pseudoclassical Pattern


let questionMethods= {
    isAnswerCorrect:  function(index){
    return index === this.correctAnswerIndex;

    },

    getCorrectAnswer: function (){
        return this.options[this.correctAnswerIndex];
    },
}

function Question( title , options , correctAnswerIndex){

// let obj1 = Object.create(question.prototype);
this.title = title;
this.options= options;
this.correctAnswerIndex= correctAnswerIndex;
// return obj1;

}

Question.prototype = {
    isAnswerCorrect:  function(index){
        return index === this.correctAnswerIndex;
    
        },
    
        getCorrectAnswer: function (){
            return this.options[this.correctAnswerIndex];
        },
}

let question1 = new Question('Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1);
let question2 = new Question()




//Create using class


class Question{

    constructor(title , options , correctAnswerIndex){
         // let obj1 = Object.create(question.prototype);
    this.title = title;
    this.options= options;
    this.correctAnswerIndex= correctAnswerIndex;
    // return obj1;
    }

    
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;    
        }
    
        getCorrectAnswer(){
            return this.options[this.correctAnswerIndex];
        }
      
    
    }
    
   