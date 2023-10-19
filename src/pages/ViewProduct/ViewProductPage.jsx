import {useContext} from "react";
import {useParams} from "react-router-dom";
import {ProductContext} from "./../../context/ProductProvider";
import {AuthContext} from "../../context/AuthProvider";
import Swal from "sweetalert2";

const ViewProductPage = () => {
  const {id} = useParams();
  const products = useContext(ProductContext);
  const {user} = useContext(AuthContext);
  const product = products.find((product) => product._id === id);
  const addToUserProduct = () => {
    const userProduct = {
      email: user?.email,
      name: product?.name,
      brand: product?.brand,
      type: product?.type,
      price: product?.price,
      details: product?.details,
      photoURL: product?.photoURL,
      rating: product?.rating,
    };
    console.log(userProduct);
    fetch("https://techventure-server.onrender.com/userProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Product added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 flex justify-center items-center">
                <img src={product?.photoURL} className="object-cover w-64 " />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {product?.name}
                </h2>
                <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  ${product?.price}
                </p>
                <p className="max-w-md text-gray-700 dark:text-gray-400">
                  {product?.details}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={addToUserProduct}
                  className="w-full p-4 bg-premium rounded-3xl lg:w-2/5 dark:text-black dark:hover:text-gray-200 text-gray-50 hover:text-black"
                >
                  Add to cart
                </button>
                <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 hover:border-transparent rounded-3xl lg:w-2/5 dark:text-blue-500  hover-premium hover:text-black dark:hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProductPage;
