import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const lapSlider = [
    {url: "/pic1.webp"},
    {url: "/khapli_new_1_copy (1).webp"},
    {url: "/Web_Honey_Banner.webp"},
  ];


  return (
    <div className="w-[98%] h-140 md:h-[400px] lg:h-[670px] rounded-xl border-2 overflow-hidden">
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
