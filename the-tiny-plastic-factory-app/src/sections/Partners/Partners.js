import React from "react";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import strings from "../../en-NZ";
import recycledPlastic from "../../imgs/recycled-plastic.png";
//TODO import sponsors imgs
//TODO put them in an array with alt-text
//TODO pop them in an imgblock

// const partnersimgs = [
//   { img: hdpe, alt: "hdpe" },
//   { img: ldpe, alt: "ldpe" },
//   { img: pp, alt: "pp" },
// ];

const partnersContent = () => {};

const PartnersSection = () => {
  return (
    <ContentBlock
      id="about"
      title={strings.Partners.title}
      content={partnersContent}
    />
  );
};

export default PartnersSection;
