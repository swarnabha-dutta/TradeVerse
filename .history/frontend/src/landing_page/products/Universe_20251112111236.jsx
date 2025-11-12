/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Universe() {
    return (
        <div className="container mt-5 text-center">
        {/* Top info text */}
        <p className="text-muted">
            Want to know more about our technology stack? Check out the{" "}
            <a
            href="#"
            style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}
            >
            Zerodha.tech
            </a>{" "}
            blog.
        </p>

        {/* Main Heading */}
        <h2 className="fw-semibold mt-5">The Zerodha Universe</h2>
        <p className="text-muted mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
        </p>

        {/* Row 1 */}
        <div className="row justify-content-center text-center">
            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/fundhouseLogo.png"
                alt="Zerodha Fund House"
                style={{ width: "130px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">Zerodha Fund House</h6>
            <p className="text-muted small px-4">
                Our asset management venture that is creating simple and transparent
                index funds to help you save for your goals.
            </p>
            </div>

            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/sensibullLogo.png"
                alt="Sensibull"
                style={{ width: "130px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">SENSIBULL</h6>
            <p className="text-muted small px-4">
                Options trading platform that lets you create strategies, analyze
                positions, and examine data points like open interest, FII/DII, and
                more.
            </p>
            </div>

            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/tijoriLogo.png"
                alt="Tijori"
                style={{ width: "110px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">TIJORI</h6>
            <p className="text-muted small px-4">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
            </p>
            </div>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-center text-center">
            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/streakLogo.png"
                alt="Streak"
                style={{ width: "120px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">Streak</h6>
            <p className="text-muted small px-4">
                Systematic trading platform that allows you to create and backtest
                strategies without coding.
            </p>
            </div>

            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/smallcaseLogo.png"
                alt="Smallcase"
                style={{ width: "120px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">smallcase</h6>
            <p className="text-muted small px-4">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
            </p>
            </div>

            <div className="col-12 col-md-4 mb-5">
            <img
                src="media/images/dittoLogo.png"
                alt="Ditto"
                style={{ width: "120px", height: "auto" }}
            />
            <h6 className="mt-3 fw-semibold">ditto</h6>
            <p className="text-muted small px-4">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
            </p>
            </div>
        </div>

        {/* Signup Button */}
        <div className="text-center mb-5">
            <button
            className="btn btn-primary px-4 py-2 fs-6"
            style={{ borderRadius: "5px" }}
            >
            Sign up for free
            </button>
        </div>
        </div>
    );
}

export default Universe;
