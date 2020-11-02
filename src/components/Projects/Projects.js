import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import "./Projects.css";
import projectsList from "./projectsList";
import { Card, CardColumns } from "react-bootstrap";

const Projects = () => {
	return (
		<section id="projects">
			<Card className="shadow p-3 mb-5 bg-white rounded">
				<SectionHead title="Projects" />
				<CardColumns>
					{projectsList.map((project) => (
						<Card style={{ minWidth: "250px" }}>
							<Card.Header>
								<strong>{project.title}</strong>
							</Card.Header>
							<Card.Body>
								<Card.Img
									variant="top"
									src={project.img}
									alt="Project Image"
								/>
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
						</Card>
					))}
				</CardColumns>
			</Card>
		</section>
	);
};

export default Projects;
