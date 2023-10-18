import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {Toaster} from "sonner";
const Main = () => {
  return (
    <section className="font-raleway">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster richColors position="top-center" duration={2000} />
    </section>
  );
};

export default Main;
