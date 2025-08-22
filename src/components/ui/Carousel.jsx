import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ products = [], perView = 3, title = "" }) {
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute hidden lg:block top-1/2 -right-4 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
    >
      <FaChevronRight size={28} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
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
    centerPadding: "20px",
    slidesToShow: perView,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: Math.min(perView, 3),
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: Math.min(perView, 2),
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative my-10">
      {title && <h2 className="text-center text-xl font-bold mb-6">{title}</h2>}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-white w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] rounded-xl border shadow-lg overflow-hidden mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-56 md:h-64 object-contain object-center"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-lg font-semibold">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-gray-600">₹{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-gray-600 line-through">
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
