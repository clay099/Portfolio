import React from "react";

import "./SectionHead.css";

const SectionHead = ({ title }) => {
	return (
		<div className="SectionHead">
			<h3 className="SectionHead-title">{title}</h3>
			<div className="SectionHead-bar"></div>
		</div>
	);
};

export default SectionHead;
