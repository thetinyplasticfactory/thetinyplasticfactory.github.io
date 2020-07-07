import React from "react";
import "./styles.scss";
import cn from "classnames";

const ImagesBlock = ({ imgs, withLinks, title, id, size }) => {
  return (
    <div id={id} className="img-block">
      {title && <h2>{title}</h2>}
      <div className={cn("img-block-content", `img-block-content-${size}`)}>
        {withLinks
          ? imgs.map(({ img, alt, link }, i) => (
              <a href={link}>
                <img
                  key={i}
                  src={img}
                  alt={alt}
                  className="img-block-content-img"
                />
              </a>
            ))
          : imgs.map(({ img, alt }, i) => (
              <img
                key={i}
                src={img}
                alt={alt}
                className="img-block-content-img"
              />
            ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
