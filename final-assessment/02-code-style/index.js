const books = {}; // Semicolon ditambahkan

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id]; // Ubah 'let' ke 'const' karena 'book' tidak diubah
  if (!book) {
    return null;
  }
  return book.id; // Semicolon ditambahkan
}

function saveBook(book) {
  books[book.id] = book;
}

// Simpan buku
saveBook({
  id: 'book-1',
  name: 'Book 1',
});

// Ambil semua buku
const myBooks = getBooks(); // Ubah 'let' ke 'const' karena 'myBooks' tidak diubah
const myBook = getBookById('book-1');

console.log(myBooks); // Tampilkan semua buku
console.log(myBook);  // Tampilkan buku dengan ID 'book-1'
