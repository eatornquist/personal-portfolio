import img1 from './img/portfolio/portfolio-1.jpg'
import img2 from './img/portfolio/portfolio-2.jpg'
import img3 from './img/portfolio/portfolio-3.jpg'
import img4 from './img/portfolio/portfolio-4.jpg'
import img5 from './img/portfolio/portfolio-5.jpg'
import img6 from './img/portfolio/portfolio-6.jpg'

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
  {
    id: 4,
    href: '#portfolio',
    icon: 'bx bx-book-content',
    aClassName: 'nav-link scrollto',
    text: 'Portfolio',
  },
  {
    id: 5,
    href: '#services',
    icon: 'bx bx-server',
    aClassName: 'nav-link scrollto',
    text: 'Services',
  },
  {
    id: 6,
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

export const items = [
  {
    id: 1,
    src: img1,
    title: 'App 1',
    className: 'col-lg-4 col-md-6 portfolio-item filter-app',
  },
  {
    id: 2,
    src: img2,
    title: 'Web 3',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
  },
  {
    id: 3,
    src: img3,
    title: 'App 2',
    className: 'col-lg-4 col-md-6 portfolio-item filter-app',
  },
  {
    id: 4,
    src: img4,
    title: 'Card 2',
    className: 'col-lg-4 col-md-6 portfolio-item filter-card',
  },
  {
    id: 5,
    src: img5,
    title: 'Web 2',
    className: 'col-lg-4 col-md-6 portfolio-item filter-web',
  },
  {
    id: 6,
    src: img6,
    title: 'App 3',
    className: 'col-lg-4 col-md-6 portfolio-item filter-card',
  },
]

export const personalInformation1 = [
  {
    id: 1,
    title: 'Birthday:',
    info: '4 Apr 1993',
  },
  {
    id: 2,
    title: 'Website:',
    info: 'www.example.com',
  },
  {
    id: 3,
    title: 'Phone:',
    info: '786-609-1118',
  },
  {
    id: 4,
    title: 'City:',
    info: 'Miami',
  },
]

export const personalInformation2 = [
  {
    id: 1,
    title: 'Age:',
    info: '30',
  },
  {
    id: 2,
    title: 'Degree:',
    info: 'Software Engineer',
  },
  {
    id: 3,
    title: 'email:',
    info: 'eatornquist04@gmail.com',
  },
  {
    id: 4,
    title: 'Role:',
    info: 'Software Developer',
  },
]

export const skills1 = [
  {
    id: 1,
    title: 'HTML',
    percent: '100',
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
