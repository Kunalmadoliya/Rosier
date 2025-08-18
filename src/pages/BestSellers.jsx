import { Carousel } from "../index";

const products = [
  {
    name: "Candle 1",
    price: "₹499",
    image: "/candle1.jpg",
  },
  {
    name: "Candle 2",
    price: "₹599",
    image: "/candle2.jpg",
  },
  {
    name: "Candle 3",
    price: "₹699",
    image: "/candle3.jpg",
  },
  {
    name: "Candle 4",
    price: "₹799",
    image: "/candle4.jpg",
  },
];

const BestSellers = () => {
  return (
    <div className="h-screen ">
      {/* Decorative Wave */}
      <div className="mt-15">
        <img src="/green_wave.png" alt="rosier-wave" />
      </div>

      {/* Best Sellers Section */}
      <div className="bg-[var(--primary-color)] h-full flex justify-center ">
        <div className="w-full max-w-7xl">
          <p className="p-10 text-2xl sm:text-base text-[var(--secondary-color)] lg:text-4xl py-15 font-bold text-center">
            BEST SELLERS
          </p>

          <div className="mt-5">

          <Carousel title="" products={products} perView={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
