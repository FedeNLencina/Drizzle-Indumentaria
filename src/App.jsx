import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/itemList/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
