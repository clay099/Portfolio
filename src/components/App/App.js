import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container fluid id="body" data-spy="scroll" data-target="#Navbar">
				<Home />
				<About />
				<Projects />
				<Skills />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
