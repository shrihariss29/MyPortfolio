import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, githubLink, backgroundColor, imageSrc }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={imageSrc} className="card-img-top projimg" alt="Project" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={githubLink} target="_blank" className="btn btn-primary">
          GitHub link
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="main-projects">
      <p className="quote animate" style={{ fontSize: "35px" }}>
        Works I did that excites me
      </p>
      <div className="project-card">
        <ProjectCard
          title="Full stack quiz application with Node.js, Express.js, and Postgres"
          description="This is a backend project where the user's name is stored in the database initially and allows them to play the fun quiz. After the quiz is finished, it will view the high score. Frontend is built with embedded JavaScript and backend is done with Node.js."
          githubLink="https://github.com/shrihariss29/Quish"
          backgroundColor="#F2AFEF"
          imageSrc={require("../assets/Htmlpic.png")}
        />
        <ProjectCard
          title="Credit card fraud detection using machine learning and deep learning"
          description="This is my project in which I took several machine learning algorithms and convolutional neural network and passed them through the 'creditcard.csv' dataset. I noticed convolutional neural network performs better than the machine learning algorithms taken."
          githubLink="https://github.com/shrihariss29/Credit-card-fraud-project"
          backgroundColor="blanchedalmond"
          imageSrc={require("../assets/Mldlpic.png")}
        />
        <ProjectCard
          title="Portfolio website using React.js, HTML, and CSS"
          description="This project is done using React.js primarily. This portfolio contains all the necessary information about myself. It is hosted via GitHub pages. This has the scope of many future add-ons which can be added in future."
          githubLink="https://github.com/shrihariss29/Portfolio-2"
          backgroundColor="#96EFFF"
          imageSrc={require("../assets/Htmlpic.png")}
        />
        <ProjectCard
          title="Data analysis using titanic.csv dataset"
          description="Data analysis using the Titanic dataset is based on the sinking of Titanic ship. It consists of data of passengers who travelled in the ship during the accident. Based on the specific passenger's sex, age, ticket type, and other parameters, chances of their survival rate is calculated."
          githubLink="https://github.com/shrihariss29/Titanic-dataset-project"
          backgroundColor="#C7DCA7"
          imageSrc={require("../assets/dapic.png")}
        />
        <ProjectCard
          title="Machine learning - basic to advanced (Certification)"
          description="This is a course where I started to learn about machine learning and data analytics. It is very fascinating to learn it because it feels like we are predicting the future. Learnt the deep intricacies and insights in this area."
          githubLink={require("../assets/MLcertificate.png")}
          backgroundColor="#DDE6ED"
          imageSrc={require("../assets/decisiontree.png")}
        />
        <ProjectCard
          title="Excel basics for data analytics (Certification)"
          description="Working with Microsoft Excel is a very important skill for a data analyst. Learnt many applications of Excel and felt that it is a very underrated and useful tool. Had a chance to use it in my real life applications also."
          githubLink={require("../assets/Excelcertificate.png")}
          backgroundColor="#FFBF9B"
          imageSrc={require("../assets/excellogo.jpg")}
        />
      </div>
      <footer>Developed by Shrihari</footer>
    </div>
  );
};

export default Projects;

