/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
    return (
        <section
        className="container-fluid text-light"
        id="supportHero"
        style={{ backgroundColor: "#387ed1", minHeight: "400px" }}
        >
        {/* Top Section */}
        <div
            className="d-flex justify-content-between align-items-center px-5 py-4"
            id="supportWrapper"
        >
            <h4 className="fw-semibold">Support Portal</h4>
            <a
            href="#"
            className="text-white fw-semibold"
            style={{ textDecoration: "underline" }}
            >
            Track Tickets
            </a>
        </div>

        {/* Main Section */}
        <div className="row px-5 pb-5">
            {/* Left Column */}
            <div className="col-md-6 p-4">
            <h1 className="fs-4 fw-semibold mb-4">
                Search for an answer or browse help topics to create a ticket
            </h1>

            <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
                className="form-control mb-4 p-3"
                style={{
                borderRadius: "6px",
                border: "none",
                outline: "none",
                width: "100%",
                maxWidth: "600px",
                }}
            />

            <div className="d-flex flex-wrap gap-3">
                <a href="#" className="text-white text-decoration-underline">
                Track account opening
                </a>
                <a href="#" className="text-white text-decoration-underline">
                Track segment activation
                </a>
                <a href="#" className="text-white text-decoration-underline">
                Intraday margins
                </a>
                <a href="#" className="text-white text-decoration-underline">
                Kite user manual
                </a>
            </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6 p-4">
            <h1 className="fs-4 fw-semibold mb-3">Featured</h1>
            <ol className="text-white">
                <li className="mb-2">
                <a
                    href="#"
                    className="text-white text-decoration-underline"
                >
                    Current Takeovers and Delisting - January 2024
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-white text-decoration-underline"
                >
                    Latest Intraday leverages - MIS & CO
                </a>
                </li>
            </ol>
            </div>
        </div>
        </section>
    );
}

export default Hero;
