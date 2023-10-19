import {useParams} from "react-router-dom";
import {BrandContext} from "../../context/BrandProvider";
import {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
import { ProductContext } from "../../context/ProductProvider";

const Brandpage = () => {
  const {id} = useParams();
  const brands = useContext(BrandContext);
  const brand = brands?.find((brand) => brand?.name === id);
  const products = useContext(ProductContext);
  console.log(products);
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
              <img src={brand?.bannerOne} alt="banner" className=" " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero h-[30rem]">
              <img src={brand?.bannerTwo} alt="banner" className=" " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero h-[30rem]">
              <img src={brand?.bannerThree} alt="banner" className=" " />
            </div>
          </SwiperSlide>
          ;
        </Swiper>
      </header>
      <div className="flex justify-center items-center bg-white">
        <img src={brand?.logo} alt={brand?.name} className="w-32 my-5" />
      </div>
    </section>
  );
};

export default Brandpage;
