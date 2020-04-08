import React from 'react';

import styled from 'styled-components'
import anywhere from '../Assets/images/anywherefitness.JPG'
import insightly from '../Assets/images/reactblog.JPG'
import github from '../Assets/icons/github.png'

const ProjectsStyle = styled.div`
    a:visited {
        color: black;
    }

    p {
        font-size: 32px;
        width: 40px;
        margin: 0 auto;
    }

    .projects {
        width: 85%;
        margin: 40px auto;
    }

    .projects div {
        display: flex;
    }

    .project {
        margin: 60px auto;
        border: 5px solid black;
        padding: 15px;
    }

    .proj {
        display: flex;
        flex-direction: column;
        margin: auto;

        h2 {
            text-decoration: underline;
            margin: 0 auto;
        }

        p {
            width: 70%;
            margin: 0 auto;
            font-size: 32px;
        }

        a {
            margin-top: 30px;
            font-size: 20px;
        }

        .tech {
        margin: 20px auto;
        width: 250px;

            p {
            font-size: 17px;
            color: blue;
            }
        }
    }


`

const Projects = () => {
    return (
        <ProjectsStyle>
            <p>Projects</p>
            <div className="projects">
                <div className="project">
                    <img src={anywhere} alt="anywhere fitness" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Anywhere Fitness</h2>
                        <p>A web application that facilitates workout sessions conveniently</p>
                        <div className="tech">
                            <p>ReactJS</p>
                            <p>NodeJS</p>
                            <p>ExpressJS</p>
                        </div>
                        <a href="https://anywherelanding.now.sh/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                        <a href="https://github.com/BW-Anywhere-Fitness-Nov-18-22/back-end" rel = "noopener noreferrer" target="_blank"><img src={github} alt="github" width="30px" height="30px"/></a>
                    </div>
                </div>
                <div className="project">
                    <img src={insightly} alt="Insightly" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Insightly</h2>
                        <p>Insightly provides a clutter-free platform for writers to engage with their followers</p>
                        <div className="tech">
                            <p>ReactJS</p>
                            <p>EditorJS</p>
                            <p>NodeJS</p>
                            <p>ExpressJS</p>
                        </div>
                        <a href="https://getinsightly.com/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                        <a href="https://github.com/LABS-EU3/react_blog_backend" rel = "noopener noreferrer" target="_blank"><img src={github} alt="github" width="30px" height="30px"/></a>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
    );
};

export default Projects;