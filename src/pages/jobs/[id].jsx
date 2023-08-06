import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { sendHireTo } from "@/store/reducer/hireSlice";

import Experience from "../profile/Experience";
import NavigationBar from "@/components/NavigationBar";
import Tabs from "../profile/Tab";
import Footer from "@/components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const JobProfile = () => {
  const { query } = useRouter();
  const id = parseInt(query?.id);

  const router = useRouter();
  const dispatch = useDispatch();

  const jobProfile = useSelector((state) =>
    state?.job?.job?.find((job) => job.id === id)
  );

  useEffect(() => {
    if (!localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME))
      router.replace("/login");
  }, []);

  const tabContent = [
    {
      title: "Pengalaman Kerja",
      content: <Experience history={jobProfile?.job_history} />,
    },
    // {
    //     title: "Portofolio",
    //     content: <Portfolio />
    // }
  ];

  const hireHandle = (profile) => {
    dispatch(sendHireTo(profile));
    router.replace("/jobs/hire");
  };

  return (
    <>
      <Head>
        <title>Profil {jobProfile?.fullname} | CariIn</title>
      </Head>
      <div className="JobProfile">
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
                          src={jobProfile?.photo}
                          alt="profile"
                        />
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <h2 className="card-title">{jobProfile?.fullname}</h2>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {jobProfile?.job_title === "-"
                          ? "Pekerjaan tidak diketahui"
                          : jobProfile?.job_title}
                      </h6>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {jobProfile?.company === "-"
                          ? "Perusahaan tidak diketahui"
                          : jobProfile?.company}
                      </h6>
                    </div>
                    <div className="text-start mb-2">
                      <span className="text-body-tertiary">
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                        {jobProfile?.domicile === "-"
                          ? "Lokasi tidak diketahui"
                          : jobProfile?.domicile}
                      </span>
                    </div>
                    <p className="card-text text-body-tertiary">
                      {jobProfile?.description === "-"
                        ? "Tidak ada deskripsi"
                        : jobProfile?.description}
                    </p>
                    <Link href="">
                      <button
                        type="button"
                        className="btn btn btn-primary mt-4 border-2 fw-semibold"
                        style={{
                          width: "100%",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                        }}
                        onClick={() => hireHandle(jobProfile)}
                      >
                        Hubungi
                      </button>
                    </Link>

                    <div id="skills" className="mt-5 mb-5">
                      <h3 className="fw-semibold">Skill</h3>
                      <div className="d-inline">
                        {jobProfile?.skills?.length === 0 ? (
                          <span className="text-body-tertiary">
                            Skill tidak ditemukan
                          </span>
                        ) : (
                          jobProfile?.skills.map((item, key) => (
                            <span
                              key={key}
                              className="badge bg-warning m-1 p-2 "
                            >
                              {item}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                    <div id="contact">
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faEnvelope} size="lg" />
                          &nbsp;&nbsp; {jobProfile?.email}
                        </span>
                      </div>
                      <div className="mt-3 mb-3">
                        <span className="text-body-tertiary">
                          <FontAwesomeIcon icon={faPhone} size="lg" />
                          &nbsp;&nbsp; {jobProfile?.phone}
                        </span>
                      </div>
                      {/* <div className="mt-3 mb-3">
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
                      </div> */}
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

export default JobProfile;
