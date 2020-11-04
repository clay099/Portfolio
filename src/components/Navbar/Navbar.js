import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

const NavBarComp = () => {
	return (
		<Navbar bg="light" expand="md" className="sticky-top">
			<Navbar.Brand href="#home">
				<Image
					alt=""
					src={process.env.PUBLIC_URL + "profileImg.jfif"}
					width="30"
					height="30"
					className="d-inline-block align-top"
					roundedCircle
				/>{" "}
				Clayton Whittaker
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#projects">Projects</Nav.Link>
					<Nav.Link href="#skills">Skills</Nav.Link>
					<Nav.Link
						href={process.env.PUBLIC_URL + "resume.pdf"}
						target="_blank"
					>
						Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarComp;
