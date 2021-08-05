let form= document.querySelector(".form");
let bookListRoot = document.querySelector(".book_list");


// console.log(form);
// console.log(bookListRoot);

const titleElm = form.elements.title;
const authorElm = form.elements.author;
const numberElm = form.elements.number;

// console.log(title);

// console.log(author);

// console.log(number);


class Book{
    constructor(title,author, number){
        this.title = title;
        this.author = author;
        this.number = number;
        this.id = `id-${Date.now()}`
    }
   
    toggleClick(){
        this.title = "";
        this.author = "";
        this.number = "";
        // this.id = `id-${Date.now()}`
       
    }

}


class BookList{
    constructor(books=[]){
     this.books = books;

    }

    addBook(title, author, number){
        let book = new Book( title,author,number);
        this.books.push(book);
        this.createUI();
    }

    removeBook(number){
            this.books = this.books.filter(book => book.number !== number)
            this.createUI()
    }


    createUI(){
        bookListRoot.innerHTML = "";

        this.books.forEach((book) =>{
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let span = document.createElement("span")
    
            h2.innerText = book.title;
            h3.innerText= book.author;
            p.innerText= book.number;
            span.innerHTML = "X";

            span.addEventListener("click" , ()=>{
                // book.toggleClick();
                this.removeBook(book.number)
                this.createUI();
            })



        
            li.append(h2,h3,p,span);

            li.classList.add("flex");

            bookListRoot.append(li);
            console.log(bookListRoot);

        })
       

    }

}

let library = new BookList();

function handleSubmit(event){
    event.preventDefault();
    const title = titleElm.value;
    const author = authorElm.value;
    const number = numberElm.value;

    library.addBook(title,author,number);
     titleElm.value = "";
     authorElm.value  = "";
     numberElm.value  = "";

    console.log(title,author,number);
}

form.addEventListener("submit", handleSubmit);