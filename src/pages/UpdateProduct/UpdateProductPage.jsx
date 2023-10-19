import {useContext, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {toast} from "sonner";
import Swal from "sweetalert2";
import {ProductContext} from "./../../context/ProductProvider";
const UpdateProductPage = () => {
  const {id} = useParams();
  const products = useContext(ProductContext);
  const product = products.find((product) => product._id === id);
  const [rating, setRating] = useState(product?.rating || 0);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const imageUrlRegex =
      /^(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\/\S*)?\.(jpg|jpeg|png|gif|bmp)$/;
    if (!imageUrlRegex.test(photoURL)) {
      toast.error("Invalid photo URL");
      return;
    }
    const updateProduct = {
      name,
      brand,
      type,
      price,
      details,
      rating,
      photoURL,
    };
    console.log(updateProduct);
    fetch(`https://techventure-server.onrender.com/products/id/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="min-h-fit bg-white dark:bg-black flow-root">
      <div className="flex flex-col w-fit max-w-7xl mx-auto py-10">
        <form
          onSubmit={handleUpdateProduct}
          className=" rounded-3xl border-main border-2 px-10 lg:px-28  pt-10 my-8 mx-5 md:mx-0"
        >
          <h1 className=" text-2xl md:text-3xl lg:text-5xl text-center font-bold  text-main font-rancho">
            Update Product
          </h1>
          <p className="text-black dark:text-white text-center my-5 text-opacity-70  md:text-base lg:text-lg">
            Explore the Future of Technology! Dive into our Latest Innovations
            and Upgrades, Redefining Convenience, Performance, and Style in
            Every Device. Stay Ahead with TechVenture&#39;s Cutting-Edge
            Offerings.
          </p>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block  text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full  text-black dark:text-white  rounded-3xl placeholder:text-gray-600 dark:placeholder:text-slate-300 focus:placeholder:text-opacity-0 dark:focus:placeholder:text-opacity-0 py-3 px-4 bg-main bg-opacity-10 focus:outline-none "
                id="name"
                type="text"
                defaultValue={product?.name}
                required
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className=" block text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="brand"
              >
                Brand
              </label>
              <select
                className="select w-full text-black dark:text-white rounded-3xl  py-3 px-4 bg-main bg-opacity-10 focus:outline-none"
                id="brand"
                defaultValue={product?.brand}
                required
              >
                <option
                  disabled
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Select Brand
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="apple"
                >
                  Apple
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="samsung"
                >
                  Samsung
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="sony"
                >
                  Sony
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="lg"
                >
                  LG
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="lenovo"
                >
                  Lenovo
                </option>
                <option
                  className="text-black dark:text-white bg-white dark:bg-black"
                  value="canon"
                >
                  Canon
                </option>
              </select>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="type"
              >
                Type
              </label>
              <select
                className="select w-full text-black dark:text-white rounded-3xl  py-3 px-4 bg-main bg-opacity-10 focus:outline-none"
                id="type"
                defaultValue={product?.type}
                required
              >
                <option
                  disabled
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Select Product type
                </option>
                <option
                  value="Smartphone"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Smartphone
                </option>
                <option
                  value="Laptop"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Laptop
                </option>
                <option
                  value="Tablet"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Tablet
                </option>
                <option
                  value="Earbuds"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Earbuds
                </option>
                <option
                  value="Camera"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Camera
                </option>
                <option
                  value="Headphones"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Headphones
                </option>
                <option
                  value="TV"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  TV
                </option>
                <option
                  value="Printer"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Printer
                </option>
                <option
                  value="Monitor"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  Monitor
                </option>
                <option
                  value="HardDrive"
                  className="text-black dark:text-white bg-white dark:bg-black"
                >
                  HardDrive
                </option>
              </select>
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className=" block text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className=" w-full  text-black dark:text-white rounded-3xl placeholder:text-gray-600 dark:placeholder:text-slate-300 focus:placeholder:text-opacity-0 dark:focus:placeholder:text-opacity-0 py-3 px-4 bg-main bg-opacity-10 focus:outline-none  placeholder:"
                id="price"
                type="number"
                defaultValue={product?.price}
                required
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block  text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="category"
              >
                Rating
              </label>
              <div className="rating rating-md lg:rating-lg">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <input
                    key={value}
                    type="radio"
                    name="rating-7"
                    value={value}
                    className="mask mask-star-2 bg-main"
                    onChange={handleRatingChange}
                    checked={rating === value}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className=" block text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="details"
              >
                Details
              </label>
              <input
                className=" w-full  text-black dark:text-white rounded-3xl placeholder:text-gray-600 dark:placeholder:text-slate-300 focus:placeholder:text-opacity-0 dark:focus:placeholder:text-opacity-0 py-3 px-4 bg-main bg-opacity-10 focus:outline-none "
                id="details"
                type="text"
                defaultValue={product?.details}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className=" block text-black dark:text-white text-xl text-opacity-80  font-semibold mb-2"
                htmlFor="photoURL"
              >
                Photo
              </label>
              <input
                className=" w-full  text-black dark:text-white rounded-3xl placeholder:text-gray-600 dark:placeholder:text-slate-300 focus:placeholder:text-opacity-0 dark:focus:placeholder:text-opacity-0 py-3 px-4 bg-main bg-opacity-10 focus:outline-none "
                id="photoURL"
                type="url"
                defaultValue={product?.photoURL}
                required
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <button
                className="btn bg-premium rounded-3xl border-none transition-all duration-300 cursor-pointer text-white dark:text-black
                  dark:hover:text-white capitalize text-xl hover:text-black w-full"
              >
                Update Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPage;
