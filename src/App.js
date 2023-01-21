
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Train from './components/Train';
import Hotel from './components/Hotel';
import Flight from './components/Flight';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/train" element={<Train />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
