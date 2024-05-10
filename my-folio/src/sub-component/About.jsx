import React from "react";
import "./About.css";

function About() {
  return (
    <div className="middle-container2">
      <div className="main_outer_container">
        <p className="about">1. About ME :</p>
        <section>
          <h2>Personal Introduction:</h2>
          <p>
            Hey there! I'm Aadarsh Gupta, from Indore, also known as Mini Mumbai
            and hailed as India's Cleanest City. I'm a mix of creativity, being
            on time, dedication, and having clear goals. I believe in strong
            values and ethics, and I'm always full of energy. I'm good at
            talking to people and paying close attention to small details.
          </p>
        </section>

        <section>
          <h2>Education:</h2>
          <p>
            I completed my B.Tech in Computer Science and Engineering from{" "}
            <u>
              <a
                href="https://paruluniversity.ac.in/"
                style={{ color: "rgb(100, 255, 218)" }}
              >
                Parul University, Vadodara
              </a>
            </u>
            , in 2023. I did pretty well, scoring a CGPA of{" "}
            <u style={{ color: "rgb(100, 255, 218)" }}>7.71</u> out of 10.
            During my college days, I was{" "}
            <u style={{ color: "rgb(100, 255, 218)" }}>
              part of the Developer Hackathon Club
            </u>{" "}
            - Vadodara, and I was even honored with a 70% Merit Scholarship for
            being among the top 10% of students.
          </p>
        </section>

        <section>
          <h2>Interests and Activities:</h2>
          <ul className="grid_column">
            <li className="list_data">Coding!</li>
            <li className="list_data">Solving Problmes.</li>
            <li className="list_data">Travelling.</li>
            <li className="list_data">Cricket.</li>
            <li className="list_data">Reading.</li>
            <li className="list_data">Team Management.</li>
          </ul>
        </section>
      </div>
      <div className="about_styled_pic">
        <a href="https://github.com/aadarsh2305" className="styled_avatar">
          <div
            className="image-wrapper"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              aria-hidden:true
              style={{ width: "100%", paddingBottom: "112%" }}
            ></div>
            <img
              aria-hidden:true
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j2dOLBH72mp_of9RFXhg2FTmMEpT4kd5DsdZw5YubQ&s"
              alt=""
                style={{
                    position: "relative",
                    // top: "0px",
                    // left: "0px",
                    // width: "100%",
                    // height: "100%",
                    // objectFit: "cover",
                    // opacity: "0",
                    // transitionDelay: "500ms",
                }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
