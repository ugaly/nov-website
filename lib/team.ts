export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Joseph Mwinyi',
    role: 'Chief Executive Officer',
    bio: 'Leads firm strategy and client relationships. Former corporate counsel with deep experience in Tanzanian company law and board governance.',
    image: '/team-01.jpg',
  },
  {
    id: 'tax-associate',
    name: 'Asha Juma',
    role: 'Tax Associate',
    bio: 'Handles VAT, PAYE, SDL and corporate tax filings. Keeps clients ahead of TRA deadlines with clear, practical guidance.',
    image: '/team-02.jpg',
  },
  {
    id: 'company-secretary',
    name: 'Daniel Okello',
    role: 'Company Secretary',
    bio: 'Manages BRELA filings, statutory registers, share transfers and annual returns for startups through multi-entity groups.',
    image: '/team-03.jpg',
  },
  {
    id: 'accountant',
    name: 'Neema Said',
    role: 'Senior Accountant',
    bio: 'Owns month-end close, reconciliations and management packs so directors always know cash, margin and liabilities.',
    image: '/team-04.jpg',
  },
  {
    id: 'advisory',
    name: 'Michael Baraka',
    role: 'Business Advisor',
    bio: 'Supports structure design, investment readiness and growth planning — connecting commercial goals to compliance paths.',
    image: '/team-05.jpg',
  },
  {
    id: 'client-success',
    name: 'Fatuma Hassan',
    role: 'Client Success Lead',
    bio: 'Your named day-to-day contact. Coordinates filings, updates and escalations so nothing sits unanswered.',
    image: '/team-06.jpg',
  },
]

export const featuredTeam = teamMembers.slice(0, 3)
