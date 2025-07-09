const library = {
  books: [
    { title: "Hurry Poter", author: "J.K.Roling" },
    { title: "Dirary of a Wimpy Kid", author: "Jeff Kinney" },
    { title: "Black Sheep", author: "Judy Nunn" },
    { title: "The Secret", author: "Jack Reacher" },
    { title: "I Will Found You", author: "Harlan Coben" },
  ],
};
for (book of library.books){
    console.log(book.title,book.author);
}
