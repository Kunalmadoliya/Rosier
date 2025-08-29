import React from "react";
import {Container, ScrollAnimate} from "../index";

const Reviews = () => {
  return (
    <>
      <Container>
        <ScrollAnimate>
          <div className="h-100vh lg:p-8 px-5 border-2 my-8 w-full bg-[var(--primary-color)] rounded-2xl ">
            <div className=" flex justify-center items-center ">
              <h1 className="lg:text-7xl text-2xl w-280 font-extrabold py-5 lg:font-bold text-center  text-[var(--bg-dark-color)] stroke-text">
                MAKING OF ROSIER GIR COW VEDIC A2 GHEE
              </h1>
            </div>

            <div className="flex items-center h-130 lg:h-190 justify-center w-full mx-auto py-5 ">
              <video
                className="w-full h-full border object-cover rounded-2xl" // h-48 sets the height, adjust as needed
                autoPlay
                loop
                muted
                src="/13efe994c55741f19f7d39d83b20da85.SD-480p-1.2Mbps-54311062.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollAnimate>
      </Container>
    </>
  );
};

export default Reviews;
