import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPencil } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React from "react";
import Link from "next/link";

const EditProfile = () => {
  return (
    <>
      <Head>
        <title>Edit Profil Saya | CariIn</title>
      </Head>
      <div className="EditProfile">
        <NavigationBar />
        <div className="bg-decoration" />
        <div id="content">
          <div id="card-content" className="container">
            <div
              id="card"
              className="row justify-content-center align-items-start"
            >
              <div className="col-md-4">
                <div id="profile-id" className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <div className="photo mb-4">
                      <div className="bg-photo">
                        <button className="btn btn-edit-photo">
                          <FontAwesomeIcon
                            icon={faPencil}
                            style={{ fontSize: "4rem" }}
                          />
                        </button>
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
                  </div>
                </div>
                <Link href="#">
                  <button
                    type="button"
                    className="btn btn btn-primary mt-4 border-2 fw-semibold"
                    style={{
                      width: "100%",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Simpan
                  </button>
                </Link>
                <Link href="#">
                  <button
                    type="button"
                    className="btn btn btn-secondary mt-3 border-2 fw-semibold"
                    style={{
                      width: "100%",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Batal
                  </button>
                </Link>
              </div>

              <div className="col-md-8">
                {/* Start of identity */}
                <div
                  id="identity-content"
                  className="card"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card-body p-0 mt-2 mb-4">
                    <div id="title-identity">
                      <h3 className="text-semibold">Data Diri</h3>
                    </div>
                    <hr />
                    <div id="form-identity">
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan nama lengkap"
                            // onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Job Desk
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan job desk"
                            // onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Domisili
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan domisili"
                            // onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Tempat Kerja
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan tempat kerja"
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Deskripsi Singkat
                          </label>
                          <textarea
                            className="in-edit-profile form-control"
                            placeholder="Tuliskan deskripsi singkat"
                            rows="4"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* End of idetity */}

                {/* Start of skill */}
                <div
                  id="identity-content"
                  className="card"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card-body p-0 mt-2 mb-4">
                    <div id="title-identity">
                      <h3 className="text-semibold">Skill</h3>
                    </div>
                    <hr />
                    <div id="form-identity">
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div className="mb-4">
                          <div className="row g-3 mt-3">
                            <div className="col-10">
                              <input
                                type="text"
                                className="in-edit-profile form-control"
                                placeholder="Masukkan skill"
                                // onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                            <div className="col-2">
                              <button
                                id="btn-save"
                                type="submit"
                                className="btn btn-tertiary fw-semibold"
                                // onClick={handleLogin}
                              >
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <div className="d-grid">
                          
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
                {/* End of skill */}

                {/* Start of experience */}
                <div
                  id="identity-content"
                  className="card"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card-body p-0 mt-2 mb-4">
                    <div id="title-identity">
                      <h3 className="text-semibold">Pegalaman Kerja</h3>
                    </div>
                    <hr />
                    <div id="form-identity">
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Posisi
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan posisi"
                            // onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <div className="row">
                            <div className="col-md-6">
                              <label className="form-label text-body-tertiary">
                                Nama Perusahaan
                              </label>
                              <input
                                type="text"
                                className="in-edit-profile form-control"
                                placeholder="Masukkan nama perusahaan"
                                // onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label text-body-tertiary">
                                Bulan/tahun
                              </label>
                              <input
                                type="text"
                                className="in-edit-profile form-control"
                                placeholder="Masukkan bulan dan tahun"
                                // onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Deskripsi Singkat
                          </label>
                          <textarea
                            className="in-edit-profile form-control"
                            placeholder="Tuliskan deskripsi singkat"
                            rows="4"
                          ></textarea>
                        </div>
                        <div className="d-grid">
                          <button
                            id="btn-save"
                            type="submit"
                            className="btn btn-tertiary fw-semibold pt-2 pb-2"
                            // onClick={handleLogin}
                          >
                            Tambah pengalaman kerja
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* End of experience */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EditProfile;
