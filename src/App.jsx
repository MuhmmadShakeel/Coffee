import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import AboutUs from './Pages/AboutUs';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactPage/>} />
       
            {/* Add more routes here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
