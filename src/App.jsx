import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Auth from "./assets/pages/auth.jsx";
import Checkout from "./assets/pages/Checkout.jsx";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth"  element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;