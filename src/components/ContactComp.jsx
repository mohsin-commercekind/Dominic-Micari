import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../../constants/contact";
import { theme } from "../../constants/theme";
import LogoWebsite from "/assets/images/website-logo.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // simple, no-email logic: prevent refresh and log the values
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data (no email sending):", formData);
  };

  return (
    <div
      className="max-w-[1920px] mx-auto py-10 px-5"
      style={{
        fontFamily: theme.fonts.body,
        color: theme.colors.primary,
      }}
    >
      <div className="flex gap-2.5 flex-1 mx-auto justify-center max-lg:flex-col">
        {/* Left panel */}
        <div
          className="text-white py-12 px-10 min-h-[600px] relative overflow-hidden bg-gray-200"
          style={{
            borderRadius: "60px",
            backgroundColor: theme.colors.secondary,
          }}
        >
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: theme.colors.primary }}>Get in</span>{" "}
            <span style={{ color: "white" }}>Touch</span>
          </h2>

          {/* Description */}
          <p
            className="text-white mb-4"
            style={{ fontFamily: theme.fonts.body }}
          >
            Have questions or need assistance? Our team is here to help <br />
            and provide prompt support. Reach out to us and we'll ensure <br />{" "}
            your inquirie are addressed quickly and efficiently.
          </p>

          <div className="mb-12">
            {contact.contactInfo.details.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2.5">
                  {item.icon === "phone" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                      style={{ color: theme.colors.primary }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  )}
                  {/* {item.icon === "email" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                      style={{ color: theme.colors.primary }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  )} */}
                  {item.icon === "headphones" && (
                    <FontAwesomeIcon
                      icon={faHeadphones}
                      className="text-2xl"
                      style={{ color: theme.colors.primary }}
                    />
                  )}
                </div>
                <span
                  className="text-xl"
                  style={{ fontFamily: theme.fonts.body, color: "white" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-start flex-col gap-3">
            {contact.contactInfo.features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: theme.colors.secondary,
                    color: theme.colors.bg,
                  }}
                >
                  <FontAwesomeIcon
                    icon={feature.icon === "bolt" ? faBolt : faHeadphones}
                  />
                </div>
                <div className="feature-text">
                  <h4
                    className="text-lg font-semibold mb-2 text-slate-800"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-sm leading-6 m-0 text-slate-800"
                    style={{ fontFamily: theme.fonts.heading }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="py-20 px-12">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 mb-5 max-md:flex-col">
              <div className="flex-1 mb-5">
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-[22px] font-medium text-slate-800"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {contact.form.fields.firstName.label}
                </label>
                <input
                  type={contact.form.fields.firstName.type}
                  id="firstName"
                  name="firstName"
                  placeholder={contact.form.fields.firstName.placeholder}
                  value={formData.firstName}
                  onChange={handleChange}
                  required={contact.form.fields.firstName.required}
                  className="py-3 px-4 w-full text-lg outline-none transition-all duration-300 border-0 border-b border-solid border-slate-800"
                />
              </div>
              <div className="flex-1 mb-5">
                <label
                  htmlFor="lastName"
                  className="block mb-1 text-[22px] font-medium text-slate-800"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {contact.form.fields.lastName.label}
                </label>
                <input
                  type={contact.form.fields.lastName.type}
                  id="lastName"
                  name="lastName"
                  placeholder={contact.form.fields.lastName.placeholder}
                  value={formData.lastName}
                  onChange={handleChange}
                  required={contact.form.fields.lastName.required}
                  className="py-3 px-4 w-full text-lg outline-none transition-all duration-300 border-0 border-b border-solid border-slate-800"
                />
              </div>
            </div>

            <div className="flex gap-5 mb-5 max-md:flex-col">
              <div className="flex-1 mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 text-[22px] font-medium text-slate-800"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {contact.form.fields.email.label}
                </label>
                <input
                  type={contact.form.fields.email.type}
                  id="email"
                  name="email"
                  placeholder={contact.form.fields.email.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  required={contact.form.fields.email.required}
                  className="py-3 px-4 w-full text-lg outline-none transition-all duration-300 border-0 border-b border-solid border-slate-800"
                />
              </div>
              <div className="flex-1 mb-5">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 text-[22px] font-medium text-slate-800"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {contact.form.fields.phoneNumber.label}
                </label>
                <input
                  type={contact.form.fields.phoneNumber.type}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder={contact.form.fields.phoneNumber.placeholder}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="py-3 px-4 w-full text-lg outline-none transition-all duration-300 border-0 border-b border-solid border-slate-800"
                />
              </div>
            </div>

            <div className="flex-1 mb-5">
              <label
                htmlFor="message"
                className="block mb-1 text-[22px] font-medium text-slate-800"
                style={{ fontFamily: theme.fonts.body }}
              >
                {contact.form.fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={contact.form.fields.message.placeholder}
                value={formData.message}
                onChange={handleChange}
                required={contact.form.fields.message.required}
                className="py-3 px-4 w-full text-lg outline-none transition-all duration-300 border-0 border-b border-solid resize-none overflow-y-hidden border-slate-800"
              ></textarea>
            </div>

            <div className="text-center max-md:text-center">
              <button
                type="submit"
                className="border-2 py-6 px-19 text-base rounded-[20px] cursor-pointer font-medium transition-all duration-300 hover:bg-white max-md:py-5 max-md:px-14 max-md:whitespace-nowrap max-sm:py-4 max-sm:px-10"
                style={{
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.primary,
                  boxShadow: "0 5px 5px 0 rgba(66, 133, 244, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = theme.colors.secondary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    theme.colors.secondary;
                  e.currentTarget.style.color = theme.colors.primary;
                }}
              >
                {contact.form.submitButton.text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
