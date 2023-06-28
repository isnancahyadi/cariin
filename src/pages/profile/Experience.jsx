import React from "react";

const Experience = ({ history }) => {
  return (
    <div className="Experience">
      {history.length === 0 ? (
        <div className="text-center">
          <h5 className="text-body-tertiary">Pengalaman tidak ditemukan</h5>
        </div>
      ) : (
        history.map((item, key) => (
          <div className="exp-card row mb-4" key={item.id}>
            <div className="col-md-2 pt-2 pb-2">
              <img
                src={item.logo}
                alt="logo-company"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-10 align-self-center">
              <h5 className="mb-0 fw-semibold">{item.position}</h5>
              <h6 className="mb-0 fw-normal">{item.company}</h6>
              <span className="text-body-tertiary">{item.date}</span>
              <p className="mt-3">{item.description}</p>
              {key === history.length - 1 ? null : <hr className="m-0 mt-4" />}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Experience;
