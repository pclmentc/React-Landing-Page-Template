import React from "react";

export const Image = ({ title, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={smallImage} title={title} data-lightbox-gallery="gallery1" target="_blank" rel="noopener noreferrer">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />
        </a>
      </div>
    </div>
  );
};
