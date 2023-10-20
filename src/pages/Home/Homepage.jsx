import {useContext, useEffect, useState} from "react";
import Testimonial from "./../../components/Testimonial/Testimonial";
import {BrandContext} from "../../context/BrandProvider";
import {Link} from "react-router-dom";
const Homepage = () => {
  const [miniLoading, setMiniLoading] = useState(true);
  const brands = useContext(BrandContext);
  useEffect(() => {
    brands.length > 0 ? setMiniLoading(false) : setMiniLoading(true);
  }, [brands]);
  
  useEffect(() => {
    setTimeout(() => {
      setMiniLoading(false);
    }, 5000);
  }, []);
  return (
    <section>
      {/* Banner Start */}

      <section className="overflow-hidden bg-[#ebedef] dark:bg-black sm:grid sm:grid-cols-2 lg:min-h-[35rem]">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left flex flex-col h-full justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-900 dark:text-white ">
              Your Tech
              <br /> Your Rules <br />
              Explore Endless Options Today!
            </h2>

            <p className="hidden text-gray-500 md:mt-5 md:block ">
              Don&#39;t Let Budget Limit Your Dreams. TechVenture Offers
              Cutting-Edge Tech at Prices You&#39;ll Love. Explore Affordable
              Excellence and Upgrade Your Lifestyle!
            </p>

            <div className="mt-4 md:mt-8">
              <button
                className="btn bg-premium rounded-3xl border-none transition-all duration-300 cursor-pointer text-black dark:text-white
                dark:hover:text-black capitalize text-xl hover:text-white"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <img
          alt="products"
          src="https://i.postimg.cc/TPhRvP7n/techventure-banner.jpg"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
      {/* Banner End */}
      {/* Featured Brands Start */}
      <section className="bg-white dark:bg-black">
        <div className="container mx-auto py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 lg:grid-cols-4 lg:gap-8 text-center">
            {miniLoading ? (
              <div className="md:ml-[22rem] lg:ml-[60rem]">
                <span className="loading loading-spinner loading-md md:loading-lg text-main"></span>
              </div>
            ) : (
              brands.map((brand) => (
                <Link
                  to={`/brand/${brand?.name}`}
                  key={brand._id}
                  className="flex rounded-3xl border border-gray-100 bg-white  w-64 shadow-xl h-32 flex-col justify-center items-center"
                >
                  <img
                    src={brand?.logo}
                    alt={brand?.name}
                    className="w-32 mt-5"
                  />

                  <h2 className="my-5 text-black uppercase">{brand?.name}</h2>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      {/* Featured Brands End */}
      {/* Stat Section Start */}
      <section className="bg-white dark:bg-black w-full">
        <div className="mx-auto container px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Trusted By Tech Enthusiasts Worldwide
            </h2>

            <p className="mt-4 text-gray-500 dark:text-white sm:text-xl">
              Experience Excellence, Explore Endless Possibilities
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-3xl border border-gray-100 dark:border-gray-500 bg-white dark:bg-black dark:bg-opacity-50  shadow-xl px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>

                <dd className="text-4xl font-extrabold text-primary md:text-5xl ">
                  $4.8m
                </dd>
              </div>

              <div className="flex flex-col rounded-3xl border border-gray-100 dark:border-gray-500 bg-white dark:bg-black dark:bg-opacity-50  shadow-xl px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Investors
                </dt>

                <dd className="text-4xl font-extrabold text-secondary md:text-5xl ">
                  500+
                </dd>
              </div>

              <div className="flex flex-col rounded-3xl border border-gray-100 dark:border-gray-500 bg-white dark:bg-black dark:bg-opacity-50  shadow-xl px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Users
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl ">
                  100,000+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* Stat Section End */}
      <Testimonial />
    </section>
  );
};

export default Homepage;
