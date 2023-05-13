
import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BooksIndex from './pages/BooksIndex';
import BooksShow from './pages/BooksShow';

function App() {
  return (
    <div className="App">
      <h1>Amazon Clone</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" >
          <Route path="" element={<BooksIndex />}/>
          <Route path=":bookId" element={<BooksShow />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
