import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Swal from "sweetalert2";

import { reset, getUser } from "@/store/reducer/userSlice";
import { clearJob } from "@/store/reducer/jobSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state?.user?.data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    if (localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME))
      router.replace("/");
  }, []);

  useEffect(() => {
    dispatch(reset());
    dispatch(clearJob());
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Proses login...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    await axios
      .post(process.env.NEXT_PUBLIC_LOGIN, { email, password })
      .then(({ data }) => {
        // console.log(data);
        // setCookie(process.env.NEXT_PUBLIC_TOKEN_NAME, data?.data?.token, {
        //   sameSite: "strict",
        //   maxAge: 60 * 60 * 24 * 7,
        //   path: "/",
        // });
        localStorage.setItem(
          process.env.NEXT_PUBLIC_TOKEN_NAME,
          data?.data?.token
        );
        dispatch(getUser());
        Swal.fire({
          title: "Login Sukses",
          timer: 2000,
          icon: "success",
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            router.replace("/");
          }
        });
      })
      .catch(({ response }) => {
        Swal.fire({
          title: "Login Gagal",
          text: response?.data?.messages ?? "Kesalahan Server",
          icon: "error",
        });
        console.log(response);
      });
  };

  return (
    <>
      <Head>
        <title>Login | CariIn</title>
      </Head>
      <div className="Login">
        <div id="content" className="container-fluid">
          <div id="login" className="row">
            <div className="login-img col-md-6">
              <div
                className="img-login"
                style={{
                  backgroundImage: "url('/assets/img/img-m-content.jpg')",
                }}
              >
                <div
                  className="img-login"
                  style={{ backgroundColor: "rgba(94, 80, 161, 0.85)" }}
                >
                  <div className="img-login row justify-content-center align-items-center">
                    <h1 id="title" className="text-white lh-base">
                      Temukan developer berbakat & terbaik di berbagai bidang
                      keahlian
                    </h1>
                    <img
                      id="logo"
                      src="/assets/icon/logo-cariin-white-v2.svg"
                      alt="logo"
                      style={{ height: "5%", width: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex col-md-6 align-items-center">
              <div id="form-content" className="container-fluid">
                <h2 className="text-semibold mb-3">Halo, Guys</h2>
                <p className="fs-5 text-muted mb-5">
                  Silahkan login ke dalam akun Anda untuk mengakses ribuan
                  peluang karier menarik di industri teknologi.
                </p>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="input-login form-control"
                      placeholder="Masukkan alamat email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Kata Sandi</label>
                    <input
                      type="password"
                      className="input-login form-control"
                      placeholder="Masukkan kata sandi"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <small className="d-block">
                      <Link
                        href="#"
                        className="text-decoration-none text-muted"
                      >
                        Lupa kata sandi ?
                      </Link>
                    </small>
                  </div>
                  <div className="d-grid">
                    <button
                      id="btn-login"
                      type="submit"
                      className="btn btn-tertiary btn-lg mt-4 fw-semibold"
                    >
                      Log in
                    </button>
                  </div>
                  <small className="txt-login d-block text-center text-muted mt-4">
                    Anda belum punya akun?
                    <Link
                      className="text-decoration-none"
                      href="/register"
                      style={{ color: "#fbb017" }}
                    >
                      {" "}
                      Daftar disini
                    </Link>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
