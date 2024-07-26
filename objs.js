const books = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published: 1954,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published: 1960,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published: 1813,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published: 1949,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age",
    published: 1951,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published: 1925,
  },
];

const key = Symbol(10);

const look = {
  book: "maths",
  author: "R.D. Sharma",
  date: "2024",
  key: 55,
};

//   task 1
// console.log(books.title,books.author,books.published);
// console.log(books[0].author);
// books.forEach((books)=> console.log(books.title,books.author,books.published))

// task 2
// books.forEach((books)=> console.log(books.title,books.author,))

// task 3

// const search =()=>{ return console.log(look.author)}
// search()

// task 4
// let year = "1960";
// // books.forEach((i,year) => i.published==year?console.log(i.published):"false");
// books.filter((i,year="1960")=> {if(i.published==year){
//   console.log(i.published);

// }})


// task 5 

