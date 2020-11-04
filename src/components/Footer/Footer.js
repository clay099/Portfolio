import React from "react";
import "./Footer.css";

const Footer = () => {
	let year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container footer-row">
				<span className="text-muted">Clayton Whittaker ©{year}</span>
				<a
					href="https://www.linkedin.com/in/clayton-whittaker/"
					target="_blank"
				>
					<div class="flex icon" id="icon-2">
						<i class="fab fa-linkedin"></i>
					</div>
				</a>
				<a href="https://github.com/clay099" target="_blank">
					<div class="flex icon" id="icon-3">
						<i class="fab fa-github"></i>
					</div>
				</a>
				<a href="mailto: clayton.whittaker@gmail.com">
					<div class="flex icon" id="icon-3">
						<i class="fas fa-envelope"></i>
					</div>
				</a>
			</div>
		</footer>
	);
};

export default Footer;

<div class="icon-wrap flex row">
	<a href="https://www.linkedin.com/in/mattwilliams85">
		<div class="flex icon" id="icon-2">
			<i class="mdi mdi-linkedin"></i>
		</div>
	</a>
	<a href="https://www.facebook.com/matthew.williams.351">
		<div class="flex icon" id="icon-3">
			<i class="mdi mdi-facebook"></i>
		</div>
	</a>
	<a href="https://instagram.com/infinite_edge/">
		<div class="flex icon" id="icon-4">
			<i class="mdi mdi-instagram"></i>
		</div>
	</a>
</div>;
