export interface BusinessProfile {
	readonly legalName: string;
	readonly shortName: string;
	readonly description: string;
	readonly contact: {
		readonly phone: {
			readonly display: string;
			readonly e164: string;
			readonly href: string;
		};
		readonly whatsapp: {
			readonly href: string;
		};
		readonly email: {
			readonly address: string;
			readonly href: string;
		};
	};
	readonly location: {
		readonly displayAddress: string;
		readonly streetAddress: string;
		readonly locality: string;
		readonly region: string;
		readonly countryCode: string;
		readonly hours: string;
		readonly serviceArea: string;
	};
}

export interface Service {
	readonly number: string;
	readonly title: string;
	readonly description: string;
	readonly detail: string;
	readonly whatsappMessage: string;
}

const phoneDigits = '971585227149';
const phoneE164 = `+${phoneDigits}`;
const emailAddress = 'fixit@vanguardautomotiveae.com';
const whatsappMessage = 'Hello Vanguard Automotive, I would like to inquire about your services.';

export const business = {
	legalName: 'Vanguard International Automotive L.L.C',
	shortName: 'Vanguard Auto',
	description: 'Diagnostics, bodywork, paintless dent repair, and detailing from Vanguard International Automotive L.L.C.',
	contact: {
		phone: {
			display: '+971 58 522 7149',
			e164: phoneE164,
			href: `tel:${phoneE164}`,
		},
		whatsapp: {
			href: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`,
		},
		email: {
			address: emailAddress,
			href: `mailto:${emailAddress}`,
		},
	},
	location: {
		displayAddress: 'FOAM0442 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates',
		streetAddress: 'FOAM0442 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ',
		locality: 'Ras Al Khaimah',
		region: 'Ras Al Khaimah',
		countryCode: 'AE',
		hours: 'Monday-Friday, 8:00am-5:00pm',
		serviceArea: 'By appointment in Ras Al Khaimah',
	},
} as const satisfies BusinessProfile;

export const services = [
	{
		number: '01',
		title: 'Mechanical Repairs & Maintenance',
		description: 'From routine oil changes and regular servicing to complete engine and transmission replacements, we provide reliable maintenance and repair solutions to keep your vehicle running smoothly.',
		detail: 'We inspect the symptoms, explain what we find, and outline the sensible next step before work begins.',
		whatsappMessage: 'Hello Vanguard Automotive, I would like to ask about mechanical repairs and maintenance for my vehicle.',
	},
	{
		number: '02',
		title: 'Computer Diagnostics (ECU)',
		description: 'Identify potential issues with your vehicle through computerised diagnostic scans. A diagnostic scan and clear explanation of fault codes are included free of charge with any repair work or service carried out by us, helping you understand the problem before proceeding.',
		detail: 'We inspect the symptoms, explain what we find, and outline the sensible next step before work begins.',
		whatsappMessage: 'Hello Vanguard Automotive, I would like to book a computer diagnostic scan for my vehicle.',
	},
	{
		number: '03',
		title: 'Air Conditioning Services',
		description: 'From air conditioning gas top-ups to fault diagnosis and complete system repairs, we help keep your vehicle’s air conditioning performing efficiently and your drive comfortable.',
		detail: 'We inspect the symptoms, explain what we find, and outline the sensible next step before work begins.',
		whatsappMessage: 'Hello Vanguard Automotive, I would like to ask about air conditioning service for my vehicle.',
	},
	{
		number: '04',
		title: 'Auto Painting & Bodywork',
		description: 'Restore your vehicle’s appearance with professional repainting, dent repairs, and panel repairs or replacements. Whether you’re dealing with minor cosmetic damage or more extensive bodywork, we help get your vehicle looking its best.',
		detail: 'We inspect the symptoms, explain what we find, and outline the sensible next step before work begins.',
		whatsappMessage: 'Hello Vanguard Automotive, I would like to ask about auto painting and bodywork for my vehicle.',
	},
] as const satisfies readonly Service[];

export const temporaryHeroImage = {
	src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85',
	alt: 'Dark sports car photographed on an open road',
	source: 'Unsplash, temporary licensed stock image',
} as const;
