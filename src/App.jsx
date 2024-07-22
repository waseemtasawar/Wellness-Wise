import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/pages/Header";
import Login from "./component/pages/Login";
import NavigationBar from "./component/pages/NavigationBar";
import SignUp from "./component/pages/SignUp";
import Home from "./component/pages/Home";
import Blog from "./component/pages/Blog";
import About from "./component/pages/About";
import ContactUs from "./component/pages/ContactUs";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
