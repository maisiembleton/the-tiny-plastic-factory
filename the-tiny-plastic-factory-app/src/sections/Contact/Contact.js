import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import strings from "../../en-NZ";
import ImagesBlock from "../../components/ImagesBlock/ImagesBlock";
import facebook from "../../imgs/facebook.svg";
import instagram from "../../imgs/instagram.svg";
import "./styles.scss";

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

const contactcontent = [
  strings.Contact.content.ForBusiness,
  strings.Contact.content.Email,
];

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <ContentBlock
        title={strings.Contact.title}
        subtitle={strings.Contact.subtitle}
        content={contactcontent}
      />

      <ImagesBlock imgs={socialLinks} withLinks={true} id="socials" />
    </div>
  );
};

export default ContactSection;
