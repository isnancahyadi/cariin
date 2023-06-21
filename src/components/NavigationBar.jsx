import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <div className="row align-items-center">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="brand-logo col-auto">
              <Link className="link" href="/">
                <img
                  id="logo"
                  src="/assets/icon/logo-cariin-v2.svg"
                  alt="Logo"
                  width="auto"
                  height="50"
                />
              </Link>
            </div>
            <div className="action col-auto">
              <div className="row align-items-center">
                <div className="btn-login col-auto">
                  <Link href="/login">
                    <button
                      type="button"
                      className="btn btn-secondary border-2"
                    >
                      Masuk
                    </button>
                  </Link>
                </div>
                <div className="btn-regis col-auto">
                  <Link href="/register">
                    <button type="button" className="btn btn-primary border-2">
                      Daftar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
