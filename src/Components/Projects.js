import React from 'react';

import styled from 'styled-components'
import anywhere from '../Assets/images/anywherefitness.JPG'
import insightly from '../Assets/images/reactblog.JPG'

const ProjectsStyle = styled.div`
    a:visited {
        color: black;
    }

    p {
        font-size: 32px;
        width: 40px;
        margin: 0 auto;
        text-decoration: underline;
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
                        <a href="https://anywherelanding.now.sh/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                    </div>
                </div>
                <div className="project">
                    <img src={insightly} alt="Insightly" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Insightly</h2>
                        <p>Insightly provides a clutter-free platform for writers to engage with their followers</p>
                        <a href="https://getinsightly.com/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
    );
};

export default Projects;