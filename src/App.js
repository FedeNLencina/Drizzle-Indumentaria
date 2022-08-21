import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from "./components/Hero/Hero";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer title="Comming soon" />
    </>
  );
}

export default App;
