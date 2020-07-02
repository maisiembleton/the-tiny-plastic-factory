import React from "react";
import "./styles.scss";
// take in a string array and map to paragraphs
//take in an image
//take in a title string

const ContentImageBlock = ({ title, content, img, imgalt }) => {
  return (
    <div className="content-img-block">
      <div className="content-img-block-title">
        <h2>{title}</h2>
      </div>
      <div className="content-img-block-content">
        <div className="content-img-block-content-p">
          {content.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div>
          <img src={img} className="content-img-block-img" alt={imgalt} />
        </div>
      </div>
    </div>
  );
};

export default ContentImageBlock;
