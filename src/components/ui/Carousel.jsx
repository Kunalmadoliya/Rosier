import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Carousel({products = [], perView = 3, title = ""}) {
  const NextArrow = ({onClick}) => (
    <button
      onClick={onClick}
      className="absolute hidden lg:block top-1/2 -right-15 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
    >
      <FaChevronRight size={28} /> {/* 👈 increase size here */}
    </button>
  );

  const PrevArrow = ({onClick}) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 hidden lg:block -left-15 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
    >
      <FaChevronLeft size={28} /> {/* 👈 increase size here */}
    </button>
  );

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: perView,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(perView, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      {title && <h2 className="text-center text-xl font-bold mb-6">{title}</h2>}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-10">
            <div className="bg-white  w-78 lg:w-89 rounded-xl border shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-78 lg:h-70 object-contain object-center mx-auto"
              />
              <div className="p-4 text-center">
                <h3 className=" text-md lg:text-lg font-semibold">{product.name}</h3>
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
