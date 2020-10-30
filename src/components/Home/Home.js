import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
	const backgroundImg =
		process.env.PUBLIC_URL + "pexels-negative-space-169573.jpg";
	console.log(backgroundImg);
	return (
		<section id="Home">
			<Jumbotron
				fluid
				style={{
					backgroundImage: `url(${backgroundImg})`,
				}}
			>
				<Container>
					<h1 id="Home-title">Clayton Whittaker</h1>
					<p className="lead" id="Home-lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</Container>
			</Jumbotron>
		</section>
	);
};

export default Home;
