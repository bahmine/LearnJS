export class Book {
    constructor (title,author,description,pages,currentPage,read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read;
    }
    readBook (page) {
      if (page < 1 || page > this.pages_number) {
        return 0;
      } else if (page >= 1 && page < this.pages) {
        this.currentPage = page;
        return 1;
      } else {
        this.currentPage = page;
        this.read = true;
        return 1;
      }
    }
  }
  const book1 = new Book ("Maison des mots","Ramadan Sow","Roman",150,5,false);
  const book2 = new Book ("Conte peulhs","Ampathé BAH","Roman",356,50,false);
  const book3 = new Book ("L'enfant noir","Camara Laye","Roman",150,150,true);
  export const books = [];
  books.push (book1,book2,book3);
  
  