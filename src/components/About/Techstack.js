import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiPython,
  DiMongodb,
  DiMysql,
  DiGit,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
} from "react-icons/di";

import {
  SiOpencv,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiTableau,
  SiPowerbi,
  SiFlask,
  SiPlotly,
  SiStreamlit,
} from "react-icons/si";

const techStackData = [
  { icon: <DiPython />, name: "Python" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiHtml5 />, name: "HTML" },
  { icon: <DiCss3 />, name: "CSS" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiOpencv />, name: "OpenCV" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiKeras />, name: "Keras" },
  { icon: <SiScikitlearn />, name: "Scikit-learn" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <SiPowerbi />, name: "Power BI" },
  { icon: <SiStreamlit />, name: "Streamlit" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiPlotly />, name: "Plotly" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <div>{tech.icon}</div>
          <div style={{ marginTop: "10px", fontSize: "1rem", color: "white" }}>
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
