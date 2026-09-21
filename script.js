"use strict";

const services = {

	digitalMarketing: {
		title: "Digital Marketing",

		category: "DIGITAL MARKETING",

		visualTitle: "Digital Growth",

		logo: "https://biswasitfirm.com/assets/services/digital-marketing-logo.svg",

		description:
			"Data-driven digital marketing strategies designed to increase visibility, reach the right audience, generate qualified leads, and turn attention into measurable business growth.",

		features: [
			"Target Audience & Campaign Strategy",
			"SEO & Keyword Growth Planning",
			"Social Media Marketing",
			"Lead Generation & Conversion Funnels",
			"Performance Tracking & Analytics",
			"Campaign Optimization & Reporting"
		],

		technologies: [
			"SEO",
			"Google Ads",
			"Meta Ads",
			"Analytics",
			"Keyword Research",
			"Social Media"
		]
	},


	webDevelopment: {
		title: "Web Development",

		category: "WEB DEVELOPMENT",

		visualTitle: "Modern Web",

		logo: "https://biswasitfirm.com/assets/services/web-development-logo.svg",

		description:
			"We engineer ultra-fast, responsive websites and web applications using modern tech stacks like React, Next.js, Node.js, and TailwindCSS. From corporate landing pages to complex portals, we deliver excellence.",

		features: [
			"Custom Responsive UI/UX Design",
			"Ultra-Fast Performance & Mobile-First",
			"Clean Code & Scalable Architecture",
			"Secure Database & API Integrations",
			"SEO Architecture & Meta Optimization",
			"Post-Launch Support & Maintenance"
		],

		technologies: [
			"React.js",
			"Next.js",
			"Node.js",
			"TailwindCSS",
			"TypeScript",
			"PostgreSQL"
		]
	},


	graphicDesign: {
		title: "Graphic Design",

		category: "GRAPHIC DESIGN",

		visualTitle: "Visual Design",

		logo: "https://biswasitfirm.com/assets/services/graphic-design-logo.svg",

		description:
			"Our design studio crafts unique visual identities, logo marks, social media graphics, carousels, and corporate brochures that establish your brand as a market leader.",

		features: [
			"Visual Identity & Premium Logos",
			"Social Media Posts, Banners & Reels",
			"Corporate Profiles & Brochures",
			"High-Resolution Vector Graphics",
			"Print-Ready & Web-Optimized Files",
			"Collaborative Feedback & Revisions"
		],

		technologies: [
			"Illustrator",
			"Photoshop",
			"Figma",
			"Vector Art",
			"InDesign",
			"Canva Pro"
		]
	},


	videoEditing: {
		title: "Video Editing",

		category: "VIDEO EDITING",

		visualTitle: "Video Content",

		logo: "https://biswasitfirm.com/assets/services/video-editing-logo.svg",

		description:
			"We turn raw footage into cinematic storytelling. From viral short-form Reels and TikToks to promotional brand films and motion graphic ads, we deliver stunning visual engagement.",

		features: [
			"Cinematic Storytelling & Narrative Flow",
			"Viral Short-Form Reels, TikToks & Shorts",
			"Professional Audio Mixing & Sound Design",
			"Advanced Color Grading & Cinematic LUTs",
			"Dynamic Subtitles & Motion Graphics",
			"High-Res 4K & 1080p Multi-Format Export"
		],

		technologies: [
			"Premiere Pro",
			"After Effects",
			"DaVinci Resolve",
			"CapCut Pro",
			"Audition",
			"4K Render"
		]
	},


	contentWriting: {
		title: "Content Writing",

		category: "CONTENT WRITING",

		visualTitle: "Content Strategy",

		logo: "https://biswasitfirm.com/assets/services/content-writing-logo.svg",

		description:
			"Captivate your audience with compelling copy. We create SEO-driven blog articles, high-converting website copy, persuasive social media captions, and professional corporate profiles.",

		features: [
			"High-Intent SEO Articles & Blog Posts",
			"High-Converting Landing Page Copy",
			"Engaging Social Captions & Ad Scripts",
			"100% Original & Plagiarism Free Content",
			"Audience-Focused Persuasive Hooks",
			"Meta Descriptions & Heading Structure"
		],

		technologies: [
			"SEO Copywriting",
			"Surfer SEO",
			"Grammarly Pro",
			"Yoast SEO",
			"Google Docs",
			"Keyword Tools"
		]
	},


	brandIdentity: {
		title: "Brand Identity",

		category: "BRAND IDENTITY",

		visualTitle: "Brand System",

		logo: "https://biswasitfirm.com/assets/services/brand-identity-logo.svg",

		description:
			"We create cohesive brand identity systems that make businesses recognizable, credible, and visually consistent across digital and physical touchpoints.",

		features: [
			"Logo & Visual Identity Design",
			"Color Palette & Typography System",
			"Brand Guidelines & Visual Direction",
			"Business Card & Stationery Design",
			"Social Media Brand Assets",
			"Consistent Digital Brand System"
		],

		technologies: [
			"Figma",
			"Illustrator",
			"Photoshop",
			"Brand Guidelines",
			"Vector Design",
			"Visual Systems"
		]
	},


	brandPromotion: {
		title: "Brand Promotion",

		category: "BRAND PROMOTION",

		visualTitle: "Brand Growth",

		logo: "https://biswasitfirm.com/assets/services/brand-promotion-logo.svg",

		description:
			"Accelerate your brand equity through integrated cross-platform marketing, influencer activations, PR features, and hyper-targeted digital campaigns that turn audiences into loyal advocates.",

		features: [
			"Target Demographics & Market Audit",
			"Unified Multi-Channel Outreach Strategy",
			"Influencer & Creator Collaborations",
			"Retargeting & Engagement Funnels",
			"Brand Sentiment & Visibility Tracking",
			"Media PR & Authority Elevation"
		],

		technologies: [
			"Influencer Outreach",
			"PR Strategy",
			"Brand Campaigns",
			"Viral Media",
			"Retargeting",
			"Analytics"
		]
	}

};


