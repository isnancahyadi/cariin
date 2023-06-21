import React from "react";

const MhomeContent = () => {
  return (
    <div className="MhomeContent">
      <div className="container d-block">
        <div className="img-bg-decoration" />
        <div className="polka-dot" style={{ height: "100px", width: "80px" }} />
        <div className="square-big" />
        <div className="square-small" />
        <img
          src="/assets/img/img-m-content.jpg"
          alt="Main Content"
          height={500}
          width={500}
          style={{ objectFit: "cover", backgroundPosition: "center" }}
        />
      </div>
    </div>
  );
};

export default MhomeContent;
