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
  'VS Code', 'Vercel', 'Netlify',
  'npm', 'REST APIs', 'Responsive Design',
]

export const projects = [
  {
    title: 'CartAura',
    description:
    '  A modern e-commerce web application that allows users to browse products, search items, manage a shopping cart, and proceed through a checkout flow. Developed with React and Redux Toolkit for scalable state management, and styled using Material UI to create a clean and responsive interface with dark mode support.'
,
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
     ' A role-based Employee Management System featuring dedicated Admin and Employee dashboards. It enables attendance tracking, performance monitoring, and payroll management in a centralized interface. Built with React and Context API to ensure smooth state management and a responsive user experience.'
,
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
      'A custom personal portfolio website built to showcase my projects, skills, and development work. It features clean typography, a warm color palette, and smooth scroll animations to deliver a modern user experience. Built with React and Tailwind CSS and deployed on Vercel.'
,
    tech: ['React', 'Tailwind CSS', 'EmailJS', 'Vite'],
    github: 'https://github.com/Anshu07-stack/Portfolio',
    live: 'https://portfolio-rust-one-25.vercel.app/',
    image: '/portfolio-preview.png',
    previewBg: '#F5F0E8',
    previewText: '#E8572A',
  },
]
