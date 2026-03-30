import React from "react";
import ContactSection from "../components/ContactSection.jsx";
import Breadcrumb from "../components/Breadcrumb";
import { contact } from "../../constants/contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb />
      <ContactSection phone={contact.phone} email={contact.email} />
    </>
  );
};

export default ContactPage;
