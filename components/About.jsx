import DivImg from "./DivImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GarduationCap,
  Calender,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={24} />,
    text: "Bin Magdi",
  },
  {
    icon: <PhoneCall size={24} />,
    text: "+966 55 814 7884",
  },
  {
    icon: <MailIcon size={24} />,
    text: "binmagdi97@gmail.com",
  },
  {
    icon: <Calender size={24} />,
    text: "Born On 2 Aug, 1997",
  },
  {
    icon: <GarduationCap size={24} />,
    text: "Faculty of Commerce",
  },
  {
    icon: <HomeIcon size={24} />,
    text: "Based In Saudi Arabia ",
  },
  {
    icon: <Briefcase size={24} />,
    text: "Bin Magdi",
  },
];

const qualificationData = [
  // Education
  {
    title: "education",
    data: [
      {
        university: "Mansoura University",
        quakification: "Bachelor of Commerce",
        year: "2016 - 2020",
      },
    ],
  },
  // Experiences
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        quakification: "Front-end Developer",
        year: "2018 - 2020",
      },
      {
        company: "XYZ Company",
        quakification: "Software Engineer",
        year: "2021 - 2022",
      },
      {
        company: "Tech Company",
        quakification: "Lead Developer",
        year: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section>
      <div className="container mx-auto px-8">
        <h2 className="">About Me</h2>
      </div>
    </section>
  );
};

export default About;
