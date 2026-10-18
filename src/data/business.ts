export interface BusinessProfile {
readonly legalName: string;
readonly shortName: string;
readonly description: string;
readonly tagline: string;
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
readonly directionsUrl: string;
readonly mapsEmbedUrl: string;
};
}

export interface Service {
readonly number: string;
readonly title: string;
readonly description: string;
readonly detail: string;
readonly assurance: string;
}

const phoneDigits = '971585227149';
const phoneE164 = `+${phoneDigits}`;
const emailAddress = 'fixit@vanguardautomotiveae.com';
const whatsappMessage = 'Hello Vanguard Automotive, I would like to inquire about your services.';

const displayAddress = 'FOAM0442 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates';

export const business = {
legalName: 'Vanguard International Automotive L.L.C',
shortName: 'Vanguard Auto',
description: 'Diagnostics, bodywork, paintless dent repair, and detailing from Vanguard International Automotive L.L.C.',
tagline: 'Ras Al Khaimah · Mon–Fri, 8:00am–5:00pm',
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
displayAddress,
streetAddress: 'FOAM0442 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ',
locality: 'Ras Al Khaimah',
region: 'Ras Al Khaimah',
countryCode: 'AE',
hours: 'Monday-Friday, 8:00am-5:00pm',
serviceArea: 'By appointment in Ras Al Khaimah',
directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(displayAddress)}`,
mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(displayAddress)}&z=14&output=embed`,
},
} as const satisfies BusinessProfile;

export const services = [
{
number: '01',
title: 'Diagnostics',
description: 'Clear answers from careful inspection, fault finding, and practical repair guidance.',
detail: 'We inspect the symptoms, explain what we find, and outline the sensible next step before work begins.',
assurance: 'Free assessment · findings explained before any work',
},
{
number: '02',
title: 'Bodywork',
description: 'Thoughtful restoration for exterior damage, panel alignment, and everyday wear.',
detail: 'From panel alignment to exterior damage, we focus on a clean repair and a clear handover.',
assurance: 'Written quote approved by you first',
},
{
number: '03',
title: 'Paintless Dent Repair',
description: 'Precision dent removal that preserves your vehicle’s original finish whenever possible.',
detail: 'Where the finish allows, we remove dents without unnecessary repainting or disruption to the original surface.',
assurance: 'Original paint kept · often same-day',
},
{
number: '04',
title: 'Detailing',
description: 'A considered clean inside and out, from daily drivers to cars worth slowing down for.',
detail: 'We refresh the cabin and exterior with an attentive finish suited to how you use your vehicle.',
assurance: 'Packages from quick refresh to full interior',
},
] as const satisfies readonly Service[];
