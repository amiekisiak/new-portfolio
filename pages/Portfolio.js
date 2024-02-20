import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import proj1 from '../../public/proj1.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3.png';
import proj4 from '../../public/proj4.png';
import proj5 from '../../public/proj5.png';
import proj6 from '../../public/proj6.png';

export const Portfolio = () => {
    const projects = [
      {
        title: "workday-planner",
        description: "App that allows a user to save events for each hour of the day",
        imgUrl: proj1,
        githubUrl: "https://github.com/amiekisiak/workday-planner",
        demoUrl: "https://amiekisiak.github.io/workday-planner/",
      },
      {
        title: "Bootstrap portfolio",
        description: "Portfolio layout using the Bootstrap CSS Framework",
        imgUrl: proj2,
        githubUrl: "https://github.com/amiekisiak/Bootstrap-Portfolio",
        demoUrl: "https://amiekisiak.github.io/Bootstrap-Portfolio/",
      },
      {
        title: "my-portfolio",
        description: " Professional portfolio website created using HTML and CSS",
        imgUrl: proj3,
        githubUrl: "https://github.com/amiekisiak/my-portfolio",
        demoUrl: "https://amiekisiak.github.io/my-portfolio/",
      },
      {
        title: "weather-info",
        description: "Weather dashboard with form inputs",
        imgUrl: proj4,
        githubUrl: "https://github.com/amiekisiak/weather-info",
        demoUrl: "https://amiekisiak.github.io/weather-info/",
      },
      {
        title: "my-coding-quiz",
        description: "Timed coding quiz with multiple-choice questions with added sounds ",
        imgUrl: proj5,
        githubUrl: "https://github.com/amiekisiak/my-coding-quiz",
        demoUrl: "https://amiekisiak.github.io/my-coding-quiz/",
      },
      {
        title: "tasty-facts",
        description: "Team project. An app allowing user to find a recipes from around the worldand to learn facts about the country of choice.",
        imgUrl: proj6,
        githubUrl: "https://github.com/vaselisk999/tasty-facts",
        demoUrl: "https://vaselisk999.github.io/tasty-facts/",
      },
    ];
  
    const [isPaused, setIsPaused] = useState(false);
  
    const handleCardClick = () => {
      setIsPaused(true);
    };
  
    return (
      <section className="project-card" id="project-card">
     <Container className="project-card__item slide-in">
          <TrackVisibility>
            {({ isVisible }) => (
              <div>
                <h2 className="projects-heading" id="heading">My Projects</h2>
                <p className="projects-description" id="proj-des">Please take a look at some of my projects below</p>
  
                <Row>
                  {projects.map((project) => (
                    <Col lg={4} mb={6} key={project.title}>
                      <div className="project-card__item">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          githubUrl={project.githubUrl}
                          demoUrl={project.demoUrl}
                          handleCardClick={handleCardClick}
                          isPaused={isPaused}
                        />
                        <a
                          className="project-card__button"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>
    );
  };
  
  export default Portfolio;