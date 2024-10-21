import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "A passionate front-end developer with a love for building clean, functional, and visually engaging web applications.";

const skillsList = [
  "HTML5",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "ReactJS",
  "Database Management",
  "MySQL",
  "Mongodb",
  "Git & Github",
  
];

const detailOrQuote =
  "I'm a dedicated front-end developer who enjoys turning ideas into functional and visually appealing web applications. With experience in React, JavaScript, and modern web technologies, I focus on delivering clean, efficient solutions. I'm passionate about continuous learning and building web experiences that make a difference.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
