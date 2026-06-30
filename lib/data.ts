import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Server,
  Palette,
  Globe,
  Link2,
  AtSign,
  MessageCircle,
  Mail,
} from 'lucide-react'

/* ---------------------------------- Site --------------------------------- */

export const site = {
  name: 'Ayushman Vishwakarma',
  shortName: 'AV',
  role: 'Web Designer & Full-Stack Developer',
  tagline: 'I build fast, accessible, and delightful web experiences.',
  email: 'hello@ayushv.tech',
  location: 'Mumbai, India',
  url: 'https://ayushv.tech',
  resumeUrl: '/resume.pdf',
}

export const roles = [
  'Web Designer',
  'Full-Stack Developer',
  'UI Engineer',
  'Problem Solver',
] as const

/* ---------------------------------- Nav ---------------------------------- */

export type NavItem = { label: string; href: string; icon: string }

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: 'Home' },
  { label: 'About', href: '#about', icon: 'User' },
  { label: 'Skills', href: '#skills', icon: 'Sparkles' },
  { label: 'Work', href: '#work', icon: 'FolderGit2' },
  { label: 'Contact', href: '#contact', icon: 'Mail' },
]

/* --------------------------------- About --------------------------------- */

export const about = {
  heading: 'Designer who codes, developer who designs.',
  paragraphs: [
    'I am a full-stack developer and web designer focused on crafting interfaces that feel as good as they look. Over the past few years I have shipped products that balance pixel-level polish with rock-solid engineering.',
    'My sweet spot is the intersection of design and code — translating ideas into accessible, performant, and maintainable web experiences using modern tooling.',
    'When I am not building, you will find me exploring design systems, contributing to open source, or refining the little micro-interactions that make products memorable.',
  ],
  stats: [
    { value: 20, suffix: '+', label: 'Projects' },
    { value: 3, suffix: '+', label: 'Years' },
    { value: 15, suffix: '+', label: 'Clients' },
    { value: 100, suffix: '%', label: 'Commitment' },
  ],
}

/* --------------------------------- Skills -------------------------------- */

export const skills: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Figma',
  'Framer Motion',
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Python',
]

export type Expertise = {
  title: string
  icon: LucideIcon
  description: string
  points: string[]
}

export const expertise: Expertise[] = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Building responsive, accessible interfaces with modern frameworks.',
    points: ['React & Next.js', 'TypeScript', 'Tailwind & design systems', 'Animation & micro-interactions'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Designing reliable APIs and data layers that scale.',
    points: ['Node.js & Express', 'REST & API design', 'SQL & NoSQL databases', 'Auth & security'],
  },
  {
    title: 'UI / UX Design',
    icon: Palette,
    description: 'Turning ideas into intuitive, delightful product experiences.',
    points: ['Wireframing & prototyping', 'Design systems', 'Figma workflows', 'Usability & accessibility'],
  },
]

/* ------------------------------- Projects -------------------------------- */

export type Project = {
  name: string
  description: string
  tech: string[]
  image: string
  live: string
  code: string
}

export const projects: Project[] = [
  {
    name: 'SeatSync',
    description: 'Real-time seat booking platform with live availability and payments.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image: '/projects/seatsync.png',
    live: 'https://example.com',
    code: 'https://github.com',
  },
  {
    name: 'ShramSetu',
    description: 'A labor marketplace connecting workers with local employers.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/shramsetu.png',
    live: 'https://example.com',
    code: 'https://github.com',
  },
  {
    name: 'Chatify',
    description: 'End-to-end encrypted realtime chat app with presence and typing.',
    tech: ['Next.js', 'Socket.io', 'Redis', 'Tailwind'],
    image: '/projects/chatify.png',
    live: 'https://example.com',
    code: 'https://github.com',
  },
  {
    name: 'Portfolio v1',
    description: 'My previous portfolio — a minimal showcase of early work.',
    tech: ['React', 'Framer Motion', 'CSS'],
    image: '/projects/portfolio-v1.png',
    live: 'https://example.com',
    code: 'https://github.com',
  },
]

/* ------------------------------- Timeline -------------------------------- */

export type TimelineEntry = {
  date: string
  role: string
  org: string
  description: string
  type: 'work' | 'education'
}

export const timeline: TimelineEntry[] = [
  {
    date: '2024 — Present',
    role: 'Full-Stack Developer',
    org: 'Freelance',
    description: 'Building end-to-end web products for startups and small businesses across the globe.',
    type: 'work',
  },
  {
    date: '2023 — 2024',
    role: 'Frontend Developer',
    org: 'Tech Studio',
    description: 'Shipped production React interfaces and design systems for client projects.',
    type: 'work',
  },
  {
    date: '2022 — 2023',
    role: 'UI/UX Design Intern',
    org: 'Creative Labs',
    description: 'Designed and prototyped mobile-first experiences and contributed to the component library.',
    type: 'work',
  },
  {
    date: '2020 — 2024',
    role: 'B.E. Computer Engineering',
    org: 'University of Mumbai',
    description: 'Studied core computer science with a focus on web technologies and software design.',
    type: 'education',
  },
]

/* ----------------------------- Certificates ------------------------------ */

export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
  url: string
}

export const certificates: Certificate[] = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: 'Mar 2024',
    image: '/certs/meta.png',
    url: 'https://example.com',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    image: '/certs/aws.png',
    url: 'https://example.com',
  },
  {
    title: 'Advanced React',
    issuer: 'Meta',
    date: 'Nov 2023',
    image: '/certs/react.png',
    url: 'https://example.com',
  },
  {
    title: 'Full-Stack Open',
    issuer: 'University of Helsinki',
    date: 'Aug 2023',
    image: '/certs/fullstack.png',
    url: 'https://example.com',
  },
  {
    title: 'Google UX Design',
    issuer: 'Google',
    date: 'May 2023',
    image: '/certs/google-ux.png',
    url: 'https://example.com',
  },
]

/* -------------------------------- Socials -------------------------------- */

export type Social = { label: string; href: string; icon: LucideIcon }

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com', icon: Globe },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Link2 },
  { label: 'Instagram', href: 'https://instagram.com', icon: AtSign },
  { label: 'WhatsApp', href: 'https://wa.me/910000000000', icon: MessageCircle },
  { label: 'Email', href: 'mailto:hello@ayushv.tech', icon: Mail },
]
