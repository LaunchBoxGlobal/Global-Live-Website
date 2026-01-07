"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const positions = [
  "far-left",
  "slideleft",
  "slidecenter",
  "slideright",
  "far-right",
];

const ImageSlider = ({ images }) => {
  const [order, setOrder] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift()); // rotate
        return newOrder;
      });
    }, 3000); // animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="relative h-[350px] md:h-[620px] overflow-hidden">
        {order?.map((src, index) => (
          <Image
            key={src}
            src={src}
            width={800}
            height={600}
            className={`jetezee-slider-image ${positions[index]}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
