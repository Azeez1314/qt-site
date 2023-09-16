import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutus from "./pages/Aboutus";
import Documentation from "./pages/Documentation";
import Services from "./pages/Services";
import Pagenotfound from "./pages/Pagenotfound";
import './App.css';
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Pagenotfound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
  );
}

export default App;
