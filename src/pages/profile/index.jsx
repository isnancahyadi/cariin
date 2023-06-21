import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Tabs from "./Tab";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import { useRouter } from "next/router";

const tabContent = [
  {
    title: "Portofolio",
    content: <Portfolio />,
  },
  {
    title: "Pengalaman Kerja",
    content: <Experience />,
  },
];

const Profile = () => {
  const router = useRouter();
  const data = router.query;
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAccess(token);
  }, []);

  return (
    <>
      <Head>
        <title>Profil Saya | CariIn</title>
      </Head>
      <div className="Profile">
        <NavigationBar />
        <div className="bg-decoration" />
        <div id="content">
          <div id="card-content" className="container">
            <div
              id="card"
              className="row justify-content-center align-items-start"
            >
              <div className="d-flex col-md-4">
                <div id="profile-id" className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <div className="photo mb-4">
                      <div className="bg-photo">
                        <img
                          className="card-img"
                          src="/assets/img/profile/profile.jpg"
                          alt="profile"
                        />
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <h2 className="card-title">Isnan A. Cahyadi</h2>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Web Developer
                      </h6>
                    </div>
                    <div className="text-start mb-2">
                      <span className="text-body-tertiary">
                        <FontAwesomeIcon icon={faLocationDot} /> Karawang, Jawa
                        Barat
                      </span>
                    </div>
                    <p className="card-text text-body-tertiary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                    {access === data?.user ? (
                      <Link href="/profile/edit">
                        <button
                          type="button"
                          className="btn btn btn-secondary mt-4 border-2 fw-semibold"
                          style={{
                            width: "100%",
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                          }}
                        >
                          Edit Profil
                        </button>
                      </Link>
                    ) : (
                      <Link href="/jobs/hire">
                        <button
                          type="button"
                          className="btn btn btn-primary mt-3 border-2 fw-semibold"
                          style={{
                            width: "100%",
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                          }}
                        >
                          Hire
                        </button>
                      </Link>
                    )}

                    <div id="skills" className="mt-5 mb-5">
                      <h3 className="fw-semibold">Skill</h3>
                      <div className="d-inline">
                        {[
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
                        ].map((item, key) => (
                          <span key={key} className="badge bg-warning m-1 p-2 ">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div id="contact">
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faEnvelope} size="lg" />
                          &nbsp;&nbsp; isnan.arifc@gmail.com
                        </span>
                      </div>
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                          &nbsp;&nbsp; @isnanarifc
                        </span>
                      </div>
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                          &nbsp;&nbsp; isnancahyadi
                        </span>
                      </div>
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                          &nbsp;&nbsp; Isnan Arif Cahyadi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex col-md-8">
                <div
                  id="profile-content"
                  className="card"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <Tabs>
                          {tabContent.map((tab, index) => (
                            <Tabs.TabPane key={`Tab-${index}`} tab={tab.title}>
                              {tab.content}
                            </Tabs.TabPane>
                          ))}
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
