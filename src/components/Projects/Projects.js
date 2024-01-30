import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Amazon from "../../Assets/Projects/Amazon.jpg"
import FoodOrderApp from "../../Assets/Projects/FoodOrderApp.jpg"
import LavyaBlockPrints from "../../Assets/Projects/LavyaBlockPrints.jpg"
import onlineFileManager from "../../Assets/Projects/onlineFileManager.jpg"
import SriAurobindo from "../../Assets/Projects/SriAurobindo.jpg"





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon Clone"
              description="The Amazon clone project, developed with React and Firebase, seamlessly integrates user-friendly interfaces and robust backend services."
              ghLink="https://github.com/Nikhil1145/Amazon-Clone"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineFileManager}
              isBlog={false}
              title="Online File Manager"
              description="The Online Storage Manager project, developed with Svelte and Firebase, offers a seamless and secure platform for users to manage their digital assets."
              // demoLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              ghLink="https://github.com/Nikhil1145/Firebase-FileExplorer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sri Aurobindo"
              description="The Sri Aurobindo Website, meticulously crafted with Svelte and Firebase, serves as a comprehensive digital platform dedicated to the life and teachings of Sri Aurobindo."
              // demoLink="https://github.com/soumyajit4419/Editor.io"
              ghLink="https://github.com/Nikhil1145/Sri-Aurobindo2"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LavyaBlockPrints}
              isBlog={false}
              title="Lavya Block Prints"
              description="Lavya Block Prints, an E-commerce website crafted with React JS, brings the timeless art of block printing to the digital forefront. This platform offers a visually captivating and user-friendly interface, allowing customers to explore and purchase exquisite block-printed products.."
              // demoLink="https://github.com/soumyajit4419/Plant_AI"
              ghLink="https://github.com/Nikhil1145/LavyaPrints"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodOrderApp}
              isBlog={false}
              title="Food Order App"
              description="The Food Order App, developed with React and Firebase, offers a seamless and personalized dining experience. Users can explore a diverse menu and place orders"
              ghLink="https://github.com/Nikhil1145/Food-Order-app-React"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
