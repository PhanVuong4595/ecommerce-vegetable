import "./App.css";
import { Routes, Route } from "react-router-dom";
{
  /* Web */
}
import LayoutWeb from "./Layout/LayoutWeb";
import HomePage from "./Pages/Web/HomePage";
import About from "./Pages/Web/About";
import Contact from "./Pages/Web/Contact";

import Login from "./Pages/Web/Login";
import Signup from "./Pages/Web/Signup";
{
  /* Admin */
}
import LayoutAdmin from "./Layout/LayoutAdmin";

function App() {
  return (
    <>
      <Routes>
        {/* Web */}
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Admin */}
        <Route path="/admin" element={<LayoutAdmin />}></Route>
      </Routes>
    </>
  );
}

export default App;
