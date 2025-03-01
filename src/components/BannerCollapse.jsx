import React, { useState } from "react";
import "../sass/BannerCollapse.scss";

const BannerCollapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="banner-collapse">
      <div className="banner-collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <button className="banner-collapse__toggle">
          {isOpen ? "x" : ">"}
        </button>
      </div>
      {isOpen && <div className="banner-collapse__content">{content}</div>}
    </div>
  );
};

export default BannerCollapse;
