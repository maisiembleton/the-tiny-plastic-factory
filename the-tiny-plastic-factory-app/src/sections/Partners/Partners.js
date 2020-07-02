import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import strings from "../../en-NZ";
//TODO import sponsors imgs
//TODO put them in an array with alt-text
//TODO pop them in an imgblock

// const partnersimgs = [
//   { img: hdpe, alt: "hdpe" },
//   { img: ldpe, alt: "ldpe" },
//   { img: pp, alt: "pp" },
// ];

const partnersContent = [
    {}
];

const PartnersSection = () => {
  return (
    <ContentBlock
      id="about"
      title={strings.Partners.title}
      content={partnersContent}
      withLinks={true}
    />
  );
};

export default PartnersSection;
