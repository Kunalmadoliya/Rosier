import {
  Header,
  Slider,
  Marquee,
  Category,
  BestSellers,
  ScrollFloat,
  ScrollReveal,
  Reviews,
} from "../index";

const Home = () => {
  return (
    <>
      <section>
        <div className="h-full w-full border">
          <div className=" flex lg:h-screen flex-col items-center space-y-2 lg:space-y-2">
            <Header />
            <Slider />
          </div>
          <div>
            <Marquee />
          </div>
        </div>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <BestSellers />
      </section>
      <section>
        <Reviews />
      </section>
    </>
  );
};

export default Home;
