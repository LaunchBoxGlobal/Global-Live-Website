"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FooterLocations = () => {
  const [location, setLocation] = useState("US");
  const toggleLocation = (address) => {
    setLocation(address);
  };
  return (
    <section className="w-full flex items-start flex-col lg:flex-row gap-x-10 gap-y-6 padding-x mt-10">
      <div className="w-full lg:w-[45%]">
        <h3 className="mb-5 text-[28px] md:text-[40px] lg:text-[60px] leading-[1] text-center lg:text-start font-bold uppercase">
          serving businesses worldwide
        </h3>

        <div className="h-[42px] md:h-[48px] bg-[#2D2D2E] w-full midlg:max-w-[90%] rounded-full p-1 flex items-start justify-between gap-0 xl:gap-1 flex-wrap">
          <button
            type="button"
            name="United States location button"
            onClick={() => toggleLocation("US")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "US" && "bg-[#F40E00] text-white"
            }`}
          >
            US
          </button>
          <button
            type="button"
            name="United Kingdom location button"
            onClick={() => toggleLocation("UK")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "UK" && "bg-[#F40E00] text-white"
            }`}
          >
            UK
          </button>
          <button
            type="button"
            name="Canada location button"
            onClick={() => toggleLocation("Canada")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "Canada" && "bg-[#F40E00] text-white"
            }`}
          >
            CA
          </button>
          <button
            type="button"
            name="Australia location button"
            onClick={() => toggleLocation("Australia")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "Australia" && "bg-[#F40E00] text-white"
            }`}
          >
            AUS
          </button>
          <button
            type="button"
            name="UAE location button"
            onClick={() => toggleLocation("Dubai")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "Dubai" && "bg-[#F40E00] text-white"
            }`}
          >
            UAE
          </button>
          <button
            type="button"
            name="Qatar location button"
            onClick={() => toggleLocation("Qatar")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "Qatar" && "bg-[#F40E00] text-white"
            }`}
          >
            QA
          </button>
          <button
            type="button"
            name="Pakistan location button"
            onClick={() => toggleLocation("PK")}
            className={`px-2.5 lg:px-4 h-full text-xs midlg:text-base xl:text-lg font-semibold rounded-full ${
              location === "PK" && "bg-[#F40E00] text-white"
            }`}
          >
            PK
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start gap-4">
        {location === "US" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">United States</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={22}
                alt="location icon"
                loading="lazy"
              />
              <p className="text-lg">
                1621 Central Ave, Office 8945 Cheyenne, WY 82001
              </p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.736095640838!2d-104.8202268!3d41.140286700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3b6c6a259bcf%3A0xbc0e5572e518c7d3!2sLaunchBox%20Global!5e0!3m2!1sen!2s!4v1755853007038!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="LaunchBox global location in United States"
                title="LaunchBox global location in United States"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "Dubai" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">
                United Arab Emirates
              </h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">
                C1 building Dubai World Trade Center District - Sheikh Zayed Rd
                - Dubai
              </p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4666900878788!2d55.2855485!3d25.221201600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ec950232cd%3A0xae12478d4a0a631a!2sRegus%20-%20Dubai%2C%20DWTC%20District!5e0!3m2!1sen!2s!4v1742969728791!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global dubai location"
                title="launchbox global dubai location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "Qatar" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">Qatar</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">D Ring Road, 1st & 2nd Floors Doha</p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4142374388643!2d51.5498832!3d25.2566471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf9baed3703f%3A0xa8143369f5c97cd8!2sRegus%20-%20Doha%2C%20D%20Ring%20Road!5e0!3m2!1sen!2s!4v1742806375393!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global qatar location"
                title="launchbox global qatar location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "Canada" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">Canada</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">
                15 Wellesley Street West Toronto ON M4Y 0G7
              </p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2130129822112!2d-79.3854873!3d43.6645395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b3e6802d49%3A0x8f477f0874a8a039!2s15%20Wellesley%20St%20W%2C%20Toronto%2C%20ON%20M4Y%200G7%2C%20Canada!5e0!3m2!1sen!2s!4v1742806544834!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global canada location"
                title="launchbox global canada location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "UK" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">United Kingdom</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">4-4a Bloomsbury Square, London WC1A 2RP</p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.733428313943!2d-0.12269150000000001!3d51.5181064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b347ac2ad0d%3A0xe7ea8a5ea5d03628!2s4%20Bloomsbury%20Square%2C%20London%20WC1A%202RP%2C%20UK!5e0!3m2!1sen!2s!4v1742806613531!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global united kingdom location"
                title="launchbox global united kingdom location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "Australia" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">Australia</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">140 Bourke Street, Melbourne VIC 3000</p>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.055618970412!2d144.9689401!3d-37.8121662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c9a9b136b3%3A0x2cb03781df772d85!2s140%20Bourke%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1742806925543!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global australia location"
                title="launchbox global australia location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
        {location === "PK" && (
          <div className="w-full bg-[#2D2D2E] p-5 rounded-[25px] grid grid-cols-2 gap-5 min-h-[253px]">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h4 className="font-semibold text-lg mb-4">Pakistan</h4>
              <Image
                src={"/footer-location-icon.png"}
                width={17}
                height={19}
                loading="lazy"
                alt="location icon"
              />
              <p className="text-lg">
                Suite # 301, Emarah Suites, Sharah-e-Faisal Karachi
              </p>
              <div className="flex flex-col gap-1">
                <Link href={"tel:+922134522244"}>+92 21 345-222-44</Link>
                <Link href={"tel:+922134533344"}>+92 21 345-333-44</Link>
              </div>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.119303114809!2d67.05242059999999!3d24.8597746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa2b7b30a17%3A0x158ed1b3907f275c!2sEmarah%20Suites!5e0!3m2!1sen!2s!4v1742810189986!5m2!1sen!2s"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                name="launchbox global pakistan location"
                title="launchbox global pakistan location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FooterLocations;
