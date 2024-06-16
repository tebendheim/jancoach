import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import PrivacyText from "../PrivacyText/privacy4";
//517

const PrivacyPolicy = () => {
  const markdownContent = `
    # Privacy Policy

    This is **Markdown** content.
  `;

  const [markdown, setMarkdown] = useState("");
  const fileName = "privacy.md";

  useEffect(() => {
    import(`../Markdown/${fileName}`)
      .then((module) => {
        // Assuming the imported module has a default export of the file content
        setMarkdown(module.default);
      })
      .catch((err) => {
        console.error("Error importing Markdown file:", err);
      });
  }, []);

  return (
    <section>
      <Navbar
        bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
        logoColor="bg-skog"
      />
      <div className="my-24 bg-white">
        <PrivacyText />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
