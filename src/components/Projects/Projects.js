import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import { Card } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
	return (
		<section id="projects">
			<Card className="shadow p-3 mb-5 bg-white rounded">
				<SectionHead title="Projects" />
				<p>projects go here</p>
			</Card>
		</section>
	);
};

export default Projects;
