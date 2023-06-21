import React from "react";

const ThomeContent = () => {
  return (
    <div className="ThomeContent">
      <div className="container d-block">
        <div className="img-bg-decoration" />
        <div className="polka-dot" style={{ height: "80px", width: "100px" }} />
        <div className="square-big" />
        <img
          src="/assets/img/img-t-content.jpg"
          alt="Second Content"
          height={400}
          width={500}
          style={{ objectFit: "cover", backgroundPosition: "center" }}
        />
      </div>
    </div>
  );
};

export default ThomeContent;
