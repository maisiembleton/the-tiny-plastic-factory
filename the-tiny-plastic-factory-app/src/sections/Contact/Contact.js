import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import strings from "../../en-NZ";
import ImagesBlock from "../../components/ImagesBlock/ImagesBlock";

//TODO: icons
// const socialLinks = [
//     {img:}
// ]

const ContactSection = () => {
  //   const contactcontent = () => {
  //     return (
  //       <div className="contact-content">
  //         <p>{strings.Contact.content.ForBusiness}</p>
  //         <p>{strings.Contact.content.Email}</p>
  //         {/* <ImagesBlock /> */}
  //       </div>
  //     );
  //   };

  return (
    <ContentBlock
      id="contact"
      title={strings.Contact.title}
      subtitle={strings.Contact.subtitle}
      //   content={contactcontent}
    />
  );
};

export default ContactSection;
