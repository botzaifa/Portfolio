import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import adgen from "../../Assets/Projects/adgen.png";
import budget from "../../Assets/Projects/budget.png";
import text from "../../Assets/Projects/text.png";
import movie from "../../Assets/Projects/movie.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import news from "../../Assets/Projects/news.png";

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
              imgPath={adgen}
              isBlog={false}
              title="Native AD Gen"
              description="A multi-language advertisement generator that creates custom-sized images for various platforms like Instagram and YouTube based on user inputs."
              ghLink="https://github.com/botzaifa/NativeADGen"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Budget Buddy"
              description="A personal finance management tool that offers financial calculators, receipt scanning, and chatbot interactions for effective budget tracking."
              ghLink="https://github.com/botzaifa/Finance-Management"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text Summarizer"
              description="A natural language processing tool that summarizes long pieces of text into concise, informative summaries."
              ghLink="https://github.com/botzaifa/Text-Summarizer"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommender System"
              description="A recommendation engine that suggests movies based on user preferences and viewing history."
              ghLink="https://github.com/botzaifa/Movie-Recommendation-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="A tool that analyzes the sentiment behind user-generated text, classifying it as positive, negative, or neutral."
              ghLink="https://github.com/botzaifa/Sentiment-Analyzer"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Bulletin Emotion Tracker"
              description="Python-based News Sentiment Analyzer that visualizes and automates the storage of sentiment analysis using NewsAPI and TextBlob"
              // ghLink=""
              demoLink="https://youtu.be/1vI3Or1KVjI" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/botzaifa/Recipe-Sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
