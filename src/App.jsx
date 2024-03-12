import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       </Routes>
       
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
