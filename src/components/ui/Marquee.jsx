import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden mt-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // smoother for big text
        }}
      >
        {/* First copy */}
        <div className="relative flex">
          <motion.span
            className="absolute inset-0 text-transparent font-[950] 
              text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[100px]
              uppercase tracking-widest whitespace-nowrap 
              [-webkit-text-stroke:2px_black] sm:[-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] lg:[-webkit-text-stroke:6px_black]"
          >
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
          <motion.span
            className="relative text-[#f5eedc] font-[950] 
              text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[100px]
              uppercase tracking-widest whitespace-nowrap"
          >
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
        </div>

        {/* Second copy */}
        <div className="relative flex">
          <motion.span
            className="absolute inset-0 text-transparent font-[950] 
              text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[100px]
              uppercase tracking-widest whitespace-nowrap 
              [-webkit-text-stroke:2px_black] sm:[-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] lg:[-webkit-text-stroke:6px_black]"
          >
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
          <motion.span
            className="relative text-[#f5eedc] font-[950] 
              text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[100px]
              uppercase tracking-widest whitespace-nowrap"
          >
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
