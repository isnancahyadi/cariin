import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <img
          src="/assets/icon/logo-cariin-white-v2.svg"
          alt="logo"
          height={50}
          width={"auto"}
        />

        <p className="text-white mt-3 mb-5">
          Temukan Peluang Karier Terbaik di Industri Teknologi.
          <br />
          Bergabunglah dengan ribuan profesional IT yang telah sukses menemukan
          karier impian mereka melalui platform kami.
          <br />
          Mari bersama-sama menciptakan masa depan teknologi yang gemilang!
        </p>

        <hr className="solid" style={{ borderTop: "2px solid white" }} />

        <div className="row mt-4 justify-content-between align-items-center">
          <div className="col-auto">
            <p className="text-white m-0">2023 CariIn. All right reserved</p>
          </div>
          <div className="col-auto">
            <div className="row justify-content-between align-items-center gx-5">
              <div className="col-auto">
                <p className="text-white m-0">Telepon</p>
              </div>
              <div className="col-auto">
                <p className="text-white m-0">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
