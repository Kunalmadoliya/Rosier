import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const lapSlider = [
    {url: "/pic1.webp"},
    {url: "/khapli_square.webp"},
    {url: "/Web_Honey_Banner.webp"},
  ];

  const mobileSlider = [
    {url: "/3_Mobile_Banner.webp"},
    {url: "/mobile1.webp"},
    {url: "/Mobile_Banner-3.webp"},
  ];

  return (
    <div className="w-[90%] h-130 md:h-[400px] lg:h-[670px] rounded-3xl border-2 overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{clickable: true}}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="h-full rounded-xl"
      >
        {lapSlider.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.url}
              alt={`Slide ${index}`}
              className="h-full w-full object-center "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
