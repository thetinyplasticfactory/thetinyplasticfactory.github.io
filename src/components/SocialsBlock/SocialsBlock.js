import React from "react";
import ImagesBlock from "../../components/ImagesBlock/ImagesBlock";
import facebook from "../../imgs/facebook.svg";
import instagram from "../../imgs/instagram.svg";

const socialLinks = [
  {
    img: facebook,
    alt: "facebook",
    link: "http://facebook.com/thetinyplasticfactory/",
  },
  {
    img: instagram,
    alt: "instagram",
    link: "https://instagram.com/the.tiny.plastic.factory/",
  },
];
const socialsBlock = () => {
  return (
    <ImagesBlock
      imgs={socialLinks}
      withLinks={true}
      id="socials"
      size="small"
    />
  );
};

export default socialsBlock;
