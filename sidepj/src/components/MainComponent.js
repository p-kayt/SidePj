import { Routes, Route } from "react-router-dom";

import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Login from "./LoginComponent";

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default Main;
