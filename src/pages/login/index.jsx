import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("/api/auth/login", { email, password })
      .then((response) => {
        localStorage.setItem("token", response?.data?.token);

        router.replace(`/profile?user=${response?.data?.token}`);
      })
      .catch(({ response }) => {
        setErrMsg(response?.data?.message ?? "Something wrong in our server");
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
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
