import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Project(props) {
  return (
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
            <Card className = "bg-dark text-white" style = {{width : '18rem'}}>
            <Card.Title><span>{project.tile}</span></Card.Title>
            <Card.Img variant="top" src={project.image} />
              <Card.Body>
                  <Card.Text>{project.description}</Card.Text>
              
                    <Button variant = "primary">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        See the Repo!
                      </a>
                    </Button>
                    <Button variant = "primary">
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        See the Live Site!
                      </a>
                    </Button>
              </Card.Body>
            </Card>
        ))}
      </div>
  );
}

export default Project;