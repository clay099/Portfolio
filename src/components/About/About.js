import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import { Card } from "react-bootstrap";
import "./About.css";

const About = () => {
	return (
		<Card id="about" className="shadow p-3 mb-5 bg-white rounded">
			<SectionHead title="About Me" />
			<p>
				I am a Software Engineer who believes that technology can
				improve the user experience to ensure client satisfaction and
				deliver sustained business growth.
			</p>
			<p>
				I started my professional career working in the financial
				services industry in Australia. During this time i focused on
				enhancing existing technology efficiencies. This experience led
				to a real passion for technology and automation.
			</p>
			<p>
				I always seek opportunities and challenges that can provide a
				meaningful improvement to our ever day lives.
			</p>
		</Card>
	);
};

export default About;
