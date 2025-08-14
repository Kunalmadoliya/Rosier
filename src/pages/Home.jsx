import {Header, Slider, Marquee,Category} from "../index";

const Home = () => {
  return (
    <>
      <section>
        <div className="h-full w-full border-b-4">
          <div className=" flex flex-col items-center space-y-4">
            <Header />
            <Slider />
          </div>
          <div>
            <Marquee />
          </div>
        </div>
      </section>
      <Category/>
      <section>

      </section>
    </>
  );
};

export default Home;
