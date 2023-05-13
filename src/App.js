import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="loading" id="loading">
          <div className="loading-layout">
            <div className="loader"></div>
          </div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
