"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules

import { Pagination } from "swiper/modules";

// Reviews Data

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Amir Al-Faris",
    job: "Software Engineer",
    review:
      "As a fellow software engineer, I can confidently say that the code quality here is top-notch. It's clean, well-structured, and optimized for both performance and scalability. The attention to detail in front-end development is exceptional, ensuring that every element functions seamlessly across different devices.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Layla Al-Hassan",
    job: "Graphic Designer",
    review:
      "Working with this developer has been an absolute pleasure. They’ve truly brought my designs to life, translating my creative concepts into functional, beautiful websites. The understanding of design principles is clear, and the ability to maintain a strong aesthetic while implementing functionality is impressive.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Zayd Al-Nasser",
    job: "Civil Engineer",
    review:
      "As a civil engineer, I appreciate the importance of precision and reliability. This developer’s approach to front-end development is no different – every project is executed with meticulous care, ensuring that the website functions flawlessly and performs well under pressure.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Salma Al-Karim",
    job: "Marketing Specialist",
    review:
      "From a marketing perspective, the websites built by this developer are highly effective in driving user engagement. The design is modern, the user experience is seamless, and the sites are optimized for search engines. They understand how to create a digital presence that not only looks great but also performs well.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Noor Al-Rahman",
    job: "Doctor",
    review:
      "The user interface and experience designed by this developer are incredibly intuitive and easy to navigate. Just like a well-organized healthcare system, the design of the websites ensures that users can find what they need without any frustration, offering a seamless experience for everyone.",
  },

  {
    avatar: "/reviews/avatar-6.png",
    name: "Yusuf Al-Mansour",
    job: "Architect",
    review:
      "Much like architecture, the process of building a website requires a strong foundation and creative vision. This developer excels at both. The websites they build are not only visually stunning but also highly functional, with responsive designs that adapt to all screen sizes, creating an exceptional user experience.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto px-8">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          className="h-[450px]"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt="Bin Magdi Work Reviews"
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
