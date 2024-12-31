import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/job");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // console.log(data);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Amartek
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-dark d-flex align-items-center gap-2"
              >
                <span>Sign In</span>
              </a>
              <a
                href="#"
                className="btn btn-outline-dark d-flex align-items-center gap-2"
              >
                <span>Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {/* Hero Banner */}
      <section className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-lg-7">
            <h1 className="display-4 fw-bold text-center text-lg-start">
              Grow your skill <span className="d-block">and advance your</span>{" "}
              career with Amartek
            </h1>
            <p className="mt-3 text-center text-lg-start">
              Enhance your expertise and elevate your career with Fasilkom,
              where growth and opportunities align to fuel your success.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-3">
              <a
                href="#"
                className="btn btn-dark d-flex align-items-center gap-2"
              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.828 8l-3.646 3.646a.5.5 0 1 0 .708.708l4.242-4.243a.5.5 0 0 0 0-.707l-4.242-4.243a.5.5 0 0 0-.708.708L10.828 8z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h9.793a.5.5 0 0 1 0 1H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="btn btn-outline-dark d-flex align-items-center gap-2"
              >
                Contact Support
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div
              className="position-relative border border-secondary rounded-3 shadow"
              style={{
                width: "90%",
                height: "24rem",
                background: "url('/meet.jpg') center/cover",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-about">
        <div className="container">
          <div className="row g-2">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <div>
                <h1 className="text-3xl fw-bold lh-base">
                  We didn't overhaul, we just{" "}
                  <span className="d-sm-block">made jobs effortless.</span>
                </h1>
                <p className="mt-1 text-muted">
                  We didn’t set out to revolutionize the entire system; we
                  focused on refining the details, creating a seamless,
                  stress-free experience that makes finding jobs easier,
                  quicker, and more intuitive for everyone.
                </p>
                <p className="mt-3 text-muted">
                  Our goal wasn’t to disrupt, but to enhance—making every step
                  in the internship search process as smooth as possible.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex align-items-center gap-4 justify-content-center">
              <div
                style={{
                  width: "256px",
                  height: "320px",
                  background: "url('/teamwork.jpg') top/cover",
                }}
              ></div>
              <div
                style={{
                  width: "256px",
                  height: "320px",
                  background: "url('/teamwork2.jpg') top/cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Section */}
      <section className="min-vh-100">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">
            Discover your next career move with us today!
          </h1>
          <p className="mt-2 mb-4 text-muted">
            Embark on a transformative journey where your ambitions meet
            boundless opportunities—discover your next career move with us today
            and unlock the future you deserve.
          </p>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex">
              <input
                type="text"
                className="form-control rounded-0 rounded-start"
                placeholder="Search"
              />
              <button className="btn btn-dark rounded-0 rounded-end">
                Search
              </button>
            </div>
            <a href="#" className="btn btn-dark d-flex align-items-center">
              <span className="me-2">View More</span>
              <i className="bi bi-arrow-right-circle fs-4"></i>
            </a>
          </div>
          <div className="row g-4"></div>
        </div>

        {/* Card */}
        <div className="container py-5">
          <div className="row g-4">
            {/* Card 1 */}
            {data.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="card border-1 shadow-md position-relative">
                  <div className="d-flex gap-2 bg-white p-2">
                    <div
                      className="border border-secondary rounded d-flex align-items-center justify-content-center"
                      style={{ width: "5rem", height: "5rem" }}
                    >
                      <img
                        src={item.path}
                        alt={item.jobTitle}
                        className="img-fluid"
                      />
                    </div>
                    <div className="align-self-center">
                      <h5 className="fw-bold mb-0">{item.jobTitle}</h5>
                      <h6 className="fw-semibold text-muted">
                        {item.fullname}
                      </h6>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="p-2">
                    <div className="mb-2">
                      <div className="d-flex gap-2 align-items-center">
                        <span>Jakarta</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <span>Rp. {item.sallary}</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <span>{item.jobTypeName}</span>
                      </div>
                    </div>
                    <div className="bg-dark p-2 rounded">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-white small">
                          10 Januari 2025
                        </span>
                        <span className="badge bg-secondary">
                          Junior Intern
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="copyright">
        &copy; 2024{" "}
        <strong>
          <span id="footerProject">Amartek</span>
        </strong>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default Landing;