const dialog = document.getElementById("service-modal");

const closeButton = document.getElementById("close-modal");

const modalLogo = document.getElementById("modal-service-logo");

const modalTitle = document.getElementById("modal-title");

const modalCategory = document.getElementById("modal-category");

const modalDescription = document.getElementById("modal-desc");

const modalFeatures = document.getElementById("modal-features");

const modalTools = document.getElementById("modal-tools");

const visualTitle = document.getElementById("visual-title");

const portfolioButton = document.getElementById("portfolio");

const whatsappButton = document.getElementById("whatsapp");

const liveRegion = document.getElementById("live");


let lastFocusedElement = null;

let activeService = null;


if (
	dialog &&
	closeButton &&
	modalLogo &&
	modalTitle &&
	modalCategory &&
	modalDescription &&
	modalFeatures &&
	modalTools &&
	visualTitle &&
	portfolioButton &&
	whatsappButton
) {


	const openButtons = document.querySelectorAll(
		"[data-open]"
	);


	openButtons.forEach((button) => {

		button.addEventListener("click", () => {

			const serviceKey = button.dataset.open;

			openService(serviceKey, button);

		});

	});


	function openService(serviceKey, trigger) {

		const service = getService(serviceKey);

		if (!service) {
			console.warn(
				`Service "${serviceKey}" was not found.`
			);

			return;
		}


		activeService = service;


		lastFocusedElement = trigger;


		modalTitle.textContent = service.title;

		modalCategory.textContent = service.category;

		modalDescription.textContent = service.description;

		visualTitle.textContent = service.visualTitle;

		modalLogo.src = service.logo;

		modalLogo.alt = "";


		renderFeatures(service.features);


		renderTechnologies(service.technologies);


		updateWhatsApp(service);


		updatePortfolio(service);


		if (liveRegion) {

			liveRegion.textContent =
				`${service.title} service details opened.`;

		}


		if (typeof dialog.showModal === "function") {

			dialog.showModal();

		} else {

			dialog.setAttribute("open", "");

		}


		requestAnimationFrame(() => {

			closeButton.focus();

		});

	}


	function getService(serviceKey) {

		const normalizedKey = serviceKey
			.replace(/-/g, "")
			.toLowerCase();


		return Object.entries(services).find(
			([key]) =>
				key.toLowerCase() === normalizedKey
		)?.[1];

	}


	function renderFeatures(features) {

		modalFeatures.replaceChildren();


		const fragment = document.createDocumentFragment();


		features.forEach((feature) => {

			const li = document.createElement("li");

			const check = document.createElement("span");

			check.setAttribute(
				"aria-hidden",
				"true"
			);

			check.textContent = "✓";


			li.append(
				check,
				document.createTextNode(` ${feature}`)
			);


			fragment.appendChild(li);

		});


		modalFeatures.appendChild(fragment);

	}


	function renderTechnologies(technologies) {

		modalTools.replaceChildren();


		const fragment = document.createDocumentFragment();


		technologies.forEach((technology) => {

			const tag = document.createElement("span");

			tag.textContent = technology;


			fragment.appendChild(tag);

		});


		modalTools.appendChild(fragment);

	}


	function updateWhatsApp(service) {

		const phoneNumber = "+880 1401-004472";


		const message =
			`Hello Biswas IT Firm, I'm interested in your ${service.title} service.`;


		whatsappButton.href =
			`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	}


	function updatePortfolio(service) {

		portfolioButton.dataset.service =
			service.title;

	}


	portfolioButton.addEventListener(
		"click",
		() => {

			if (!activeService) {
				return;
			}


			const serviceName =
				encodeURIComponent(
					activeService.title
				);


			window.location.href =
				`https://biswasitfirm.com/portfolio?service=${serviceName}`;

		}
	);


	function closeService() {

		if (!dialog.open) {
			return;
		}


		if (typeof dialog.close === "function") {

			dialog.close();

		} else {

			dialog.removeAttribute("open");

		}


		if (liveRegion && activeService) {

			liveRegion.textContent =
				`${activeService.title} service details closed.`;

		}


		if (
			lastFocusedElement &&
			document.contains(lastFocusedElement)
		) {

			requestAnimationFrame(() => {

				lastFocusedElement.focus();

			});

		}


		activeService = null;

	}


	closeButton.addEventListener(
		"click",
		closeService
	);


	dialog.addEventListener(
		"cancel",
		(event) => {

			event.preventDefault();

			closeService();

		}
	);


	dialog.addEventListener(
		"click",
		(event) => {

			if (event.target === dialog) {

				closeService();

			}

		}
	);


	dialog.addEventListener(
		"close",
		() => {

			if (liveRegion) {

				liveRegion.textContent = "";

			}

		}
	);

}