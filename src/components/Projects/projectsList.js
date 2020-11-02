//projects to be displayed
const projectsList = [
	{
		img: process.env.PUBLIC_URL + `ProjectFreelanceImg.png`,
		title: `Project Freelance - React & Express Project`,
		summary: `Full stack Peer-To-Peer Outsourcing Project`,
		description: `The project has been completed into two separate parts containing a front-end project live server and a separate API back-end github link, server link .

    The project is a peer-to-peer outsourcing program which matches general users with qualified tradesmen to complete real-world jobs. At a high level there will be two types of users who will utilize this project. General Users & Tradesmen
    
    General Users will be anyone who needs to have a job completed which they need assistance completing. This can be anything from mowing their lawn, painting their house to a Bathroom renovation.
    
    Tradesmen will be people who are able to provide their expertise to help their parties complete their projects.`,
		webLink: `https://project-freelance.netlify.app/`,
		githubLink: `https://github.com/clay099/work-order-frontend`,
	},
	{
		img: process.env.PUBLIC_URL + `StockTrackerImg.png`,
		title: `Stock Tracking Application - Flask Python Project`,
		summary: `This Project allows for users to create a fake stock portfolio and track its profit & loss over time`,
		description: `The website will be designed to assist with understanding the historic stock changes. It will allow for users to select in real time current stock ticket codes and review their historic performance. It will also allow for a user to save multiple stocks to their portfolio and select notification frequency to allow for daily, weekly, or monthly update on the performance of their portfolio. Users can also find out detailed company financials history, company news articles and company peers `,
		webLink: `http://cw-stock-tracker.herokuapp.com/`,
		githubLink: `https://github.com/clay099/stock-tracker`,
	},
];
export default projectsList;
