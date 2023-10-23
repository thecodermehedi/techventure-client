import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {updateProfile} from "firebase/auth";
import {toast} from "sonner";
import {AuthContext} from "./../../context/AuthProvider";
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {signUpWithEmail} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const termsandcon = form.termsandcon.checked;
    const imageUrlRegex =
      /^(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\/\S*)?\.(jpg|jpeg|png|gif|bmp)$/;

    if (!imageUrlRegex.test(photoURL)) {
      toast.error("Invalid photo URL");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must include at least one special character.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password don't match");
      return;
    }
    if (!termsandcon) {
      toast.error("You must accept our terms and conditions");
      return;
    }
    form.reset();
    setShowPassword(false);
    setShowConfirmPassword(false);
    signUpWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const newUser = {
            email: user.email,
            creationTime: user.metadata.creationTime,
          };

          fetch("https://techventure-server.onrender.com/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then(() => {});
          updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              toast.success(`Welcome to our website, ${name}`);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      })
      .catch((error) => {
        if (error?.message.includes("email-already-in-use")) {
          toast.error("Email already in use");
        }
        console.log(error);
      });
  };
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 hidden lg:block md:w-8/12 lg:w-6/12">
              <img src="/signup.svg" className="w-full" alt="login-image" />
            </div>
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
              <h1 className="text-center text-4xl font-bold text-main mb-6">
                Create Your Account
              </h1>
              <form onSubmit={handleRegister} className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input bg-main bg-opacity-10 rounded-3xl border-none focus:outline-none mb-2 text-lg placeholder:text-gray-600 focus:placeholder:text-opacity-0 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="input bg-main bg-opacity-10 rounded-3xl border-none focus:outline-none mb-2 text-lg placeholder:text-gray-600 focus:placeholder:text-opacity-0 w-full"
                  required
                />
                <input
                  type="url"
                  name="photoURL"
                  id="photoURL"
                  placeholder="Enter direct image URL (jpg, jpeg, png, gif, bmp)"
                  className="input bg-main bg-opacity-10 rounded-3xl border-none focus:outline-none mb-2 text-lg placeholder:text-gray-600 focus:placeholder:text-opacity-0 w-full"
                  required
                />
                <div className="flex flex-col relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input bg-main bg-opacity-10 rounded-3xl border-none focus:outline-none mb-2 text-lg w-full pr-10 placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                    required
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                <div className="flex relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="input bg-main bg-opacity-10 rounded-3xl border-none focus:outline-none mb-2 text-lg w-full pr-10 placeholder:text-gray-600 focus:placeholder:text-opacity-0"
                    required
                  />
                  {showConfirmPassword ? (
                    <FaEyeSlash
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowConfirmPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowConfirmPassword(true)}
                    />
                  )}
                </div>
                <div className="ml-3 my-2 flex items-center">
                  <input
                    type="checkbox"
                    name="termsandcon"
                    id="termsandcon"
                    className=" checkbox checkbox-sm checkbox-info mr-2"
                  />
                  <label htmlFor="termsandcon">
                    I agree to the{" "}
                    <Link to="/terms" className="text-main" target="_blank">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn bg-premium rounded-3xl border-none transition-all duration-300 cursor-pointer text-white dark:text-black
                  dark:hover:text-white capitalize text-xl hover:text-black"
                >
                  Register
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <span className="text-main">
                    <Link to="/login">Sign in</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
