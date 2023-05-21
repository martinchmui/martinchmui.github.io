import React from 'react';
import '../styles/Projects.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import express from '../assets/express.png';
import { Slide } from 'react-slideshow-image';
import { projects } from '../data';

const Projects = () => {
  const skillImages = {
    html,
    css,
    javascript,
    typescript,
    react,
    redux,
    express,
  };
  return (
    <div className="projectsdiv container" id="projects">
      <div>
        <h1 className="heading">Projects</h1>
      </div>
      {projects.map((project, index) => {
        const isEvenIndex = index % 2 === 0;
        const hasMultipleImages = project.images.length > 1;

        const projectImageClassNames = `project_image ${
          isEvenIndex ? 'borderright' : 'borderleft'
        } ${hasMultipleImages ? 'slideDiv' : ''}`;

        return (
          <div className={`project ${isEvenIndex ? 'right' : ''}`} key={index}>
            <div className={projectImageClassNames}>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                {hasMultipleImages ? (
                  <div className="slide-container">
                    <Slide indicators={false} arrows={false}>
                      {project.images.map((slideImage, slideIndex) => (
                        <div className="each-slide" key={slideIndex}>
                          <img
                            className="slideImage"
                            src={slideImage}
                            alt={String(slideIndex)}
                          />
                        </div>
                      ))}
                    </Slide>
                  </div>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="siteimage"
                  />
                )}
              </a>
            </div>
            <div className="project_info">
              <div className="description">
                {project.downloadUrl && (
                  <a
                    className="download"
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h2>
                      {project.title}{' '}
                      <i className="fa-solid fa-download downloadIcon"></i>
                    </h2>
                  </a>
                )}
                {!project.downloadUrl && <h2>{project.title}</h2>}
                <p>{project.description}</p>
                <div className="skillsrow">
                  {project.skills.map((skill) => (
                    <img
                      className="skill"
                      src={skillImages[skill]}
                      alt={skill}
                      key={skill}
                    />
                  ))}
                </div>
              </div>
              <div className="project_links">
                <a
                  className="demo linkbutton"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  className="source linkbutton"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i> View Source
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
