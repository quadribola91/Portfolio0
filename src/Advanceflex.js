import React from "react";
import H1 from "./pictures/Html1.png";
import H2 from "./pictures/Html2.png";
import C1 from "./pictures/Css1.png";
import C2 from "./pictures/Css2.png";
import J1 from "./pictures/Javascript1.png";
import J2 from "./pictures/Javascript2.png";
import T1 from "./pictures/Tailwind1.jpeg";
import T2 from "./pictures/Tailwind2.png";
import R1 from "./pictures/React1.jpeg";
import R2 from "./pictures/React2.png";

export default function Advanceflex() {
  return (
    <>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-6"
        id="careers"
      >
        <div className="bg-300">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={H1}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl justify-center"
              />

              <img
                src={H2}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl justify-center"
              />
            </div>
          </a>
        </div>
        <div className="bg-300">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={C1}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl"
              />

              <img
                src={C2}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl"
              />
            </div>
          </a>
        </div>
        <div className="bg-300">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={J1}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl"
              />

              <img
                src={J2}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl"
              />
            </div>
          </a>
        </div>
        <div className="bg-300">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={T1}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl"
              />

              <img
                src={T2}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl"
              />
            </div>
          </a>
        </div>
        <div className="bg-300">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={R1}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl object-fit"
              />

              <img
                src={R2}
                alt=""
                className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl object-fit"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
