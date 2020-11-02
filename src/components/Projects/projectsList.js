//projects to be displayed
const projectsList = [
	{
		img: process.env.PUBLIC_URL + `ProjectFreelanceImg.png`,
		title: `Project Freelance - React & Express Project`,
		summary: `Full stack Peer-To-Peer Outsourcing Project. General site users can create jobs, find local contractors and post reviews. Tradesmen can be matched with available jobs in their area`,
		webLink: `https://project-freelance.netlify.app/`,
		githubLink: `https://github.com/clay099/work-order-frontend`,
	},
	{
		img: process.env.PUBLIC_URL + `StockTrackerImg.png`,
		title: `Stock Tracking Application - Flask Python Project`,
		summary: `This Project allows for users to create a fake stock portfolio and track its profit & loss over time`,
		webLink: `http://cw-stock-tracker.herokuapp.com/`,
		githubLink: `https://github.com/clay099/stock-tracker`,
	},
	{
		img: process.env.PUBLIC_URL + `Connect4Img.png`,
		title: `Connect 4 Game - Vanilla Javascript & CSS Project`,
		summary: `Fully functional connect four game. All DOM and game logic is implemented with Javascript & styling with CSS`,
		webLink: `https://clay099.github.io/connect-four/`,
		githubLink: `https://github.com/clay099/connect-four`,
	},
	{
		img: process.env.PUBLIC_URL + `JoblyImg.PNG`,
		title: `Jobly - React & Express Project`,
		summary: `Full stack (front-end & back-end) Job board. Back-end API has full REST principles`,
		webLink: `https://job-app-demo.netlify.app/`,
		githubLink: `https://github.com/clay099/jobly-frontend`,
	},
];
export default projectsList;
