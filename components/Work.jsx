"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules

import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";

const projctsData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "PixelCrafted  website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "QuantumNest  website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "EchoSphere website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "NovaHaven website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "OrbitFlow website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "TwilightCanvas website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi at, impedit pariatur magnam magni in veritatis itaque voluptatum odit.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto px-8">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis!
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[550px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 items for the slides */}
            {projctsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
