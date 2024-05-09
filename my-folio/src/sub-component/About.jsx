import React from "react";
import "./About.css";

function About() {
  return (
    <div className="middle-container2">
        <p className="about">1. About ME :</p>
      <section>
        <h2>Personal Introduction:</h2>
        <p>
          Hey there! I'm Aadarsh Gupta, from Indore, also known as Mini Mumbai
          and hailed as India's Cleanest City. I'm a mix of creativity, being on
          time, dedication, and having clear goals. I believe in strong values
          and ethics, and I'm always full of energy. I'm good at talking to
          people and paying close attention to small details.
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
          , in 2023. I did pretty well, scoring a CGPA of 7.71 out of 10. During
          my college days, I was part of the Developer Hackathon Club -
          Vadodara, and I was even honored with a 70% Merit Scholarship for
          being among the top 10% of students.
        </p>
      </section>

      <section>
        <h2>Interests and Activities:</h2>
        <ul>
          <li>Coding!</li>
          <li>Solving Problmes.</li>
          <li>Travelling.</li>
          <li>Cricket is my go-to sport.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
