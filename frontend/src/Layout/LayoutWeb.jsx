import { Outlet } from "react-router-dom";
import Header from "../Component/Web/Header";
import Footer from "../Component/Admin/Footer";

const LayoutWeb = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayoutWeb;
