import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/includes/Navbar';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Footer from "./components/includes/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
