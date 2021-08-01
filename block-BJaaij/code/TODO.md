## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

```js



class Book{
    constructor(title,category, author){
      this.title = title;
      this.category = category;
      this.author = author;
      this.isRead = false;
      this.finishedDate = null;
    }

    markBookAsRead(){

        
        this.isRead = true;
        this.finishedDate = Date.now();
        
        return this.isRead;
    }
}
```

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

```js

class Book{
    constructor(title,category, author){
      this.title = title;
      this.category = category;
      this.author = author;
      this.isRead = false;
      this.finishedDate = null;
    }

    markBookAsRead(){

        
        this.isRead = true;
        this.finishedDate = Date.now();
        
        return this.isRead;
    }
}

class BookList{
    constructor(){
       this.books= [];
       this.currentBookIndex = 0;
    }

    add(books = []){
        this.books = this.books.concat(books);
        return this.books;

    }
    getCurrentBook(){
        return this.books[this.currentBookIndex];
    }
    getNextBook(){
        this.currentBookIndex = this.currentBookIndex + 1;
        return this.books[this.currentBookIndex];
    }

    getPrevBook(){
        this.currentBookIndex = this.currentBookIndex - 1;
        return this.books[this.currentBookIndex];
    }

    changeCurrentBook(index){
        this.currentBookIndex = index;
        return this.currentBookIndex;

    }
}

let book1 = new Book("Harry Potter", "fiction", "JK rowling");
let book2 = new Book("Harry Pooter 2", "Non- fiction", "JK");
let book3 = new Book("Harry Pooter 3", "Nonfiction", "JK");
let book4 = new Book("Harry Pooter 4", "Non-fiction", "JK");
let book5 = new Book("Harry Pooter 5", "Nonfiction", "JK");

```
#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
