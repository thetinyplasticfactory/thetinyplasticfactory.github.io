import React from "react";
import ImagesBlock from "../../components/ImagesBlock/ImagesBlock";
import "./styles.scss";
import strings from "../../en-NZ";
import BTFW from "../../imgs/partners/BTFW.png";
import paperkite from "../../imgs/partners/paperkite.png";
import sharesies from "../../imgs/partners/sharesies.png";
import springload from "../../imgs/partners/springload.png";
import sustrust from "../../imgs/partners/sus-trust.png";
import wellyapoth from "../../imgs/partners/wellington-apothecary.png";
import sportsnz from "../../imgs/partners/Sport-nz.png";
import myride from "../../imgs/partners/my-ride.png";
import endgame from "../../imgs/partners/EndGame.png";
import switchedonbikes from "../../imgs/partners/switched-on-bikes.png";

const partnersimgs = [
  {
    img: paperkite,
    alt: "PaperKite",
    link: "https://www.paperkite.co.nz/",
  },
  {
    img: sharesies,
    alt: "Sharesies",
    link: "https://www.sharesies.nz/",
  },
  {
    img: wellyapoth,
    alt: "Wellington Apothecary",
    link: "http://www.wellingtonapothecary.co.nz/",
  },
  {
    img: sustrust,
    alt: "Sustainability Trust",
    link: "https://sustaintrust.org.nz/",
  },
  {
    img: BTFW,
    alt: "Bread Tags for Wheelchairs",
    link: "https://breadtagsforwheelchairs.co.za/",
  },
  {
    img: springload,
    alt: "Springload",
    link: "https://www.springload.co.nz/",
  },
  {
    img: sportsnz,
    alt: "Wellington Southern Community Laboratory",
    link: "https://www.wellingtonscl.co.nz/",
  },
  {
    img: myride,
    alt: "My Ride Wellington",
    link: "https://www.myride.co.nz/wellington/",
  },
  {
    img: switchedonbikes,
    alt: "Switched On Bikes",
    link: "https://switchedonbikes.co.nz/",
  },
  {
    img: endgame,
    alt: "EndGame",
    link: "https://www.end-game.com/",
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
