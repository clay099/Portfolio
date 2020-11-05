import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import skillList from "./skillList";
import "./skills.css";
const Skills = () => {
	return (
		<section id="skills" className="grey">
			<SectionHead title="Skills" />
			{Object.keys(skillList).map((skillType) => {
				return (
					<>
						<div
							className={`skillType-${skillType} Skills-heading`}
						>
							<h4>{skillType}</h4>
							<hr />
							<div className="row">
								{skillList[skillType].map((skill) => (
									<div className="col-2 col-lg-1 skills-card mx-5 mb-4">
										<img
											src={`${
												process.env.PUBLIC_URL +
												`skills/` +
												skill +
												".png"
											}`}
											alt={`${skill} Logo`}
											className="logo"
										/>
										<h6 className="pt-2">{skill}</h6>
									</div>
								))}
							</div>
						</div>
					</>
				);
			})}
		</section>
	);
};

export default Skills;
