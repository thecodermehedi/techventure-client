import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Loading from "../../components/Loading/Loading";

const Brandpage = () => {
  const {name} = useParams();
  const [loading, setLoading] = useState(true);
  const [brandProducts, setBrandProducts] = useState(null);
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    brand && brandProducts ? setLoading(false) : setLoading(true);
  }, [brand, brandProducts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://techventure-server.onrender.com/brands/${name}`
        );
        const data = await res.json();
        setBrand(data);

        const res2 = await fetch(
          `https://techventure-server.onrender.com/products/brand/${name}`
        );
        const data2 = await res2.json();
        setBrandProducts(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="bg-white dark:bg-black">
        <header>
          <Swiper
            centeredSlides={true}
            speed={1500}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero h-[30rem]">
                <img src={brand?.bannerOne} alt="banner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero h-[30rem]">
                <img src={brand?.bannerTwo} alt="banner" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero h-[30rem]">
                <img src={brand?.bannerThree} alt="banner" />
              </div>
            </SwiperSlide>
            ;
          </Swiper>
        </header>
        <div className="flex justify-center items-center bg-white dark:bg-black">
          <img src={brand?.logo} alt={brand?.name} className="w-32 my-5" />
        </div>
        <div className="container mx-auto flex justify-center items-center text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 place-items-center my-20 mx-5 lg:mx-0">
            {brandProducts &&
              brandProducts?.map((product) => (
                <div
                  key={product?._id}
                  className="card w-full md:card-side bg-[#ECEAE3] dark:bg-black border-2 border-transparent dark:border-white bg-opacity-50 "
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
                      <Link
                        className="border border-transparent py-2 px-4 w-full text-center capitalize rounded-3xl bg-blue-500 bg-opacity-20 hover:bg-blue-500 hover:text-black text-blue-500 hover:border-blue-500 font-semibold"
                        to={`/viewProduct/id/${product?._id}`}
                      >
                        details
                      </Link>
                      <Link
                        to={`/updateProduct/id/${product?._id}`}
                        className="border border-transparent py-2 px-4 w-full text-center capitalize rounded-3xl bg-green-500 bg-opacity-20 hover:bg-green-500 hover:text-black text-green-500 hover:border-green-500 font-semibold"
                      >
                        update
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Brandpage;