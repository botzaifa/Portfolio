import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiDocker,
  SiGithub,
  SiWindows11,
} from "react-icons/si";

const toolStackData = [
  { icon: <SiWindows11 />, name: "Windows" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiJupyter />, name: "Jupyter" },
  { icon: <SiDocker />, name: "Docker" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackData.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <div>{tool.icon}</div>
          <div style={{ marginTop: "10px", fontSize: "1rem", color: "white" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
