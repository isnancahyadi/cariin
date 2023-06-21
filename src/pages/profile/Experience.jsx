import React from "react";

const Experience = () => {
  let companyDetail = [
    {
      logoCompany: "/assets/icon/logo-tokopedia.png",
      jobTitle: "Engineer",
      companyName: "Tokopedia",
      interval: "Juli 2019 - Januari 2020",
      time: "6 bulan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
    },
    {
      logoCompany: "/assets/icon/logo-shopee.png",
      jobTitle: "Web Developer",
      companyName: "Shopee",
      interval: "Juli 2018 - Januari 2020",
      time: "1 tahun 6 bulan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
    },
  ];

  return (
    <div className="Experience">
      {companyDetail.map((item, key) => (
        <div className="row mb-4" key={key}>
          <div className="col-md-2">
            <img
              src={item.logoCompany}
              alt="logo-company"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-10">
            <h5 className="mb-0 fw-semibold">{item.jobTitle}</h5>
            <h6 className="mb-0 fw-normal">{item.companyName}</h6>
            <span className="text-body-tertiary">
              {item.interval} &nbsp; <small>{item.time}</small>
            </span>
            <p className="mt-3">{item.description}</p>

            {key === companyDetail.length - 1 ? null : <hr />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
