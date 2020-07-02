import React from "react";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import strings from "../../en-NZ";
import plasticPieces from "../../imgs/plastic-pieces.png";

const salesContent = [
  strings.Sales.content.ManufacturingFrom,
  strings.Sales.content.RoughFlakes,
  strings.Sales.content.ForgetMinimum,
  strings.Sales.content.WantTo,
];

const SalesSection = () => {
  return (
    <ContentImageBlock
      id="sales"
      title={strings.Sales.title}
      topcontent={salesContent}
      img={plasticPieces}
      imgalt="plastic-pieces"
    />
  );
};

export default SalesSection;
