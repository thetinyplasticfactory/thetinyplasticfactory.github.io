import React from "react";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import strings from "../../en-NZ";
import pot from "../../imgs/pot.jpg";
import "./styles.scss";

const salesContent = [
  strings.Sales.content.ManufacturingFrom,
  strings.Sales.content.RoughFlakes,
  strings.Sales.content.ForgetMinimum,
  strings.Sales.content.WantTo,
];

const SalesSection = () => {
  return (
    <div id="sales" className="sales-section">
      <ContentImageBlock
        title={strings.Sales.title}
        topcontent={salesContent}
        img={pot}
        imgalt="plastic-pieces"
      />
    </div>
  );
};

export default SalesSection;
