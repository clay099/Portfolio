import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
	const backgroundImg =
		process.env.PUBLIC_URL + "pexels-negative-space-169573.jpg";
	return (
		<section id="Home">
			<Jumbotron fluid>
				<div
					id="background"
					style={{
						backgroundImage: `url(${backgroundImg})`,
					}}
				></div>
				<Container>
					<h1 id="Home-title">Clayton Whittaker</h1>
					<p className="Home-body">
						<strong>Full Stack Developer</strong>
						<br />
						Passion for turing ideas into reality,
						<br />
						solving problems and providing workable solutions
					</p>
				</Container>
			</Jumbotron>
		</section>
	);
};

export default Home;
