let form = document.querySelector("form");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


class Question{
    constructor(title, options, correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isCorrect(answer){
        return this.options[this.correctAnswerIndex] === answer ;      
        
    }
}