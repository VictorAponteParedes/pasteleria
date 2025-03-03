import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

//Views
import HomeScreen from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
