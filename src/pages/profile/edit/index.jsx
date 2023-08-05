import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { setTimeout } from "timers/promises";

import { getUser } from "@/store/reducer/userSlice";
import Swal from "sweetalert2";
import axios from "axios";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const EditProfile = () => {
  const router = useRouter();
  const user = useSelector((state) => state?.user?.data);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState(user?.fullname);
  const [phone, setPhone] = useState(user?.phone);
  const [jobDesk, setJobDesk] = useState(user?.job_title);
  const [domicile, setDomicile] = useState(user?.domicile);
  const [company, setCompany] = useState(user?.company);
  const [description, setDescription] = useState(user?.description);
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgView, setProfileImgView] = useState(null);
  const [profileImgName, setProfileImgName] = useState("");

  const [inputSkills, setinputSkills] = useState("");
  const [skills, setSkills] = useState([]);

  const [expPos, setExpPos] = useState("");
  const [expCompany, setExpCompany] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expDesc, setExpDesc] = useState("");
  const [expImg, setExpImg] = useState(null);
  const [expViewImg, setExpViewImg] = useState(null);
  const [expImgName, setExpImgName] = useState("");
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME))
      router.replace("/login");
  }, []);

  const onKeyDownSkill = (e) => {
    const { key } = e;
    const trimmedInput = inputSkills.trim();

    if (
      key === "Enter" &&
      trimmedInput.length &&
      !skills.includes(trimmedInput)
    ) {
      e.preventDefault();
      setSkills((prevState) => [...prevState, trimmedInput]);
      setinputSkills("");
    }
  };

  const deleteTag = (key) => {
    setSkills((prevState) => prevState.filter((tag, i) => i !== key));
  };

  const editHandle = async () => {
    Swal.fire({
      title: "Harap tunggu...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const personalPayload = {
      fullname,
      company,
      job_title: jobDesk,
      phone,
      description,
      domicile,
    };

    // const experiencePayload = new FormData();
    // experience.forEach((exp, key) => {
    //   experiencePayload.append("job_history", exp);
    // });

    const postPersonalData = async () => {
      return await axios.patch(
        process.env.NEXT_PUBLIC_PROFILE,
        personalPayload
      );
    };

    const postSkills = async () => {
      skills?.length === 0
        ? null
        : await axios.post(process.env.NEXT_PUBLIC_SKILL, { skills });
    };

    // const postExperience = experience.map((obj) => {
    //   setTimeout(async () => {
    //     await axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });
    //   }, 5000);
    //   // await setTimeout(3000);
    //   // return await axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //   //   headers: {
    //   //     "Content-Type": "multipart/form-data",
    //   //   },
    //   // });
    //   // .then(({ data }) => data?.data);
    // });

    // const postExperience = async () => {
    //   return await axios.post(process.env.NEXT_PUBLIC_JOB, experiencePayload, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    // };

    // const postExperience = async () => {
    //   experience.map(async (obj) => {
    //     await axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });
    //     // setTimeout(postExperience, 3000);
    //   });
    // };

    // const postExperience = () => {
    //   experience.map((obj) => {
    //     const add = axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });

    //     Promise.all([add]);
    //   });
    // };

    const postPhotoProfile = async () => {
      profileImg === null
        ? null
        : await axios.patch(
            `${process.env.NEXT_PUBLIC_PROFILE}/picture`,
            { photo: profileImg },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
    };

    // Promise.allSettled(postExperience);

    // experience.forEach(async (obj) => {
    //   await axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   setTimeout(5000);
    // });

    // await Promise.all(
    //   experience.map(async (obj) => {
    //     return await axios.post(process.env.NEXT_PUBLIC_JOB, obj, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });
    //   })
    // ).then((result) => {
    //   console.log(result);
    // });

    await Promise.all([
      postPersonalData(),
      postSkills(),
      // postExperience,
      // sendExperience(),
      postPhotoProfile(),
    ])
      .then(() => {
        dispatch(getUser());
        Swal.fire({
          title: "Edit Berhasil",
          text: "Profil anda berhasil diubah.",
          icon: "success",
        }).then(() => {
          router.replace("/profile");
        });
      })
      .catch(({ response }) => {
        const getRes = Object.keys(response?.data?.messages);

        let msgProperty = [];

        getRes.map((item, key) => {
          const {
            [item]: { message },
          } = response?.data?.messages;

          msgProperty[key] = message;
        });

        Swal.fire({
          title: "Update Gagal",
          text: msgProperty.toString().split(".,").join(", "),
          icon: "error",
        });
      });

    // experience.map((obj) => {
    //   console.log(obj);
    // });

    // Promise.allSettled([postExperience()]).then((result) => result);

    // experience.map((obj) => {
    //   Promise.allSettled([obj])
    // })

    // console.log(postExperience);

    // await Promise.allSettled([postExperience]).then((result) => {
    //   return result;
    // });
  };

  const deleteSkillHandle = (item, key) => {
    Swal.fire({
      title: "Hapus Skill",
      text: `Apakah anda yakin ingin menghapus skill ${item} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Iya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Harap tunggu...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });
        axios
          .delete(`${process.env.NEXT_PUBLIC_SKILL}/${key}`)
          .then(() => {
            dispatch(getUser());
            Swal.fire({
              title: "Hapus Berhasil",
              text: `Berhasil menghapus skill ${item}.`,
              icon: "success",
            });
          })
          .catch((response) => console.log(response));
      }
    });
  };

  const experienceHandle = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Harap tunggu...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const payload = {
      position: expPos,
      company: expCompany,
      date: expDate,
      description: expDesc,
      photo: expImg,
    };

    await axios
      .post(process.env.NEXT_PUBLIC_JOB, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        dispatch(getUser());
        Swal.fire({
          title: "Berhasil",
          text: "Pengalaman anda berhasil ditambah.",
          icon: "success",
        }).then(() => {
          router.replace("/profile");
        });
      })
      .catch(({ response }) => {
        const getRes = Object.keys(response?.data?.messages);

        let msgProperty = [];

        getRes.map((item, key) => {
          const {
            [item]: { message },
          } = response?.data?.messages;

          msgProperty[key] = message;
        });

        Swal.fire({
          title: "Tambah Gagal",
          text: msgProperty.toString().split(".,").join(", "),
          icon: "error",
        });
      });

    // setExperience((prevState) => [...prevState, payload]);
    // setExpPos("");
    // setExpCompany("");
    // setExpDate("");
    // setExpDesc("");
    // setExpImg(null);
    // setExpViewImg(null);
    // setExpImgName("");
  };

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
                            onClick={() =>
                              document
                                .querySelector(".profile-img-selector")
                                .click()
                            }
                          />
                        </button>
                        <input
                          type="file"
                          className="form-control profile-img-selector"
                          onChange={({ target: { files } }) => {
                            if (files[0]) {
                              setProfileImg(files[0]);
                            }
                            setProfileImgName(files[0].name);
                            setProfileImgView(URL.createObjectURL(files[0]));
                          }}
                          hidden
                        />
                        {profileImgView ? (
                          <img
                            className="card-img"
                            src={profileImgView}
                            alt="profile"
                          />
                        ) : (
                          <img
                            className="card-img"
                            src={user?.photo}
                            alt="profile"
                          />
                        )}
                        {/* <img
                          className="card-img"
                          src={user?.photo ?? profileImgView}
                          alt="profile"
                        /> */}
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <h2 className="card-title">{user?.fullname}</h2>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {user?.job_title}
                      </h6>
                    </div>
                    <div className="text-start mb-2">
                      <span className="text-body-tertiary">
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                        {user?.domicile}
                      </span>
                    </div>
                    <div className="mt-5 mb-5">
                      <h3 className="fw-semibold">Skill</h3>
                      <div className="d-inline">
                        {user?.skills?.length === 0 ? (
                          <span className="text-body-tertiary">
                            Skill tidak ditemukan
                          </span>
                        ) : (
                          user?.skills.map((item, key) => (
                            <div
                              key={key}
                              className="d-inline-flex badge bg-warning align-items-center justify-content-center m-1 p-2"
                              style={{ whiteSpace: "nowrap", gap: ".5em" }}
                            >
                              <span>{item}</span>
                              <button
                                className="border border-0 text-white p-0"
                                style={{ backgroundColor: "unset" }}
                                onClick={() => deleteSkillHandle(item, key)}
                              >
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="">
                  <button
                    type="button"
                    className="btn btn btn-primary mt-4 border-2 fw-semibold"
                    onClick={() => editHandle()}
                    style={{
                      width: "100%",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Simpan
                  </button>
                </Link>
                <Link href="/profile">
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
                            defaultValue={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            No. Handphone
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan no. handphone"
                            defaultValue={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                            defaultValue={jobDesk}
                            onChange={(e) => setJobDesk(e.target.value)}
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
                            defaultValue={domicile}
                            onChange={(e) => setDomicile(e.target.value)}
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
                            defaultValue={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Deskripsi Singkat
                          </label>
                          <textarea
                            className="in-edit-profile form-control"
                            placeholder="Tuliskan deskripsi singkat"
                            defaultValue={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                      <div className="mb-2">
                        <div className="row g-3 mt-3">
                          <div className="col-12">
                            <input
                              type="text"
                              className="in-edit-profile form-control"
                              placeholder="Masukkan skill"
                              value={inputSkills}
                              onKeyDown={onKeyDownSkill}
                              onChange={(e) => setinputSkills(e.target.value)}
                            />
                            <div>
                              <small className="text-muted">
                                *tekan enter untuk menambahkan
                              </small>
                            </div>
                            {skills.map((skill, key) => (
                              <div
                                key={key}
                                className="d-inline-flex badge bg-warning align-items-center justify-content-center mt-3 m-1 p-2"
                                style={{ whiteSpace: "nowrap", gap: ".5em" }}
                              >
                                <span>{skill}</span>
                                <button
                                  className="border border-0 text-white p-0"
                                  style={{ backgroundColor: "unset" }}
                                  onClick={() => deleteTag(key)}
                                >
                                  <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
                      <form id="experience" onSubmit={experienceHandle}>
                        <div className="mb-4">
                          <label className="form-label text-body-tertiary">
                            Posisi
                          </label>
                          <input
                            type="text"
                            className="in-edit-profile form-control"
                            placeholder="Masukkan posisi"
                            value={expPos}
                            onChange={(e) => setExpPos(e.target.value)}
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
                                value={expCompany}
                                onChange={(e) => setExpCompany(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label text-body-tertiary">
                                Bulan/tahun
                              </label>
                              <input
                                type="text"
                                className="in-edit-profile form-control"
                                placeholder="Masukkan bulan dan tahun. Cth : 07-2020"
                                value={expDate}
                                onChange={(e) => setExpDate(e.target.value)}
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
                            value={expDesc}
                            onChange={(e) => setExpDesc(e.target.value)}
                            rows="7"
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <div
                            id="form-file"
                            className="align-items-center justify-content-center d-flex"
                            onClick={() =>
                              document.querySelector(".img-selector").click()
                            }
                          >
                            <input
                              className="form-control img-selector"
                              type="file"
                              onChange={({ target: { files } }) => {
                                if (files[0]) {
                                  setExpImg(files[0]);
                                }
                                setExpImgName(files[0].name);
                                setExpViewImg(URL.createObjectURL(files[0]));
                              }}
                              hidden
                            />

                            {expImg ? (
                              <img
                                className="img-preview"
                                src={expViewImg}
                                alt="Logo Perusahaan"
                              />
                            ) : (
                              <>
                                <FontAwesomeIcon
                                  icon={faImage}
                                  style={{
                                    fontSize: "100px",
                                    color: "#5e50a1",
                                  }}
                                />
                                <p>
                                  Tidak ada logo. Harap masukkan logo
                                  perusahaan.
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="d-grid">
                          <button
                            id="btn-save"
                            type="submit"
                            className="btn btn-tertiary fw-semibold pt-2 pb-2"
                          >
                            Tambah pengalaman kerja
                          </button>
                        </div>
                      </form>
                      {/* <div className="d-grid mt-3">
                        {experience.map((item, key) => (
                          <div className="card mt-3" key={key}>
                            <div className="row g-0">
                              <div className="col-md-2">
                                <img
                                  src={URL.createObjectURL(item.photo)}
                                  className="img-fluid rounded-start p-3"
                                  alt="Logo Perusahaan"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-10">
                                <div className="card-body">
                                  <h5 className="card-title fw-semibold">
                                    {item.position}
                                  </h5>
                                  <h6 className="card-subtitle text-body-tertiary">
                                    {item.company}
                                  </h6>
                                  <span className="text-body-tertiary">
                                    {item.date}
                                  </span>
                                  <p className="card-text">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div> */}
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
