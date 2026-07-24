import React from "react";

const SoundFamiliarCard = ({ num, text }) => {
  return (
    <div
      className={`w-full lg:max-w-[306px] midlg:max-w-[406px] relative z-30 bg-white flex items-center gap-5 px-7 py-5 rounded-[16px] custom-shadow hover:scale-105 transition-all duration-300`}
    >
      <span className="red-text font-extrabold text-[36px]">{num}</span>
      <p className="text-sm leading-[1.35]">{text}</p>
    </div>
  );
};

export default SoundFamiliarCard;
