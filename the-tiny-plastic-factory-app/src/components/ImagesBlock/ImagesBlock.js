import React from "react";
import "./styles.scss";

// TODO incorporate links
const ImagesBlock = ({ imgs, withLinks }) => {
  return (
    <div className="img-block">
      {withLinks
        ? imgs.map(({ img, alt, link }, i) => (
            <a href={link}>
              <img key={i} src={img} alt={alt} className="img-block-img" />
            </a>
          ))
        : imgs.map(({ img, alt }, i) => (
            <img key={i} src={img} alt={alt} className="img-block-img" />
          ))}
    </div>
  );
};

export default ImagesBlock;
