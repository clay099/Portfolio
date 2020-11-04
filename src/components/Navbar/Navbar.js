import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import "./Navbar.css";

const NavBarComp = () => {
	return (
		<Navbar bg="light" expand="md" className="sticky-top" id="Navbar">
			<Navbar.Brand href="#home">
				<Image
					id="profileImg"
					alt=""
					src={process.env.PUBLIC_URL + "profileImg.jfif"}
					width="30"
					height="30"
					className="d-inline-block align-top"
					roundedCircle
				/>
				Clayton Whittaker
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Scrollspy
						items={["about", "projects", "skills"]}
						currentClassName="active"
						offset={-100}
						style={{ display: "contents" }}
					>
						<a className="nav-link" href="#about">
							<i class="fas fa-user"></i>
							About
						</a>
						<a className="nav-link" href="#projects">
							<i class="far fa-images"></i>
							Projects
						</a>
						<a className="nav-link" href="#skills">
							<i class="fas fa-star"></i>
							Skills
						</a>
						<a
							className="nav-link"
							href={process.env.PUBLIC_URL + "resume.pdf"}
							target="_blank"
						>
							Resume
							<i class="fas fa-external-link-square-alt"></i>
						</a>
					</Scrollspy>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarComp;
