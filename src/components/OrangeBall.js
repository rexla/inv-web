import React from "react";

const OrangeBall = ({ number }) => {
  return (
    <div className="bg-[#ED8936] absolute right-[-8px] top-[-8px] h-[24px] w-[24px] rounded-full text-center text-white">
      {number}
    </div>
  );
};

export default OrangeBall;
