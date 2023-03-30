class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }
    set state (PublicationStatus) {
        if (PublicationStatus < 0) {
            this.state = 0;
        } else if (PublicationStatus > 100) {
            this.state = 100;
        }
        else {
            this._state = PublicationStatus;
        }
    }
    
    get state () {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.tape = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author = null, name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }    
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

class Library {
    constructor(name = "", books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        const result = this.books.find((item) => item[type] === value);
        return result || null;
    }
    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    addMark (mark,subject){
      if (mark < 2 || mark > 5) {
        return;
      }
      if ([subject] in this.marks) {
        this.marks[subject].push(mark)
        } else {
          this.marks[subject]=[];
          this.marks[subject].push(mark);
        }
      }
    getAverageBySubject(subject){
      if (!(subject in this.marks)) {
        return 0;
      }
      return this.marks[subject].reduce((acc, item, index, arr) => { 
        acc+=item;
        if(index === arr.length - 1) {
           return acc / arr.length;
        } 
        return acc;
        }, 0);
      }
    getAverage(){
      let keysArr = Object.keys(this.marks);
      let sum = 0;
      if (keysArr.length === 0) {
        return 0;
      }
      for (let i = 0; i < keysArr.length; i++) {
        sum += this.getAverageBySubject(keysArr[i])
      }
      return sum / keysArr.length;
    }
    getCurrentFormattedTime(){
      return String(time)
    }
  }

