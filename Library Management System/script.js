const bookForm = document.getElementById('bookForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');
let books = []; // Array to store submitted books

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from form inputs
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const genre = document.getElementById('genre').value;

  // Create a book object with the entered values
  const book = {
    name: name,
    author: author,
    pages: pages,
    genre: genre
  };

  // Push the book object to the books array
  books.push(book);

  // Reset form inputs
  document.getElementById('bookForm').reset();
}

// Function to handle search
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  // Filter books array based on search term
  const searchResults = books.filter(book => book.name.toLowerCase().includes(searchTerm));

  // Display search results
  displaySearchResults(searchResults);
}

// Function to display search results
function displaySearchResults(results) {
  searchResult.innerHTML = ''; // Clear previous search results

  // Loop through search results and create a card for each book
  results.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${book.name}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
    `;
    searchResult.appendChild(card);
  });
}

// Add event listeners to form submission and search button
bookForm.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSearch);
