// Everything you're likely to change lives here.
// Anything marked TODO still needs your real details before launch.

export const site = {
  name: 'MyFluency',
  url: 'https://myfluencyesl.com',
  tutor: 'Moona',
  description:
    'IELTS tutoring for candidates stuck at Band 6. Specialist coaching in Speaking and Writing, with Reading and Listening strategy, online with Moona.',

  // TODO: your Cal.com booking page, e.g. https://cal.com/moona/trial
  calLink: 'https://cal.com/TODO',

  // TODO: free access key from https://web3forms.com (sent to the email you sign up with)
  web3formsKey: 'TODO-WEB3FORMS-ACCESS-KEY',

  // TODO: real contact details
  email: 'hello@myfluencyesl.com',
  instagram: 'https://www.instagram.com/TODO',
  tiktok: 'https://www.tiktok.com/@TODO',

  // Drop your photo in /public (e.g. /public/moona.jpg) and set this to '/moona.jpg'.
  photo: null as string | null,
};

// Pricing is a template for now. Swap the TODO prices when you're ready to show them.
export const pricing = [
  {
    name: 'Trial lesson',
    price: '£TODO',
    length: '45 minutes',
    points: [
      'Speaking and Writing diagnosis',
      'Your weakest criteria, named',
      'A clear plan to reach your target band',
    ],
    cta: 'Book the trial',
    featured: false,
  },
  {
    name: 'Single lesson',
    price: '£TODO',
    length: '60 minutes',
    points: [
      'One-to-one, focused on your weak spots',
      'Speaking practice with live feedback',
      'Writing marked against the band descriptors',
    ],
    cta: 'Book a lesson',
    featured: false,
  },
  {
    name: 'Band 7 package',
    price: '£TODO',
    length: '10 × 60-minute lessons',
    points: [
      'Everything in a single lesson',
      'A plan built around your test date',
      'Lower price per lesson',
    ],
    cta: 'Start with a trial',
    featured: true,
  },
];
