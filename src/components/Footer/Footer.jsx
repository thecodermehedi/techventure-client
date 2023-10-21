import {Link} from "react-router-dom";
import {FaFacebook, FaLinkedin, FaXTwitter, FaInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className="hidden lg:block bg-white dark:bg-black">
        <footer className="footer p-10 bg-white text-black dark:bg-black dark:text-white lg:ml-20">
          <aside>
            <Link to={"/"}>
              <img src="/logo.png" alt="TechVenture" className="w-44 md:w-56" />
            </Link>
            <div className="flex justify-between items-center gap-4 text-4xl mt-3 ">
              <FaFacebook className="hover:text-main cursor-pointer" />
              <FaLinkedin className="hover:text-main cursor-pointer" />
              <FaInstagram className="hover:text-main cursor-pointer" />
              <FaXTwitter className="hover:text-main cursor-pointer" />
            </div>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="hover:text-main cursor-pointer">Branding</a>
            <a className="hover:text-main cursor-pointer">Design</a>
            <a className="hover:text-main cursor-pointer">Marketing</a>
            <a className="hover:text-main cursor-pointer">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="hover:text-main cursor-pointer">About us</a>
            <a className="hover:text-main cursor-pointer">Contact</a>
            <a className="hover:text-main cursor-pointer">Jobs</a>
            <a className="hover:text-main cursor-pointer">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="hover:text-main cursor-pointer">Terms of use</a>
            <a className="hover:text-main cursor-pointer">Privacy policy</a>
            <a className="hover:text-main cursor-pointer">Cookie policy</a>
          </nav>
          <form onSubmit={(e) => e.preventDefault()}>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="input focus:outline-none input-bordered w-full pr-16 rounded-3xl bg-blue-500 dark:bg-white text-black bg-opacity-20"
                />
                <button className="btn bg-main border-none text-black bg-premium font-bold absolute top-0 right-0 rounded-3xl rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer footer-center p-4 bg-premium text-black">
          <aside>
            <p>
              Design &amp; Developed by{" "}
              <Link
                to={"https://github.com/thecodermehedi"}
                className="font-bold text-black"
              >
                TheCoderMehedi
              </Link>
            </p>
          </aside>
        </footer>
      </section>
      <footer className="footer footer-center p-10 dark:bg-black bg-white text-black dark:text-white lg:hidden">
        <aside>
          <Link to={"/"}>
            <img src="/logo.png" alt="TechVenture" className="w-44 md:w-56" />
          </Link>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <FaFacebook className="hover:text-main cursor-pointer" />
            <FaLinkedin className="hover:text-main cursor-pointer" />
            <FaInstagram className="hover:text-main cursor-pointer" />
            <FaXTwitter className="hover:text-main cursor-pointer" />
          </div>
        </nav>
        <p>
          Design &amp; Developed by{" "}
          <Link
            to={"https://github.com/thecodermehedi"}
            className="font-bold hover:text-red-500 text-main"
          >
            TheCoderMehedi
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
