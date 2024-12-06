"use client";

import {
  RiGithubFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/bomagdi",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.youtube.com/@real.binmagdi",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.instagram.com/sami.magdi/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.facebook.com/Real.ElDesouky/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
