import React from "react";
import ImagesBlock from "../../components/ImagesBlock/ImagesBlock";
import "./styles.scss";
import strings from "../../en-NZ";
import BTFW from "../../imgs/partners/BTFW.png";
import homehopper from "../../imgs/partners/home-hopper.png";
import paperkite from "../../imgs/partners/paperkite.png";
import remix from "../../imgs/partners/remix.png";
import sharesies from "../../imgs/partners/sharesies.png";
import springload from "../../imgs/partners/springload.png";
import sustrust from "../../imgs/partners/sus-trust.png";
import wellyapoth from "../../imgs/partners/wellington-apothecary.png";
import retrogrove from "../../imgs/partners/retrogrove.png";

//TODO add retrogrove

const partnersimgs = [
  {
    img: paperkite,
    alt: "home-hopper",
    link: "https://www.hopper.nz/",
  },
  {
    img: remix,
    alt: "remix-plastic",
    link: "https://remixplastic.com/",
  },

  {
    img: homehopper,
    alt: "home-hopper",
    link: "https://www.hopper.nz/",
  },
  {
    img: sharesies,
    alt: "sharesies",
    link: "https://www.sharesies.nz/",
  },
  {
    img: wellyapoth,
    alt: "wellington-apothecary",
    link: "http://www.wellingtonapothecary.co.nz/",
  },
  {
    img: sustrust,
    alt: "sustainability-trust",
    link: "https://sustaintrust.org.nz/",
  },
  {
    img: BTFW,
    alt: "bread-tags-for-wheelchairs",
    link: "https://breadtagsforwheelchairs.co.za/",
  },
  {
    img: springload,
    alt: "springload",
    link: "https://www.springload.co.nz/",
  },
  {
    img: retrogrove,
    alt: "retrogrove",
    link: "https://goo.gl/maps/T9yUGWgdZZsTRDee6",
  },
];

const PartnersSection = () => {
  return (
    <div className="partners-section">
      <ImagesBlock
        id="partners"
        title={strings.Partners.title}
        imgs={partnersimgs}
        withLinks={true}
        size="large"
      />
    </div>
  );
};

export default PartnersSection;
