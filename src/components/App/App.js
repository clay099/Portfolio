import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container fluid id="body">
				<Home />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
