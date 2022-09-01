import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from "./components/Hero/Hero";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
