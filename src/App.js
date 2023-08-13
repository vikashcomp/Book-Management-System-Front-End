
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UpdateBook from './components/UpdateBook';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <div>
      
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/addbooks" element={<AddBooks/>}/>
            <Route path="/updatebooks" element={<UpdateBook/>}/>
          </Routes>
          <Footer/>

         
        </Router>

      </div>


    </>
  );
}

export default App;
