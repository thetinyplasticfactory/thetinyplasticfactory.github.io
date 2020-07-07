import React from "react";
import "./styles.scss";
import ImageBlock from "../ImagesBlock/ImagesBlock";

const ContentImageBlock = ({
  id,
  title,
  topcontent,
  bottomcontent,
  img,
  imgalt,
  imgblock,
}) => {
  return (
    <div className="content-img-block" id={id}>
      <div className="content-img-block-title">
        <h2>{title}</h2>
      </div>
      <div className="content-img-block-content">
        <div className="content-img-block-content-format">
          <div className="content-img-block-content-p">
            {topcontent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {imgblock && <ImageBlock imgs={imgblock} />}

          {bottomcontent && (
            <div className="content-img-block-content-p">
              {bottomcontent.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <div>
          <img src={img} className="content-img-block-img" alt={imgalt} />
        </div>
      </div>
    </div>
  );
};

export default ContentImageBlock;
