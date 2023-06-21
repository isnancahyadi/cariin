import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Jobs = () => {
  let worker = [
    {
      name: "Isnan A. Cahyadi",
      job: "Web Developer",
      location: "Karawang, Jawa Barat",
      photo: "/assets/img/profile/profile.jpg",
      skills: [
        "Phyton",
        "Laravel",
        "Golang",
        "Ruby",
        "Rust",
        "Javascript",
        "Express",
        "Java",
        "Kotlin",
        "Flutter",
        "Spring",
      ],
    },
    {
      name: "John Doe",
      job: "Mobile Developer",
      location: "Bekasi, Jawa Barat",
      photo: "/assets/img/model-aykut-aktas.jpg",
      skills: [
        "Golang",
        "Javascript",
        "Express",
        "Java",
        "Kotlin",
        "Flutter",
        "Spring",
      ],
    },
    {
      name: "Fulan bin Fulin",
      job: "System Analyst",
      location: "Bekasi, Jawa Barat",
      photo: "/assets/img/model-ian-dooley.jpg",
      skills: ["Phyton", "Golang", "Javascript", "Express", "Java", "Spring"],
    },
  ];

  return (
    <>
      <Head>
        <title>Portal Lowongan Pekerjaan Indonesia | CariIn</title>
      </Head>
      <div className="Jobs">
        <NavigationBar />
        <div className="bg-decoration d-flex align-items-center">
          <div className="container">
            <h3 className="text-white m-0">Top Jobs</h3>
          </div>
        </div>
        <div id="content" className="container">
          <div className="search">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Cari untuk skill apapun"
            />
            <div className="action d-inline-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              <div
                className="vl"
                style={{
                  height: "40px",
                  borderLeft: "1px solid grey",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
              />
              <Link href="#">
                <button
                  id="btn-category"
                  type="button"
                  className="btn btn btn-secondary border-2"
                  style={{ marginRight: ".5rem" }}
                >
                  Kategori
                </button>
              </Link>
              <Link href="#">
                <button
                  id="btn-search"
                  type="button"
                  className="btn btn btn-primary border-2"
                  style={{ marginLeft: ".5rem" }}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>

          <div className="list border border-1 rounded-2">
            <div className="container">
              {worker.map((item, key) => (
                <>
                  <div
                    className="row justify-content-center align-items-center"
                    key={key}
                  >
                    <div className="col-auto">
                      <div className="photo">
                        <div className="bg-photo">
                          <img
                            className="card-img"
                            src={item.photo}
                            alt="profile"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="text-start">
                        <h2 className="card-title">{item.name}</h2>
                        <h6 className="card-subtitle mb-1 mt-1 text-body-secondary">
                          {item.job}
                        </h6>
                        <p className="text-body-tertiary m-0">
                          <FontAwesomeIcon icon={faLocationDot} />{" "}
                          {item.location}
                        </p>
                        <div className="d-inline-flex mt-2">
                          {item.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="badge bg-warning m-1 p-2 "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link href="#">
                        <button
                          //   id="btn-search"
                          type="button"
                          className="btn btn btn-primary border-2"
                        >
                          Lihat Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                  {key === worker.length - 1 ? null : (
                    <hr className="mt-5 mb-5" />
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="pagination">
            <div className="container d-flex justify-content-center align-items-center">
              <Link href="#">
                <button
                  type="button"
                  className="btn btn btn-secondary border-1"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "0",
                    marginLeft: ".5rem",
                    marginRight: ".5rem",
                  }}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              </Link>
              {[...new Array(6)].map((item, key) => (
                <Link href="#" key={key}>
                  <button
                    type="button"
                    className={`btn btn btn-secondary border-1 ${
                      key === 0 ? "active" : ""
                    }`}
                    style={{
                      width: "50px",
                      height: "50px",
                      padding: "0",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                  >
                    <h6 className="m-0 p-0">{key + 1}</h6>
                  </button>
                </Link>
              ))}
              <Link href="#">
                <button
                  type="button"
                  className="btn btn btn-secondary border-1"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "0",
                    marginLeft: ".5rem",
                    marginRight: ".5rem",
                  }}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Jobs;
