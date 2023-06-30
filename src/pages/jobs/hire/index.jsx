import React, { useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/router";
import { clearData } from "@/store/reducer/hireSlice";

const Hire = () => {
  const [subject, setSubject] = useState("");
  const [descMsg, setDescMsg] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.hire?.data);

  const sendMsgHandle = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Harap tunggu...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    await axios
      .post(`${process.env.NEXT_PUBLIC_CONTACT}/${user?.id}`, {
        subject,
        description: descMsg,
      })
      .then(() => {
        Swal.fire({
          title: "Pesan Terkirim",
          text: `Pesan anda berhasil terkirim ke ${user?.fullname}`,
          icon: "success",
        }).then(() => {
          dispatch(clearData());
          router.replace(`/jobs/${user?.id}`);
        });
      })
      .catch((response) => console.log(response));
  };

  return (
    <>
      <Head>
        <title>Hiring | {user?.fullname} | CariIn</title>
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
                        src={user?.photo}
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="card-title">{user?.fullname}</h3>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {user?.job_title}
                    </h6>
                  </div>
                  <div className="text-start mb-2">
                    <span className="text-body-tertiary">
                      <FontAwesomeIcon icon={faLocationDot} /> {user?.domicile}
                    </span>
                  </div>
                  <p className="card-text text-body-tertiary">
                    {user?.description}
                  </p>
                  <div id="skills" className="mt-5 mb-5">
                    <h4 className="fw-semibold">Skill</h4>
                    <div className="d-inline">
                      {user?.skills.map((item, key) => (
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
                <h3 className="text-semibold">Hubungi {user?.fullname}</h3>
                <p className="text-body-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
                <div id="form-identity" className="mt-5">
                  <form onSubmit={sendMsgHandle}>
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Tujuan tentang pesan ini
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tuliskan tujuan pesan"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    {/* <div className="mb-4">
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
                    </div> */}
                    <div className="mb-4">
                      <label className="form-label text-body-tertiary">
                        Deskripsi
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Deskripsikan/jelaskan lebih detail "
                        rows="8"
                        onChange={(e) => setDescMsg(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button
                        id="btn-save"
                        type="submit"
                        className="btn btn-tertiary fw-semibold pt-2 pb-2 mt-4"
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
