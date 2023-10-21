import SwiperSlider from "./../SwiperSlider/SwiperSlider";

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-[#181A1B] p-5 md:p-10 lg:p-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-5 ">
        Transforming Lives, One Gadget at a Time
      </h1>
      <p className="text-black dark:text-slate-300 text-opacity-50  md:text-lg  w-80 md:w-full mb-5 ">
        Real Stories, Real Impact: See What Our Customers Have to Say
      </p>
      <SwiperSlider />
    </section>
  );
};

export default Testimonial;
