import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Google-clone using react 🎉",
    description:
      "This is a Google search engine clone built using React, where I integrated the Google Custom Search API to fetch and display real-time search results",
    url: "https://spectacular-dolphin-3d2462.netlify.app/",
  },
  {
    title: "TODO app ",
    description:
      "This is a simple yet powerful Todo app built using React and Redux Toolkit. It allows users to manage their tasks efficiently by adding, updating, and deleting todos. The app leverages Redux Toolkit for state management, ensuring a smooth and scalable experience.",
    url: "https://stalwart-bublanina-e7a3b9.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
