import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();

  const [access, setAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAccess(!!token);
  }, []);

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
                {access ? (
                  <>
                    <div className="col-auto me-3 ms-3">
                      <FontAwesomeIcon
                        icon={faBell}
                        size="xl"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="col-auto me-3 ms-3">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="col-auto me-3 ms-3">
                      <img
                        className="img-profile rounded-circle"
                        src="/assets/img/profile/profile.jpg"
                        alt="Profile"
                        onClick={(e) => router.replace("/profile")}
                      />
                    </div>
                  </>
                ) : (
                  <>
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
                        <button
                          type="button"
                          className="btn btn-primary border-2"
                        >
                          Daftar
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
