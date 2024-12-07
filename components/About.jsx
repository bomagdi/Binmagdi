import DivImg from "./DivImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
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
    icon: <Calendar size={24} />,
    text: "Born On 2 Aug, 1997",
  },
  {
    icon: <GraduationCap size={24} />,
    text: "Faculty of Commerce",
  },
  {
    icon: <HomeIcon size={24} />,
    text: "Based In Saudi Arabia ",
  },
  {
    icon: <MailIcon size={24} />,
    text: "binmagdi97@gmail.com",
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
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Your Vision, My Creation</h3>

                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      "I am a passionate front-end developer dedicated to
                      creating visually stunning and user-friendly web
                      experiences. With a keen eye for detail and a love for
                      clean code, I turn ideas into digital realities."
                    </p>
                    {/* ICons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Arabic, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education */}
                    <div>
                      {/* Experience */}
                      <div>
                        <div>
                          <Briefcase />
                          <div className="">
                            {getData(qualificationData, "experience").title}
                          </div>
                        </div>
                      </div>
                      {/* Education */}
                      <div>Education</div>
                    </div>
                  </div>
                </TabsContent>
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
