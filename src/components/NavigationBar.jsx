import Link from "next/link";
import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const NavigationBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // if (getCookie(process.env.NEXT_PUBLIC_TOKEN_NAME)) setIsLogin(true);
    if (localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME))
      setIsLogin(true);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // deleteCookie(process.env.NEXT_PUBLIC_TOKEN_NAME);
    localStorage.clear();
  };

  return (
    <div className="NavigationBar">
      <div className="row align-items-center">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="brand-logo col-auto">
              <Link className="link" href="/">
                <img
                  id="logo"
                  src={"/assets/icon/logo-cariin-v2.svg"}
                  alt="Logo"
                  width="auto"
                  height="50"
                />
              </Link>
            </div>
            <div className="action col-auto">
              <div className="row align-items-center">
                {isLogin ? (
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
                        src={user?.photo}
                        alt="Profile"
                        onClick={toggleDropdown}
                      />
                      {dropdownOpen && (
                        <div
                          className="row dropdown-menu show justify-content-end text-end"
                          style={{ right: "15vh" }}
                        >
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <Link
                                className="text-black text-decoration-none mb-3 text-center"
                                href="/profile"
                              >
                                Profil
                              </Link>
                            </li>
                            <li className="list-group-item">
                              <Link
                                className="text-black text-decoration-none mb-3 text-center"
                                href="/login"
                                onClick={handleLogout}
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
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
