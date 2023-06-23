import "./App.css";
import Home from "./pages/Home";
import MainNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/Details";
import Favorite from "./pages/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/Ingenium_Blog_React_App/" element={<Home />} />
        <Route path="/details/:userId/:id" element={<Details />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
