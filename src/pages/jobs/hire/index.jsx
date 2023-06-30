import React from "react";
import Head from "next/head";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hire = () => {
  return (
    <>
      <Head>
        <title>Hiring | CariIn</title>
      </Head>
      <div className="Hire">
        <div style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.23)" }}>
          <NavigationBar />
        </div>

        <div id="content" className="container">
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
                    <h3 className="card-title">Isnan A. Cahyadi</h3>
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
                  <div id="skills" className="mt-5 mb-5">
                    <h4 className="fw-semibold">Skill</h4>
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
                </div>
              </div>
            </div>

            <div className="d-flex col-md-8">
              <div id="message-content" className="container">
                <h3 className="text-semibold">Hubungi Isnan A. Cahyadi</h3>
                <p className="text-body-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
                <div id="form-identity" className="mt-5">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Tujuan tentang pesan ini
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tuliskan tujuan pesan"
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama lengkap"
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan email"
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        No Handphone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan no handphone"
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Deskripsi
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Deskripsikan/jelaskan lebih detail "
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button
                        id="btn-save"
                        type="submit"
                        className="btn btn-tertiary fw-semibold pt-2 pb-2 mt-4"
                        // onClick={handleLogin}
                      >
                        Hire
                      </button>
                    </div>
                  </form>
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

export default Hire;
