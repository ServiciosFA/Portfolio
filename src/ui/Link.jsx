import React from "react";
import "./Link.scss";

const Link = ({ icon, description, url }) => {
  const hasUrl = url === "" ? false : true;
  return (
    <>
      {hasUrl ? (
        <a
          className="linkContainer"
          href={url}
          alt=""
          target="_blank"
          rel="no noreferrer"
        >
          {icon}
          {description}
        </a>
      ) : (
        <div className="linkContainer">
          {icon}
          {description}
        </div>
      )}
    </>
  );
};

export default Link;
