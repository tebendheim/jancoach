// Section.jsx
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <div>
      <h2 id={id}>{title}</h2>
      <h4>{subtitle}</h4>
      {children}
    </div>
  );
};

export default Section;
