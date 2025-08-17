import { Container } from "../index";

const Category = () => {
  const miniLogos = [
    { name: "Pooja Essentials", url: "/Icon-01.avif" },
    { name: "Atta", url: "/Icon-02.webp" },
    { name: "A2 Ghee", url: "/Icon-03.webp" },
    { name: "Stone Pressed Oil", url: "/Icon-05.avif" },
    { name: "Immunity Booster", url: "/Icon-06.avif" },
    { name: "Healthy Breakfast", url: "/Icon-07.avif" },
  ];

  return (
    <Container>
      <div className="lg:space-y-10 space-y-3">
        {/* Heading */}
        <div className="w-full flex justify-center">
          <h1 className="text-3xl sm:text-base text-[var(--secondary-color)] lg:text-5xl py-10 font-bold">
            SHOP BY CATEGORY
          </h1>
        </div>

        {/* Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-3 px-2 lg:grid-cols-6 gap-8 lg:gap-10 text-center lg:w-full ">
          {miniLogos.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center ">
              <img
                src={item.url}
                alt={item.name}
                className="w-25 h-25 lg:w-78 lg:h-45 object-contain"
              />
              <p className="mt-3 text-sm sm:text-base lg:text-lg  text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Category;
