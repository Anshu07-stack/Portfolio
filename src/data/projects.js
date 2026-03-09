export const skills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 78 },
  { name: 'React.js', level: 82 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Redux Toolkit', level: 70 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'MUI (Material UI)', level: 68 },
  { name: 'Context API', level: 72 },
]

export const tools = [
  'VS Code', 'Figma (basics)', 'Vercel', 'Netlify',
  'npm', 'REST APIs', 'Responsive Design',
]

export const projects = [
  {
    title: 'CartAura',
    description:
      'A full-featured e-commerce app with product listings, search, cart, and checkout. Built with Redux Toolkit for state management and MUI for UI components. Dark theme, clean layout.',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'MUI'],
    github: 'https://github.com/Anshu07-stack/ecommerce-web-application',
    live: 'https://ecommerce-web-application-five.vercel.app/',
    image: '/cartaura.png',
    previewBg: '#1a1208',
    previewText: '#c9a84c',
  },
  {
    title: 'EMS — Employee Management',
    description:
      'A role-based Employee Management System with Admin and Employee dashboards. Handles attendance tracking, performance, and payroll in one unified place. Built with Context API.',
    tech: ['React', 'Context API', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Anshu07-stack/Employee-Management-System',
    live: 'https://employee-management-system-rouge-psi.vercel.app/',
    image: '/ems.png',
    previewBg: '#0f0f0f',
    previewText: '#00c896',
  },
  {
    title: 'Portfolio Website',
    description:
      'This portfolio — designed and built from scratch. Clean typography, warm color palette, smooth scroll animations, and a working EmailJS contact form. No template used.',
    tech: ['React', 'Tailwind CSS', 'EmailJS', 'Vite'],
    github: 'https://github.com/Anshu07-stack/Portfolio',
    live: null,
    image: null,
    previewBg: '#F5F0E8',
    previewText: '#E8572A',
  },
]
