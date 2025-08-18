
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ products = [], perView = 3, title = "" }) {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: perView,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: Math.min(perView, 2),
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container ">
      {title && <h2 className="text-center text-xl font-bold mb-6">{title}</h2>}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-78 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
