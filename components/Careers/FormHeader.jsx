import React from "react";

const FormHeader = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-black">Basic Details</h2>
      <p className="text-gray-500 text-sm mb-6">
        Fields marked with <span className="text-red-500">*</span> are required.
      </p>
    </div>
  );
};

export default FormHeader;
