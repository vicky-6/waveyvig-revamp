import React, { useState, useEffect } from "react";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target); // final value
    if (start === end) return;

    // calculate increment speed
    const totalMilliseconds = duration;
    const incrementTime = Math.abs(Math.floor(totalMilliseconds / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <h4 className="text-info">{count}+</h4>;
};

const About = () => {
  return (
    <section className="py-5 text-white pt-5" style={{ backgroundColor: "#0b1d57", minHeight: "100vh" }}>
      <div className="container pt-4">
        <h2 className="text-center fw-bold text-info mb-3">
          About Zhahi Info Tech
        </h2>
        <p className="text-center mb-5">
          We are a team of passionate technologists devoted to creating
          innovative solutions that drive the digital transformation of
          businesses.
        </p>

        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-md-7">
            <h3 className="text-info mb-3">Our Journey</h3>
            <p>
              <span className="fw-bold fs-3">WaveyVigTech</span> is a premier technology solutions provider based in Tamil Nadu, delivering end-to-end digital services for businesses, startups, and individuals.
            </p>
            <p>
              At <span className="fw-bold fs-3">WaveyVigTech,</span> our team of passionate IT professionals is committed to excellence in <span className="fw-bold"> software development, web design, digital marketing, IT consulting, and technical support.</span> 
            </p>
            <p>
              We believe in the power of technology to <span className="fw-bold"> transform ideas into digital reality,</span> driving innovation, growth, and enhanced experiences for every client we serve.
            </p>
            <div className="mt-4">
              <button className="btn btn-primary me-3">Join Our Team</button>
              <button className="btn btn-outline-info">Partner With Us</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-5">
            <div className="card bg-light text-dark shadow p-3 mb-4">
              <h5 className="fw-bold text-center">Our Impact</h5>
              <div className="row text-center">
                <div className="col-6 p-3">
                  <Counter target={200} duration={2000} />
                  <p>Clients Worldwide</p>
                </div>
                <div className="col-6 p-3">
                  <Counter target={15} duration={2000} />
                  <p>Countries Served</p>
                </div>
                <div className="col-6 p-3">
                  <Counter target={50} duration={2000} />
                  <p>Team Members</p>
                </div>
                <div className="col-6 p-3">
                  <Counter target={300} duration={2000} />
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="card bg-white text-dark shadow p-3">
              <h5 className="fw-bold">Our Values</h5>
              <ul className="mb-0">
                <li>🚀 Innovation-driven approach</li>
                <li>🤝 Client-centric solutions</li>
                <li>🔒 Ethical technology practices</li>
                <li>📈 Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
