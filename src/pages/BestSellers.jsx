import {Carousel, CurvedLoop, ScrollAnimate} from "../index";

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
    <ScrollAnimate>
      <div className="h-auto">
        {/* Top decorative wave */}
        <div className="mt-[60px]">
          <img src="/green_wave.png" alt="rosier-wave" className="w-full" />
        </div>

        {/* Best sellers section */}
        <div className="bg-[var(--primary-color)]  h-138 lg:h-full flex justify-center ">
          <div className="w-full max-w-7xl py-12">
            <p className="text-center text-[var(--secondary-color)] font-bold text-3xl lg:text-[2.7rem]">
              BEST SELLERS
            </p>

            {/* Carousel */}
            <Carousel  products={products} />

            {/* Button */}
            <div className="w-full flex items-center justify-center  h-5 lg:h-10">
              <button className=" px-8 py-4 rounded-full cursor-pointer text-white bg-[var(--secondary-color)] hover:scale-105 transition-transform">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>

        {/* Curved marquee banner */}
        <div className="bg-[var(--secondary-color)] py-10 h-5 lg:h-25 lg:py-2">
          <CurvedLoop
            marqueeText="THE TASTE OF NATURE ✦ IT'S FRESH ✦ WE ARE REVIVING THE TRADITION ✦"
            speed={0.8}
            curveAmount={0}
            direction="right"
            variant="arc"
            className="fill-white text-[15rem] md:text-[4rem]  font-semibold tracking-wide"
          />
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default BestSellers;
