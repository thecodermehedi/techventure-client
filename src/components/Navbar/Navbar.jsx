import {useEffect, useState} from "react";
import {CgMenuLeft} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthProvider";
import {IoSettingsOutline, IoLogOutOutline} from "react-icons/io5";
import {toast} from "sonner";
const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(true);
  const [miniLoading, setMiniLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMiniLoading(false);
    }, 1500);
  }, [user]);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    !prefersDarkScheme ? setIsChecked(true) : setIsChecked(false);
  }, []);

  useEffect(() => {
    isChecked
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [isChecked]);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const NavLinks = (
    <>
      <NavLink
        to={"/"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-semibold text-main lg:text-black lg:dark:text-white px-5 py-2 border-transparent lg:border-black lg:dark:border-white border rounded-3xl"
            : "font-semibold px-5 py-2 text-black dark:text-white lg:hover:border-black lg:dark:hover:border-white border-transparent border rounded-3xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/addProduct"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-semibold text-main lg:text-black lg:dark:text-white px-5 py-2 border-transparent lg:border-black lg:dark:border-white border rounded-3xl"
            : "font-semibold px-5 py-2 text-black dark:text-white lg:hover:border-black lg:dark:hover:border-white border-transparent border rounded-3xl"
        }
      >
        AddProduct
      </NavLink>
      <NavLink
        to={"/userCart"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-semibold text-main lg:text-black lg:dark:text-white px-5 py-2 border-transparent lg:border-black lg:dark:border-white border rounded-3xl"
            : "font-semibold px-5 py-2 text-black dark:text-white lg:hover:border-black lg:dark:hover:border-white border-transparent border rounded-3xl"
        }
      >
        MyCart
      </NavLink>
    </>
  );
  return (
    <nav className="w-full bg-white dark:bg-black pr-2 py-3 md:px-5 md:py-5 lg:px-20">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent hover:bg-transparent border-none
              hover:border-none text-main lg:hidden text-3xl"
            >
              <CgMenuLeft />
            </label>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-white dark:bg-black text-black dark:text-white  rounded-b-xl rounded-t-none w-44 mt-4"
            >
              {NavLinks}
            </ul>
          </div>
          <div className="flex-none">
            <Link to={"/"}>
              <img src="/logo.png" alt="TechVenture" className="w-44 md:w-56" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-16">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate invisible md:visible md:mr-8 ">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleSwitch}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-black w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-white w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {miniLoading ? (
            <span className="loading loading-spinner loading-sm md:loading-md lg:loading-lg text-main"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                type="button"
                className="group flex shrink-0 items-center rounded-3xl border-2 border-gray-200 hover:border-gray-400 dark:border-white dark:border-opacity-40
            dark:hover:border-opacity-60 transition md:pr-2"
              >
                <span className="sr-only">Menu</span>
                <img
                  alt="person"
                  src={user?.photoURL}
                  className="w-8 md:h-10 h-8 md:w-10 rounded-full object-cover"
                />

                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-bold text-black dark:text-white">
                    {user?.displayName}
                  </strong>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 hidden h-5 w-5 text-gray-500 transition dark:group-hover:text-white
                sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-white dark:bg-black text-black dark:text-white  rounded-b-xl rounded-t-none w-44 md:w-52 mt-5"
              >
                <p className="text-sm lg:text-base ml-5">
                  <Link className="font-semibold" to={"#"}>
                    {user?.displayName}
                  </Link>
                </p>
                <li className="pt-3">
                  <Link to={"/settings"}>
                    <IoSettingsOutline /> Account
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <IoLogOutOutline /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn rounded-3xl px-5 md:px-8 lg:px-10  text-black dark:hover:text-white  min-h-0 h-8 md:h-10 lg:h-12 bg-premium border-none transition-all duration-300"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
