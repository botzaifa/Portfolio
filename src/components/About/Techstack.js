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
  // SiSeaborn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiTableau,
  SiPowerbi,
  // SiExcel,
  SiFlask,
  SiPlotly,
  SiStreamlit,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSeaborn />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExcel />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
      </Col>

    </Row>
  );
}

export default Techstack;
