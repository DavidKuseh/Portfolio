import React from 'react';

import styled from 'styled-components'
import anywhere from '../Assets/images/anywherefitness.JPG'
import insightly from '../Assets/images/reactblog.JPG'
import usemytools from "../Assets/images/usemytools.JPG"
import github from '../Assets/icons/github.png'

const ProjectsStyle = styled.div`
    margin-top: 140px;

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
            font-size: 32px;
        }

        p {
            width: 70%;
            margin: 0 auto;
            font-size: 25px;
        }

        a {
            margin: 20px auto;
            font-size: 20px;
            text-decoration:none;
            width: 80px;
            border-radius: 40%;
            padding: 5px;
        }

        .visit {
            display: flex;
            justify-content: space-between;
            width:30%;
            margin: 0 auto;
        }

        .visit a:nth-child(1):hover {
            background-color: #008DD5;
        }

        .tech {
        margin: 20px auto;
        width: 250px;

            p {
            font-size: 17px;
            color: #008DD5;
            }
        }
    }

    @media(max-width:768px) {
        .project {
            display: flex;
            flex-direction: column;
        }

        img {
            margin: 15px auto;
        }
    }

    @media(max-width:550px) {
        img:nth-child(1) {
            width: 400px;
        }

        .proj img {
            width: 30px;
        }
    }

    @media(max-width:480px) {
        img:nth-child(1) {
            visibility: hidden;
            height: 0px;
        }
    }

`
const Projects = () => {
    return (
        <ProjectsStyle>
            <p>Projects</p>
            <div className="projects">
                <div className="project">
                    <img src={anywhere} alt="anywhere fitness" className="proj-pic" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Anywhere Fitness</h2>
                        <p>A web application that facilitates workout sessions conveniently</p>
                        <div className="tech">
                            <p>React</p>
                            <p>Node</p>
                            <p>Express</p>
                        </div>
                        <div className="visit">
                            <a href="https://anywherelanding.now.sh/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                            <a href="https://github.com/BW-Anywhere-Fitness-Nov-18-22/back-end" rel = "noopener noreferrer" target="_blank"><img src={github} alt="github" width="30px" height="30px"/></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={insightly} alt="Insightly" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Insightly</h2>
                        <p>Insightly provides a clutter-free platform for writers to engage with their followers</p>
                        <div className="tech">
                            <p>React</p>
                            <p>EditorJS</p>
                            <p>Node</p>
                            <p>Express</p>
                        </div>
                        <div className="visit">
                            <a href="https://getinsightly.com/" rel = "noopener noreferrer" target="_blank">Visit site</a>
                            <a href="https://github.com/LABS-EU3/react_blog_backend" rel = "noopener noreferrer" target="_blank"><img src={github} alt="github" width="30px" height="30px"/></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={usemytools} alt="use my tools" height="350px" width="500px"/>
                    <div className="proj">
                        <h2>Use my Tools</h2>
                        <p>A reliable platform to rent and borrow tools of all kinds</p>
                        <div className="tech">
                            <p>React</p>
                            <p>Java</p>
                        </div>
                        <div className="visit">
                            <a href="https://usemytoolsonline.netlify.com" rel = "noopener noreferrer" target="_blank">Visit site</a>
                            <a href="https://github.com/Build-Week-Use-My-Tools/FE-use-my-tools" rel = "noopener noreferrer" target="_blank"><img src={github} alt="github" width="30px" height="30px"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
    );
};

export default Projects;