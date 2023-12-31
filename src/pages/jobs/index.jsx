import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { storeJob } from "@/store/reducer/jobSlice";
import Swal from "sweetalert2";
import axios from "axios";
import _debounce from "lodash/debounce";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import SkeletonLoad from "@/components/SkeletonLoad";

const Jobs = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [jobList, setJobList] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);

  const removeData = (data, id) => {
    return data.filter((obj) => obj.id !== id);
  };

  useEffect(() => {
    setIsLoading(true);

    if (querySearch !== "") {
      axios
        .get(
          `${
            process.env.NEXT_PUBLIC_JOB
          }/filter?keyword=${querySearch.toLowerCase()}`
        )
        .then((response) => {
          setJobList(response?.data?.data);
          setTotalPage(0);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_JOB}?page=${currentPage}`)
        .then((response) => {
          const lastData = removeData(response?.data?.data?.rows, user?.id);

          setJobList(lastData);
          setTotalPage(response?.data?.data?.total_page);
          dispatch(storeJob(response?.data?.data?.rows));
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [querySearch, currentPage]);

  const pageNumber = [];
  for (let index = 1; index <= totalPage; index++) {
    pageNumber.push(index);
  }

  const handleSearch = (keyword) => {
    setQuerySearch(keyword);
  };

  const debounce = useCallback(_debounce(handleSearch, 1000), []);

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
              onChange={(e) => {
                debounce(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                }
              }}
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
              {isLoading ? (
                <SkeletonLoad type={"listjob"} />
              ) : !jobList.length ? (
                <div className="text-center">
                  <h5 className="text-body-tertiary">
                    Data {querySearch} tidak ditemukan
                  </h5>
                </div>
              ) : (
                jobList.map((item, key) => (
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
                          <h2 className="card-title">{item.fullname}</h2>
                          <h6 className="card-subtitle mb-1 mt-1 text-body-secondary">
                            {item.job_title}
                          </h6>
                          <p className="text-body-tertiary m-0">
                            <FontAwesomeIcon icon={faLocationDot} />{" "}
                            {item.domicile === "-"
                              ? "Lokasi tidak diketahui"
                              : item.domicile}
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
                        <Link href={`/jobs/${item.id}`}>
                          <button
                            type="button"
                            className="btn btn btn-primary border-2"
                          >
                            Lihat Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                    {key === jobList.length - 1 ? null : (
                      <hr className="mt-5 mb-5" />
                    )}
                  </>
                ))
              )}
            </div>
          </div>

          {querySearch !== "" ? (
            <></>
          ) : (
            <div className="pagination">
              <div className="container d-flex justify-content-center align-items-center">
                <Link
                  href=""
                  style={{
                    pointerEvents: `${currentPage === 1 ? "none" : "auto"}`,
                  }}
                >
                  <button
                    type="button"
                    className="btn btn btn-secondary border-1"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                    style={{
                      width: "50px",
                      height: "50px",
                      padding: "0",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                    disabled={currentPage === 1}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                </Link>
                {pageNumber.map((item, key) => (
                  <Link href="" key={key}>
                    <button
                      type="button"
                      className={`btn btn btn-secondary border-1 ${
                        currentPage === item ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(item)}
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: "0",
                        marginLeft: ".5rem",
                        marginRight: ".5rem",
                      }}
                    >
                      <h6 className="m-0 p-0">{item}</h6>
                    </button>
                  </Link>
                ))}
                <Link
                  href=""
                  style={{
                    pointerEvents: `${
                      currentPage === pageNumber.length ? "none" : "auto"
                    }`,
                  }}
                >
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
                    disabled={currentPage === pageNumber.length}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Jobs;
