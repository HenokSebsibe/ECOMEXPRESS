import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Auth from "./assets/pages/auth.jsx";
import Checkout from "./assets/pages/Checkout.jsx";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext.jsx";
import ProductDetails from "./assets/pages/ProductsDetail.jsx.jsx";
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth"  element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;