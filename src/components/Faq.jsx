import React from "react";
import FAQ from "./Faqi"; // Import the new FAQ component
import { faqData } from "../../constants/FaqData";

function FAQSection() {
  return (
    <div className="FAQ-section">
      <FAQ faqData={faqData} />
    </div>
  );
}
export default FAQSection;
