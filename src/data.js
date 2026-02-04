// import img1 from './img/portfolio/portfolio-1.jpg'
// import img2 from './img/portfolio/portfolio-2.jpg'
// import img3 from './img/portfolio/portfolio-3.jpg'
// import img4 from './img/portfolio/portfolio-4.jpg'
// import img5 from './img/portfolio/portfolio-5.jpg'
// import img6 from './img/portfolio/portfolio-6.jpg'

export const pageLinks = [
  {
    id: 1,
    href: '#hero',
    icon: 'bx bx-home',
    aClassName: 'nav-link scrollto active',
    text: 'Home',
  },
  {
    id: 2,
    href: '#about',
    icon: 'bx bx-user',
    aClassName: 'nav-link scrollto',
    text: 'About',
  },
  {
    id: 3,
    href: '#resume',
    icon: 'bx bx-file-blank',
    aClassName: 'nav-link scrollto',
    text: 'Resume',
  },
  // {
  //   id: 4,
  //   href: '#portfolio',
  //   icon: 'bx bx-book-content',
  //   aClassName: 'nav-link scrollto',
  //   text: 'Portfolio',
  // },
  // {
  //   id: 5,
  //   href: '#services',
  //   icon: 'bx bx-server',
  //   aClassName: 'nav-link scrollto',
  //   text: 'Services',
  // },
  {
    id: 4,
    href: '#contact',
    icon: 'bx bx-envelope',
    aClassName: 'nav-link scrollto',
    text: 'Contact',
  },
]

export const socialLinks = [
  //   {
  //     id: 1,
  //     href: 'https://www.twitter.com',
  //     icon: 'bx bxl-twitter',
  //     text: 'twitter',
  //   },
  //   {
  //     id: 2,
  //     href: 'https://www.facebook.com',
  //     icon: 'bx bxl-facebook',
  //     text: 'facebook',
  //   },
  //   {
  //     id: 3,
  //     href: 'https://www.instagram.com',
  //     icon: 'bx bxl-instagram',
  //     text: 'instagram',
  //   },
  {
    id: 1,
    href: 'https://www.linkedin.com/in/eduardo-tornquist-albella-3b759b124/',
    icon: 'bx bxl-linkedin',
    text: 'linkedin',
  },
  {
    id: 2,
    href: 'https://github.com/eatornquist',
    icon: 'bx bxl-github',
    text: 'github',
  },
]

// export const items = [
//   {
//     id: 1,
//     src: img1,
//     title: 'App 1',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-app',
//   },
//   {
//     id: 2,
//     src: img2,
//     title: 'Web 3',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-web',
//   },
//   {
//     id: 3,
//     src: img3,
//     title: 'App 2',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-app',
//   },
//   {
//     id: 4,
//     src: img4,
//     title: 'Card 2',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-card',
//   },
//   {
//     id: 5,
//     src: img5,
//     title: 'Web 2',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-web',
//   },
//   {
//     id: 6,
//     src: img6,
//     title: 'App 3',
//     className: 'col-lg-4 col-md-6 portfolio-item filter-card',
//   },
// ]

export const personalInformation1 = [
  {
    id: 1,
    title: 'Email:',
    info: 'eatornquist04@gmail.com',
  },
  {
    id: 2,
    title: 'Phone:',
    info: '786-609-1118',
  },
  {
    id: 3,
    title: 'Location:',
    info: 'Los Angeles, CA',
  },
]

export const personalInformation2 = [
  {
    id: 1,
    title: 'Role:',
    info: 'Full-Stack Developer',
  },
  {
    id: 2,
    title: 'Degree:',
    info: 'B.S. in Software Engineering',
  },
  {
    id: 4,
    title: 'Availability:',
    info: 'Open to interviews',
  },
  // {
  //   id: 3,
  //   title: 'Website:',
  //   info: 'www.example.com',
  // },
  // {
  //   id: 4,
  //   title: 'Role:',
  //   info: 'Software Developer',
  // },
]

export const skills1 = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'CSS',
    percent: '90',
  },
  {
    id: 3,
    title: 'JAVASCRIPT',
    percent: '75',
  },
]

