import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Notfound from  "./Components/Home/Notfound"
import Header from  "./Components/Layout/Header"
import Footer from  "./Components/Layout/Footer"




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notfound" element={<Notfound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;