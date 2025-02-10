export interface PoolItem {
	title: string;
	amount: number;
}

export interface Round {
	title: string;
	description: string;
	submissionInstructions: string | undefined;
	startDate: Date;
	endDate: Date;
}

export interface RubricItem {
	title: string;
	description: string | string[];
}

export interface Competition {
    id: string;
	name: string;
	subtitle: string;
    thumbnailURL: string;
	posterURL?: string;
	regLink: string;
	regDeadline: Date;
	teamSize: [number, number] | undefined;
	pitchString: string;
	additionalDetails?: string;
	rounds: Round[];
	judgingCriteria?: RubricItem[];
	pool: PoolItem[];
}

export const competitions: Competition[] = [
    {
        id: 'astro-photography',
		name: "Orion's Lens",
		subtitle: "An Astrophotography Competition",
        thumbnailURL: '/images/competitions/astro-photography.png',
		posterURL: '/images/competitions/astro-photography-poster.png',
		regLink: 'https://forms.gle/2mKk4zTNB3FRyaeVA',
		regDeadline: new Date(2025, 1, 20, 23, 59),
		teamSize: undefined,
		pitchString: "Share your passion for the heavens at Orion's Lens! Present your best reduced and processed images to an audience of fellow astrophotographers!",
		additionalDetails: "Orion's Lens has three categories for submissions: Solar System, Deep Sky and Wide-Field Wonders (non-telescope). Two entries are permitted for each category, for a maximum of six images per entry. Participants may submit images taken by individuals or groups, but all credit must be provided during registration.",
		rounds: [
			{
				title: "Screening",
				description: "Submit your images.",
				submissionInstructions: "Each team can make two submissions to each of the three categories, while registering for the event. The photos will be screened by an expert jury, with the best entries in each category being shortlisted for the next round.",
				startDate: new Date(2025, 1, 10, 8, 0),
				endDate: new Date(2025, 1, 20, 23, 59)
			},
			{
				title: "Report Submission",
				description: "The best entries will be required to submit a report detailing their process for taking the image. This will be used to judge the final winners.",
				submissionInstructions: "The qualifying teams will receive a link to submit a short pdf report detailing the process of capturing the image.",
				startDate: new Date(2025, 1, 22, 8, 0),
				endDate: new Date(2025, 1, 25, 23, 59)
			},
			{
				title: "Presentation",
				description: "The winners and finalists will be invited to present their images to a general audience at Chimera 2025 at Ashoka University.",
				submissionInstructions: undefined,
				startDate: new Date(2025, 2, 1, 11, 0),
				endDate: new Date(2025, 2, 1, 17, 0)
			}
		],
		judgingCriteria: [
			{
				"title": "Image Content",
				"description": "Observed brightness, level of difficulty in imaging an object, phenomenon's exoticness (uniqueness)",
			},
			{
				"title": "Aesthetic Appeal",
				"description": "Visual appeal, composition, color balance, picture sharpness, noise reduction, and overall aesthetics",
			}
		],
		pool: [
			{
				title: "Winner - Solar System",
				amount: 3000
			}, 
			{
				title: "Winner - Deep Sky",
				amount: 3000
			},
			{
				title: "Winner - Wide-Field Wonders",
				amount: 3000
			},
			{
				title: "Runner-Up - Solar System",
				amount: 2000
			},
			{
				title: "Runner-Up - Deep Sky",
				amount: 2000
			},
			{
				title: "Runner-Up - Wide-Field Wonders",
				amount: 2000
			}
		]
    },
    {
        id: 'math-expo',
		name: "Principia",
		subtitle: "A Math Exposition Contest",
        thumbnailURL: '/images/competitions/math-expo.png',
		posterURL: '/images/competitions/math-expo-poster.png',
		regLink: 'https://forms.gle/bmybNUmpYDcPhBtBA',
		regDeadline: new Date(2025, 1, 25, 23, 59),
		teamSize: [1, 2],
		pitchString: "Join the Math Exposition Competition and put your explanation skills to the test! This event is your chance to explore and present mathematical ideas in creative and engaging ways!",
		additionalDetails: "Whether you're captivated by abstract theories, applied mathematics, or interdisciplinary concepts, you'll have the opportunity to share your insights with others and inspire a broader audience. Think outside the box to develop innovative and novel ways to visualise and simplify complex concepts, making them more accessible and exciting for everyone. Showcase your passion, enhance your communication skills, and connect with fellow math enthusiasts in this unique exposition experience!",
		rounds: [
			{
				title: "Prelims",
				description: "Submit your presentation's title, a short abstract (~300 words), and the medium of presentation (models, animations, computer simulation, etc.)",
				submissionInstructions: undefined,
				startDate: new Date(2025, 1, 10, 8, 0),
				endDate: new Date(2025, 1, 25, 23, 59)
			},
			{
				title: "Final Presentation",
				description: "Selected teams will be requested to present their exposition in person at Chimera during the finals round. They will present to an audience of students and an expert jury.",
				submissionInstructions: undefined,
				startDate: new Date(2025, 2, 1, 11, 0),
				endDate: new Date(2025, 2, 1, 17, 0)
			}
		],
		judgingCriteria: [
			{
				"title": "Creativity",
				"description": [
					"Does the submission offer a unique experience or explanation that the audience might not have found if they had just been trying to learn online or in a classroom setting?",
					"Have the presenters effectively used interesting mediums in their submission, such as simulations, animations, or models?"
				],
			},
			{
				"title": "Clarity of Presentation",
				"description": [
					"Is the use of complex jargon minimised? If any was introduced, was it properly explained?",
					"Does the presentation display empathy for those unfamiliar with the topic?",
					"Is the presentation accessible to those with little prior knowledge on the subject?",
					"Is the presentation delivered in a clear, and engaging manner?"
				]
			},
			{
				"title": "Complexity of Topic vs. Accessibility",
				"description": [
					"How complicated is the topic that you have chosen in comparison to the accessibility of your presentation?",
					"For example, a decently well-explained presentation of a graduate-level concept will be better evaluated than an excellent presentation of a highschool-level concept."
				]
			}
		],
		pool: [
			{
				title: "Winner",
				amount: 5000
			}, 
			{
				title: "First Runner Up",
				amount: 3000
			},
			{
				title: "Second Runner Up",
				amount: 2000
			}
		]
    },
    
];
