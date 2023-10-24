import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthProvider";
import Swal from "sweetalert2";

const MyCartPage = () => {
  const {user} = useContext(AuthContext);
  const {email} = user;
  const [loadedUserProducts, setLoadedUserProducts] = useState(null);
  const [userProducts, setUserProducts] = useState(loadedUserProducts);

  useEffect(() => {
    const fetchUserProduct = async () => {
      const res = await fetch(
        `https://techventure-server.onrender.com/userProducts/${email}`
      );
      const data = await res.json();
      setLoadedUserProducts(data);
      setUserProducts(data);
    };
    fetchUserProduct();
  }, [email]);

  const handleProductDelete = (id) => {
    fetch(
      `https://techventure-server.onrender.com/userProducts/${email}/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Product removed successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          const remaining = userProducts.filter(
            (product) => product?._id !== id
          );
          setUserProducts(remaining);
        }
      });
  };

  return (
    <section className="min-h-screen  bg-[#ebedef] dark:bg-black flow-root">
      <div className="container mx-auto flex justify-center items-center text-center min-h-screen lg:min-h-[35rem]">
        {userProducts?.length <= 0 ? (
          <h2 className="text-2xl font-bold text-red-500">
            Your Cart is Empty
          </h2>
        ) : (
          <>
            <header className="flex justify-center items-center text-center my-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500">
                Shopping Cart <br /> ( {userProducts?.length} )
              </h2>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 place-items-center mb-20 mx-5 lg:mx-0">
              {userProducts?.map((product) => (
                <div
                  key={product?._id}
                  className="card w-full md:card-side bg-white dark:bg-[#181A1B] shadow-xl rounded-3xl "
                >
                  <figure className="h-auto overflow-hidden md:w-96 md:h-64 object-contain">
                    <img
                      src={product?.photoURL}
                      alt="product"
                      className="p-5 transition-all duration-500 hover:scale-110 w-44"
                    />
                  </figure>
                  <div className="w-full flex flex-col md:flex-row justify-between items-center text-left  p-5">
                    <div className="text-black dark:text-white">
                      <h2>
                        <span className="font-semibold">Name: </span>
                        {product?.name}
                      </h2>
                      <h2 className="capitalize">
                        <span className="font-semibold">Brand: </span>
                        {product?.brand}
                      </h2>
                      <h2>
                        <span className="font-semibold">Type: </span>
                        {product?.type}
                      </h2>
                      <h2>
                        <span className="font-semibold">Price: </span>
                        {product?.price} USD
                      </h2>
                      <h2>
                        <span className="font-semibold">Rating: </span>
                        {product?.rating}/10
                      </h2>
                    </div>
                    <div className="flex my-5 md:my-0 md:flex-col justify-center items-center gap-4">
                      <button
                        onClick={() => handleProductDelete(product?._id)}
                        className="border border-transparent py-2 px-4 w-full text-center capitalize rounded-3xl bg-red-500 bg-opacity-20 hover:bg-red-500 hover:text-black text-red-500 hover:border-red-500 font-semibold transition duration-300 ease-in-out"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default MyCartPage;
