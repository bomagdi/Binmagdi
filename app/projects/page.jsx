"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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

const uniqueCategories = [
  "all projects",
  ...new Set(projctsData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projctsData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto px-8">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
