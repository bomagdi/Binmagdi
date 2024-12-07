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
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto px-8">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DivImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">Personal Info</TabsContent>
                <TabsContent value="qualifications">Qualifications Info</TabsContent>
                <TabsContent value="skills">Skills Info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
