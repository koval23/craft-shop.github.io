import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
