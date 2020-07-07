import React from "react";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import strings from "../../en-NZ";
import smiling from "../../imgs/smiling.png";
import hdpe from "../../imgs/hdpe2.png";
import ldpe from "../../imgs/ldpe4.png";
import pp from "../../imgs/pp5.png";
import "./styles.scss";

const topCollectionsContent = [
  strings.Collections.content.WeCollectUsed,
  strings.Collections.content.WeCollectOn,
  strings.Collections.content.WeCurrently,
  strings.Collections.content.ThisTypically,
];

const bottomCollectionsContent = [
  strings.Collections.content.WeTrack,
  strings.Collections.content.WantYour,
];

const collectionsimgs = [
  { img: hdpe, alt: "hdpe" },
  { img: ldpe, alt: "ldpe" },
  { img: pp, alt: "pp" },
];

const CollectionsSection = () => {
  return (
    <div id="collections" className="collections-section">
      <ContentImageBlock
        title={strings.Collections.title}
        topcontent={topCollectionsContent}
        bottomcontent={bottomCollectionsContent}
        img={smiling}
        imgalt="shaking-hands-smiling"
        imgblock={collectionsimgs}
      />
    </div>
  );
};

export default CollectionsSection;
