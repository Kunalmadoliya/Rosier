import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Carousel({products = [], perView = 3, title = ""}) {
  const NextArrow = ({onClick}) => (
    <button
      onClick={onClick}
      className="absolute hidden lg:block top-1/2 -right-4 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
    >
      <FaChevronRight size={28} />
    </button>
  );

  const PrevArrow = ({onClick}) => (
    <button
      onClick={onClick}
      className="absolute hidden lg:block top-1/2 -left-4 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
    >
      <FaChevronLeft size={28} />
    </button>
  );

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: perView,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: Math.min(perView, 4),
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: Math.min(perView, 2),
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // md (tablet)
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 640, // sm (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative my-10">
      {title && <h2 className="text-center text-xl font-bold mb-6">{title}</h2>}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-5 sm:px-4">
            <div className="bg-white py-1 h-90 w-70 lg:w-90 rounded-xl border shadow-lg overflow-hidden mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full lg:h-68  py-2 md:h-64 lg:object-contain object-center"
              />
              <div className=" text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-gray-600">₹{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-500 line-through">
                      ₹{product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
