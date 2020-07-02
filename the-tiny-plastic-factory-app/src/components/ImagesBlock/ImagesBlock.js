import React from "react";
import "./styles.scss";

// TODO incorporate links
const ImagesBlock = ({ imgs }) => {
  return (
    <div className="img-block">
      {imgs.map(({ img, alt }, i) => (
        <img key={i} src={img} alt={alt} className="img-block-img" />
      ))}
    </div>
  );
};

export default ImagesBlock;
