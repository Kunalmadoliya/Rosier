import {Carousel} from "../index";

const products = [
  {
    image: "/rosierCarousel.webp",
    name: "Gir Cow A2 Ghee - Made From Curd",
    rating: 4.9,
    reviews: "5 Star",
    price: 1350.0,
    oldPrice: null,
  },
  {
    image: "/khapliCarousel.webp",
    name: "Khapli (Emmer) Wheat Atta",
    rating: 4.59,
    reviews: "5 Star",
    price: 469.0,
    oldPrice: 499.0,
  },
  {
    image: "/honey500front.webp",
    name: "Wild Forest Honey",
    rating: 4.63,
    reviews: "5 Star",
    price: 499.0,
    oldPrice: 589.0,
  },
  {
    image: "/oilCarousel.webp",
    name: "Stone Pressed Black Mustard Oil",
    rating: 4.9,
    reviews: "5 Star",
    price: 390.0,
    oldPrice: null,
  },
];

const BestSellers = () => {
  return (
    <div className="h-screen">
      {/* Decorative Wave */}
      <div className="mt-15">
        <img src="/green_wave.png" alt="rosier-wave" />
      </div>
      {/* Best Sellers Section */}
      <div className="bg-[var(--primary-color)] h-full flex  justify-center  ">
        <div className="w-full max-w-7xl mt-15">
          <p className=" text-3xl sm:text-base text-[var(--secondary-color)] lg:text-[2.7rem] flex items-center justify-center font-bold ">
            BEST SELLERS
          </p>
          <Carousel title="" products={products} perView={3} />
        </div>
      </div>
      
    </div>
  );
};

export default BestSellers;
