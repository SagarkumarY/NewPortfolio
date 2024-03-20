import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Button} from '@chakra-ui/react'

import { Github, Eye } from "react-bootstrap-icons";

function ProjectFirstCards({
  title,
  description,
  imgUrl,
  projectLink,
  githubLink,
}) {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx myStyleInProject">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="card-buttons">
              <Button
                  className="eye-btn btn btn-primary flex justify-center items-center h-10"
                variant="primary"
                href={projectLink}
                target="_blank"
              >
                <Eye className="eye-icon" />
              </Button>
              {githubLink && ( // Render GitHub link only if it's provided
                <Button
                  className="github-btn flex justify-center items-center h-10 btn btn-outline-dark "
                
                  href={githubLink}
                  target="_blank"
                >
                  <Github className="github-icon "  />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectFirstCards;
