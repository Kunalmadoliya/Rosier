import {Header, Slider, Marquee} from "../index";

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
    </>
  );
};

export default Home;
