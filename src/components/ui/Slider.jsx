import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const imageSlider = [
    { url: "/pic1.webp" },
    { url: "/khapli_square.webp" },
    { url: "/Web_Honey_Banner.webp" },
  ];

  return (
    <div className="w-[90%] h-130 md:h-[400px] lg:h-[500px] rounded-3xl border-4 overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="h-full rounded-xl"
      >
        {imageSlider.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.url}
              alt={`Slide ${index}`}
              className="h-full w-full sm:object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
