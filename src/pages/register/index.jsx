import Head from "next/head";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register | CariIn</title>
      </Head>
      <div className="Register">
        <div id="content" className="container-fluid">
          <div id="register" className="row">
            <div className="register-img col-md-6">
              <div
                className="img-register"
                style={{
                  backgroundImage: "url('/assets/img/img-m-content.jpg')",
                }}
              >
                <div
                  className="img-register"
                  style={{ backgroundColor: "rgba(94, 80, 161, 0.85)" }}
                >
                  <div className="img-register row justify-content-center align-items-center">
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
                <h2 className="text-semibold mb-2">Halo, Guys</h2>
                <p className="fs-6 text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                      type="text"
                      className="input-register form-control"
                      placeholder="Masukkan nama lengkap"
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="input-register form-control"
                      placeholder="Masukkan alamat email"
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">No. Handphone</label>
                    <input
                      type="text"
                      className="input-register form-control"
                      placeholder="Masukkan no. handphone"
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kata Sandi</label>
                    <input
                      type="password"
                      className="input-register form-control"
                      placeholder="Masukkan kata sandi"
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Konfirmasi Kata Sandi</label>
                    <input
                      type="password"
                      className="input-register form-control"
                      placeholder="Masukkan konfirmasi kata sandi"
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      id="btn-register"
                      type="submit"
                      className="btn btn-tertiary mt-4 fw-semibold"
                      // onClick={handleLogin}
                    >
                      Daftar
                    </button>
                  </div>
                  <small className="txt-register d-block text-center text-muted mt-4">
                    Anda sudah punya akun?
                    <Link
                      className="text-decoration-none"
                      href="/login"
                      style={{ color: "#fbb017" }}
                    >
                      {" "}
                      Masuk disini
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

export default Register;