export const skills2 = [
  {
    id: 4,
    title: 'PHP',
    percent: '80',
  },
  {
    id: 5,
    title: 'SYMFONY',
    percent: '60',
  },
  {
    id: 6,
    title: 'PYTHON',
    percent: '30',
  },
]

export const skillCategories = [
  {
    id: 1,
    category: 'Frontend',
    skills: ['React', 'Redux', 'Material UI'],
  },
  {
    id: 2,
    category: 'Backend',
    skills: ['NestJS', 'TypeScript'],
  },
  {
    id: 3,
    category: 'Cloud',
    skills: [
      'Microsoft Azure (Cosmos DB, Function Apps, Blob Storage, Key Vault)',
    ],
  },
  {
    id: 4,
    category: 'DevOps & Tools',
    skills: ['Git', 'Azure DevOps', 'Visual Studio'],
  },
]

export const resumeEducation = [
  {
    id: 1,
    title: 'Bachelor’s in Software Engineering',
    periodTime: 'Sept 2012 — Sept 2017',
    institution:
      'Universidad Tecnológica de la Habana Jose Antonio Echeverría, Havana, Cuba',
    description:
      'Title evaluated by Josef Silny and Associates (<a href="https://jsilny.org/" target="_blank" rel="noopener noreferrer">www.jsilny.org</a>) in the Foreign Credential Evaluation, obtaining the equivalent of Bachelor of Science in Information Technology.',
  },
  {
    id: 2,
    title:
      '<a href="https://www.chegg.com/skills/our-programs/frontend-web-development/" target="_blank" rel="noopener noreferrer">Frontend Web Development Certificate Program</a>',
    periodTime: 'Nov 2023 — Feb 2024',
    institution: 'Chegg Skills (Thinkful)',
    description:
      'Develop foundational skills in frontend web development, building on your existing knowledge of HTML, CSS, JavaScript, and advanced topics like React JS.',
  },
  {
    id: 3,
    title:
      '<a href="https://learn.microsoft.com/en-us/users/eduardotornquist-4707/credentials/7a0b1c6f5e02995b?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">AZ-900: Microsoft Azure Fundamentals Certification</a>',
    periodTime: 'Sept 2024',
    institution: 'Microsoft',
    description:
      'Demonstrate foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance features and tools.',
  },
]

let responsabilities1 = [
  'Designed and developed a production-grade web application using React, Redux, Material UI, and NestJS to manage a large catalog of residential construction plans for a national homebuilder.',
  'Implemented complex, form-driven workflows to create, edit, duplicate, hide, and manage plans with dozens of configurable attributes and validations.',
  'Built and documented RESTful APIs using Swagger decorators, ensuring consistent contracts between frontend and backend systems',
  'Developed NestJS backend services integrated with Azure Cosmos DB to support plan lifecycle management, visibility controls, and persistence of AI-generated metadata.',
]

let responsabilities2 = [
  'Contributed to the development and maintenance of the company’s core ERP system, built with .NET and WPF, supporting end-to-end operations across sales, purchasing, accounting, and other departments.',
  'Designed and implemented new user interfaces for ERP modules, including functionality to export invoices and transactional data to Excel for operational and reporting needs',
  'Investigated and resolved bugs and system issues, improving overall system reliability and user experience for internal teams.',
  'Worked extensively with Microsoft SQL Server, developing and maintaining stored procedures that supported core ERP functionality',
]

export const resumeExperience = [
  {
    id: 1,
    title: 'Software Developer',
    periodTime: 'Aug 2023 - Present',
    company:
      '<a href="https://www.lennar.com/" target="_blank" rel="noopener noreferrer">Lennar</a>, Miami, FL',
    responsabilities: responsabilities1,
  },
  {
    id: 2,
    title: 'Software Developer',
    periodTime: 'Feb 2022 — Jul 2023',
    company:
      '<a href="https://www.quirchfoods.com/" target="_blank" rel="noopener noreferrer">Quirch Foods</a>, Miami, FL',
    responsabilities: responsabilities2,
  },
]
