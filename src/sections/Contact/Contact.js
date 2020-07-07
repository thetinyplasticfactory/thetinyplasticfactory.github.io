import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import strings from "../../en-NZ";
import SocialsBlock from "../../components/SocialsBlock/SocialsBlock";
import "./styles.scss";

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
      <SocialsBlock />
    </div>
  );
};

export default ContactSection;
