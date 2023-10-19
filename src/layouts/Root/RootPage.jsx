import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {Toaster} from "sonner";
const RootPage = () => {
  return (
    <section className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster richColors position="top-center" duration={2000} />
    </section>
  );
};

export default RootPage;
