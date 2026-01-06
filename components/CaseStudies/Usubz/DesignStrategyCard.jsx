import React from "react";

const DesignStrategyCard = ({ design, index }) => {
  return (
    <div
      className={`w-full max-w-[394px] min-h-[182px] bg-[#6EF0B2] flex flex-col items-start justify-center gap-2 p-6 z-10 text-white rounded-[40px]`}
    >
      <h3 className="text-lg font-bold leading-none">{design?.title}</h3>
      <p className="text-lg leading-[1.2]">{design?.description}</p>
    </div>
  );
};

export default DesignStrategyCard;
