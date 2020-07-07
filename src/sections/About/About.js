import React from "react";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import strings from "../../en-NZ";
import recycledPlastic from "../../imgs/recycled-plastic.png";
import "./styles.scss";

const aboutContent = [
  strings.About.content.TheTiny,
  strings.About.content.CurrentlyGlobal,
  strings.About.content.UsingSmall,
];

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <ContentImageBlock
        title={strings.About.title}
        topcontent={aboutContent}
        img={recycledPlastic}
        imgalt="recycled-plastic"
      />
    </div>
  );
};

export default AboutSection;
