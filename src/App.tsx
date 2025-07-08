import { useState, useEffect } from 'react';
import './App.css';

interface Book {
  id: number;
  title: string;
  path: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'content/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <div className={`sidebar bg-light${isSidebarVisible ? '' : ' collapsed'}`}> 
        <div className="sidebar-toggle">
          <button className="btn btn-primary btn-sm" onClick={toggleSidebar} title={isSidebarVisible ? 'Ocultar lista' : 'Mostrar lista'}>
            <i className={`bi ${isSidebarVisible ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>
          </button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
          {isSidebarVisible && <h2 className="mb-4" style={{marginBottom: 0}}>Libros</h2>}
          <button className="btn btn-sm" onClick={() => setDarkMode(!darkMode)} title="Cambiar modo claro/oscuro">
            <i className={`bi ${darkMode ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill'}`}></i>
          </button>
        </div>
        {isSidebarVisible && (
          <>
            <ul className="nav nav-pills flex-column">
              {books.map((book) => (
                <li className="nav-item" key={book.id}>
                  <a
                    href="#"
                    className={`nav-link ${selectedBook && selectedBook.id === book.id ? 'active' : ''}`}
                    onClick={() => handleBookClick(book)}
                  >
                    {book.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="content flex-grow-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        </nav>
        <div className="viewer-container">
          {selectedBook && (
            <iframe
              src={`${selectedBook.path}/index_prof.html`}
              title={selectedBook.title}
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
