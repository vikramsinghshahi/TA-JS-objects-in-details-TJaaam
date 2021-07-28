If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object

```js
let title = 'Where is the capital of Jordan';

let options =  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];

let correctAnswerIndex = 1

function isAnswerCorrect( index){
  return index ===  correctAnswerIndex;

}

function getCorrectAnswer(){
  return options[correctAnswerIndex];
}
```
- Organize using object

```js
let obj1 = {
  title : 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex : 1,
  isAnswerCorrect( index){
  return index === obj1.correctAnswerIndex
  },
   getCorrectAnswer(){
  return obj1.options[obj1.correctAnswerIndex]
  },
}


```

- Use a function to create object

```js

function createObj(title,options,correctAnswerIndex){

  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function(index){
    return index === question.correctAnswerIndex
  };
  question.getCorrectAnswer = function(){
    return question.options[question.correctAnswerIndex]
  };

  return question;


}

let question1 = createObj('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);


```
- Convert the function to use `this` keyword


```js


function createObj(title,options,correctAnswerIndex){

  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function(index){
    return index === this.correctAnswerIndex
  };
  question.getCorrectAnswer = function(){
    return this.options[this.correctAnswerIndex]
  };

  return question;

}


```


- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
