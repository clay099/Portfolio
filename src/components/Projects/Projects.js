import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import "./Projects.css";
import projectsList from "./projectsList";
import { Card, CardDeck } from "react-bootstrap";

const Projects = () => {
	return (
		<section id="projects">
			<Card className="shadow p-3 mb-5 bg-white rounded">
				<SectionHead title="Projects" />
				<CardDeck>
					{projectsList.map((project) => (
						<Card style={{ width: "500px" }}>
							<Card.Header>
								<strong>{project.title}</strong>
							</Card.Header>
							<Card.Img
								variant="top"
								src={project.img}
								alt="Project Image"
							/>
							<Card.Body>
								<Card.Text>{project.summary}</Card.Text>
								<Card.Link
									href={project.githubLink}
									target="_blank"
								>
									<i class="fab fa-github"></i>
								</Card.Link>
								<Card.Link
									href={project.webLink}
									target="_blank"
								>
									<i class="fas fa-external-link-alt"></i>
								</Card.Link>
							</Card.Body>
							<p className="projects-description">
								{project.description}
							</p>
						</Card>
					))}
				</CardDeck>
			</Card>
		</section>
	);
};

export default Projects;
