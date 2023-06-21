import Head from "next/head";
import Link from "next/link";
import React from "react";

// import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import NavigationBar from "@/components/NavigationBar";
import MhomeContent from "@/components/MhomeContent";
import ShomeContent from "@/components/ShomeContent";
import ThomeContent from "@/components/ThomeContent";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";

const Home = () => {
  // const state = useSelector((state) => state);
  // console.log(state);
  return (
    <>
      <Head>
        <title>Portal Lowongan Pekerjaan Indonesia | CariIn</title>
      </Head>

      <NavigationBar />
      <div className="Home">
        <div className="container">
          {/* Start of main content */}
          <section id="main-content">
            <div className="content">
              <div id="main-section" className="row align-items-center">
                <div className="col-md-6">
                  <h1
                    className="d-block mb-3 lh-base"
                    style={{ color: "#1F2A36" }}
                  >
                    Talenta terbaik negri
                    <br />
                    untuk perubahan
                    <br />
                    revolusi 4.0
                  </h1>
                  <p className="d-block mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  <Link href="/jobs">
                    <button
                      type="button"
                      className="btn btn btn-primary border-2"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      Mulai Dari Sekarang
                    </button>
                  </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <MhomeContent />
                </div>
              </div>
            </div>
          </section>
          {/* End of main content */}

          {/* Start of second content */}
          <section id="second-content">
            <div className="content">
              <div id="second-section" className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <ShomeContent />
                </div>
                <div className="col-md-6">
                  <h2
                    className="d-block mb-5 lh-base"
                    style={{ color: "#1F2A36" }}
                  >
                    Kenapa harus mencari tallent
                    <br />
                    di CariIn
                  </h2>
                  {[...new Array(4)].map((item, key) => (
                    <div className="d-flex align-items-center mb-4" key={key}>
                      <div
                        className="rounded-circle me-2 d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#5E50A1",
                          width: "25px",
                          height: "25px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "white" }}
                        />
                      </div>
                      <p className="ms-2 mb-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* End of second content */}

          {/* Start of third content */}
          <section id="third-content">
            <div className="content">
              <div id="third-section" className="row align-items-center">
                <div className="col-md-6">
                  <h2
                    className="d-flex mb-3 lh-base"
                    style={{ color: "#1F2A36" }}
                  >
                    Skill Tallent
                  </h2>
                  <p className="d-block mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      {["Java", "Kotlin", "PHP", "Javascript"].map(
                        (item, key) => (
                          <div
                            className="d-flex text-end align-items-center mb-4"
                            key={key}
                          >
                            <div
                              className="rounded-circle me-2 d-flex justify-content-center align-items-center"
                              style={{
                                backgroundColor: "#FBB017",
                                width: "25px",
                                height: "25px",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                style={{ color: "white" }}
                              />
                            </div>
                            <p className="ms-2 mb-0">{item}</p>
                          </div>
                        )
                      )}
                    </div>
                    <div className="col-md-6">
                      {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"].map(
                        (item, key) => (
                          <div
                            className="d-flex text-end align-items-center mb-4"
                            key={key}
                          >
                            <div
                              className="rounded-circle me-2 d-flex justify-content-center align-items-center"
                              style={{
                                backgroundColor: "#FBB017",
                                width: "25px",
                                height: "25px",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                style={{ color: "white" }}
                              />
                            </div>
                            <p className="ms-2 mb-0">{item}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <ThomeContent />
                </div>
              </div>
            </div>
          </section>
          {/* End of third content */}

          {/* Start of fourth content */}
          <section id="fourth-content">
            <div className="content">
              <div id="comment-section" className="d-flex align-items-center">
                <div className="container">
                  {/* <div className="row"> */}
                  <h2
                    className="d-flex mb-5 lh-base align-items-center justify-content-center"
                    style={{ color: "#1F2A36" }}
                  >
                    Komentar mereka tentang CariIn
                  </h2>
                  <CommentSection />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* End of fourth content */}

          {/* Start of fifth content */}
          <section id="fifth-content">
            <div className="small-content">
              <div id="start-section" className="d-flex align-items-center">
                <div id="card" className="container">
                  <div className="row justify-content-between align-items-center">
                    <div id="title" className="col-auto">
                      <h2>Lorem ipsum dolor sit amet</h2>
                    </div>
                    <div className="col-auto">
                      <Link href="/">
                        <button
                          type="button"
                          className="btn btn-light border-2 pt-3 pb-3 ps-4 pe-4 fw-semibold"
                        >
                          Mulai Dari Sekarang
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of fifth content */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
