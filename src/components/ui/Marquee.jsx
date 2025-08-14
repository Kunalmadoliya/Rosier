import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18, // Adjust for speed
        }}
      >
        {/* First copy */}
        <div className="relative   flex">
          <motion.span className="absolute inset-0 text-transparent font-[950] text-[90px] uppercase tracking-widest whitespace-nowrap [-webkit-text-stroke:8px_black]">
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
          <motion.span className="relative text-[#f5eedc] font-[950] text-[90px] uppercase tracking-widest whitespace-nowrap">
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
        </div>

        {/* Second copy for seamless loop */}
        <div className="relative flex">
          <motion.span className="absolute inset-0 text-transparent font-[950] text-[90px] uppercase tracking-widest whitespace-nowrap [-webkit-text-stroke:8px_black]">
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
          <motion.span className="relative text-[#f5eedc] font-[950] text-[90px] uppercase tracking-widest whitespace-nowrap">
            AMAZON · FLIPKART · Rosier · SWIGGY INSTAMART · BIGBASKET · Rosier &nbsp;
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
