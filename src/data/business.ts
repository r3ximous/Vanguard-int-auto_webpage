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
	};
}

export interface Service {
	readonly number: string;
	readonly title: string;
	readonly description: string;
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
		hours: 'Monday-Friday, approximately 9:00am-5:00pm',
	},
} as const satisfies BusinessProfile;

export const services = [
	{
		number: '01',
		title: 'Diagnostics',
		description: 'Clear answers from careful inspection, fault finding, and practical repair guidance.',
	},
	{
		number: '02',
		title: 'Bodywork',
		description: 'Thoughtful restoration for exterior damage, panel alignment, and everyday wear.',
	},
	{
		number: '03',
		title: 'Paintless Dent Repair',
		description: 'Precision dent removal that preserves your vehicle’s original finish whenever possible.',
	},
	{
		number: '04',
		title: 'Detailing',
		description: 'A considered clean inside and out, from daily drivers to cars worth slowing down for.',
	},
] as const satisfies readonly Service[];
