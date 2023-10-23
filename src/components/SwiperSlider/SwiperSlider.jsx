import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
const SwiperSlider = () => {
  return (
    <>
      <section className="hidden lg:block " data-aos="fade-up">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[20rem]"
        >
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-3xl bg-white dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=sarah"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Sarah Miller
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Tech Enthusiast
              </p>
              <p className="text-gray-400 text-sm">
                TechVenture redefined my gadget experience! Their customer
                service is exceptional, and the products are top-notch. I&#39;ve
                never been happier with my tech purchases.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-3xl bg-white dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=david"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                David Lee
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                IT Professional
              </p>
              <p className="text-gray-400 text-sm">
                As an IT expert, I demand the best. TechVenture not only met but
                exceeded my expectations. Their devices are cutting-edge, and
                the support team is always ready to assist. Truly impressive!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-3xl bg-white dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=emily"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Emily Carter
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Digital Marketer
              </p>
              <p className="text-gray-400 text-sm">
                TechVenture isn&#39;t just a brand; it&#39;s a tech revolution.
                Their gadgets not only perform brilliantly but also add style to
                my digital life. I&#39;m now a loyal customer, thanks to their
                innovation!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-3xl bg-white dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Alex Johnson
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Entrepreneur
              </p>
              <p className="text-gray-400 text-sm">
                Investing in TechVenture was a game-changer for my business.
                Their tech solutions streamlined our operations, boosting
                productivity. I&#39;m grateful for their reliable products and
                forward-thinking approach.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="block lg:hidden ">
        <Swiper
          spaceBetween={10}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[21rem]"
        >
          <SwiperSlide>
            <div className="h-72 w-fit rounded-3xl bg-white dark:bg-black bg-opacity-50 p-5 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=sarah"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Sarah Miller
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Tech Enthusiast
              </p>
              <p className="text-gray-400 text-sm">
                TechVenture redefined my gadget experience! Their customer
                service is exceptional, and the products are top-notch. I&#39;ve
                never been happier with my tech purchases.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-72 w-fit rounded-3xl bg-white dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=david"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                David Lee
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                IT Professional
              </p>
              <p className="text-gray-400 text-sm">
                As an IT expert, I demand the best. TechVenture not only met but
                exceeded my expectations. Their devices are cutting-edge, and
                the support team is always ready to assist. Truly impressive!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-3xl bg-white  dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=emily"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Emily Carter
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Digital Marketer
              </p>
              <p className="text-gray-400 text-sm">
                TechVenture isn&#39;t just a brand; it&#39;s a tech revolution.
                Their gadgets not only perform brilliantly but also add style to
                my digital life. I&#39;m now a loyal customer, thanks to their
                innovation!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-72 w-fit rounded-3xl bg-white  dark:bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-black dark:text-slate-300 dark:border-transparent  shadow-xl ">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-black dark:text-slate-300">
                Alex Johnson
              </h1>
              <p className="text-[0.65rem] text-black dark:text-white text-opacity-60 mb-5">
                Entrepreneur
              </p>
              <p className="text-gray-400 text-sm">
                Investing in TechVenture was a game-changer for my business.
                Their tech solutions streamlined our operations, boosting
                productivity. I&#39;m grateful for their reliable products and
                forward-thinking approach.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperSlider;
