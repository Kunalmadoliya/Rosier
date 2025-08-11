import React from "react";

const Container = ({childern}) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {childern}
    </div>
  );
};

export default Container;
