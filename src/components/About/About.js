import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import "./About.css";

const About = () => {
	return (
		<section id="about" className="grey">
			<div className="body">
				<SectionHead title="About Me" />
				<p className="About-body">
					I am a Software Engineer who believes that technology can
					improve the user experience to ensure client satisfaction
					and deliver sustained business growth.
				</p>
				<p className="About-body">
					I started my professional career working in the financial
					services industry in Australia. During this time i focused
					on enhancing existing technology efficiencies. This
					experience led to a real passion for technology and
					automation.
				</p>
				<p className="About-body">
					I always seek opportunities and challenges that can provide
					a meaningful improvement to our ever day lives.
				</p>
			</div>
		</section>
	);
};

export default About;
