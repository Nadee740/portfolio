import emoji from "react-easy-emoji";

import lbrlogo from "./assets/img/lbr.jpeg";
import fosslogo from "./assets/img/foss.jpeg";
import ieeelogo from "./assets/img/ieee.jpeg";

export const greetings = {
	name: "Nadeem Haris",
	title: "I'm Nadeem",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "https://github.com/Nadee740",
};

export const openSource = {
	githubUserName: "Nadee740",
};

export const contact = {};

export const socialLinks = {
	mail:"mailto:nadeemblayparambil@gmail.com",
	facebook: "https://www.facebook.com/nadeem.haris.90",
	instagram: "https://www.instagram.com/me.nade18",
	github: "https://github.com/Nadee740",
	linkedin: "https://www.linkedin.com/in/nadeem-haris-8708971a5/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Developer who is focused on backend operations with node",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Develop effective backend support system"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS "
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		// {
		// 	skillName: "TypeScript",
		// 	fontAwesomeClassname: "logos:typescript-icon",
		// },
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "College of Engineering Trivandrum (CET)",
		subHeader: "B-Tech in Computer Science",
		duration: "october 2020 - ",
		desc: "Participated in various hackathons and internships",
		descBullets: [
			"Currently studying in C.E.T",
			"Currently part time front-end intern at LearnByResearch",
			
		],
	},
	{
		schoolName: "Rahmaniya H.S.S Kozhikode",
		subHeader: "Pre-Degree (plus-one/plus-two) in Computer Science",
		duration: "june 2018 - April 2020",
		desc: "Participated in various sports in district level.",
		descBullets: [
			"Was the sports captian in school during the period",
			"Completed studies with a percentage of 97.3%",
		],
	},
	{
		schoolName: "Markaz E.M.S.S.S Kozhikode",
		subHeader: "Did my former schooling (2th - 10th)",
		duration: "September 2013 - April 2018",
		desc: "Participated in various activities",
		descBullets: [
			"Completed 10th with a percentage of 93.6%",
		],
	},
];

export const experience = [
	{
		role: "Front-end Intern",
		company: "Learnbyresearch",
		companylogo: lbrlogo,
		date: "June 2021 – Present",
		desc: "Front-end intern at Learnbyresearch.",
		descBullets: [
			"Developed their website in React js",
			"Found oppurtunity to work with a supportive team",
		],
	},
	{
		role: "Web master",
		company: "FossCell cet",
		companylogo: fosslogo,
		date: "june 2020 – Present",
		desc: "web master at fosscell CET .",
	},
	{
		role: "Front end developer",
		company: "IEEE CET",
		companylogo: ieeelogo,
		date: "June 2020 – current",
		desc: "Part of front-end team of IEEE project.",
	},
];

export const projects = [
	{
		name: "Learnbyresearch",
		desc: "Built website for the group Learnbyresearch",
		link: "https://learnbyresearch.com/",
	},
	{
		name: "Fosscell",
		desc: "Built website for club Fosscell at C.E.T",
		link: "https://nadee740.github.io/fosscellCet/",
	},
	
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
