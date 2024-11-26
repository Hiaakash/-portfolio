import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  cpp,
  java,
  ruby,
  html,
  css,
  reactjs,
  vuejs,
  redux,
  vuex,
  nextjs,
  nuxtjs,
  tailwind,
  aws,
  nodejs,
  express,
  es,
  spring,
  ror,
  mongodb,
  postgreSql,
  git,
  figma,
  docker,
  threejs,

  codechef,
  codeforces,
  githublogo,
  leetcode,
  stackblitz,

  linkedin,
  twitter,

  rapidinnovation,
  gammastack,

  apn,
  trafilea,
  sephora,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack",
    icon: web,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Frontend",
    icon: creator,
  },
  {
    title: "Mobile",
    icon: mobile,
  },
];

const expertise = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Vuex",
    icon: vuex,
  },
  {
    name: "Nuxt JS",
    icon: nuxtjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "ROR",
    icon: ror,
  },
  {
    name: "PostgreSQL",
    icon: postgreSql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Elasticsearch",
    icon: es,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Rapid Innovation",
    icon: rapidinnovation,
    iconBg: "#383E56",
    date: "June 2021 - Oct 2021",
    points: [
      "Developed highly responsive user interfaces based on wireframes, focusing on delivering a seamless frontend experience.",
      "Designed and implemented backend functionality by creating and optimizing smart contracts using Solidity.",
      "Writing test cases and conducted testing of applications using Mocha to ensure reliability and performance.",
      "Successfully integrated Ethereum-based smart contracts into the client-side architecture for smooth interaction.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],


  },
  {
    title: "Full Stack Developer",
    company_name: "GammaStack",
    icon: gammastack,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Oct 2024",
    points: [
      " Collaborated as a full-stack developer with, Trafilea and Sephora SEA Singapore contributing to their multi-tenant platform, ensuring scalability and seamless user experiences.",
      "Designed and implemented robust backend solutions, including RESTful APIs, microservices architecture, and efficient database schemas to support high-traffic applications.",
      "Built rich, data-driven web applications by integrating and optimizing RESTful APIs and services, enhancing usability and performance.",
      "Designed, developed, and maintained high-quality, scalable, and performant web application user interfaces, adhering to industry standards and best practices",
      "Successfully improved the performance score of a Microfrontend application from 18 to 65, achieving a 261% increase in performance metrics.",
      "Followed code quality standards by implementing robust testing, peer reviews, and thorough documentation to ensure maintainable and bug-free applications."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Auto Parts Near By",
    description:
      "A web-based platform that is operator of an online auto parts marketplace intended to search for available new & remanufactured parts from retailers. The company's platform offers products from various retailer brands that utilize a proprietary catalog & search engine by zip code, enabling customers to easily find their required auto parts from the retailers nearby which will transition them to a digital workflow solution that enhances efficiency & profitability.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
    ],
    image: apn,
    source_code_link: "https://pitchbook.com/profiles/company/462142-09#overview",
  },
  {
    name: "Trafilea",
    description:
      "Trafilea is an Ecommerce Tech Group that specializes in building and expanding transformative brands online. The company leverages technology, data, and marketing to create unique consumer experiences and solve problems, focusing on digitally-first global brands with meaningful purposes. Trafilea primarily sells to the ecommerce industry, with a strong emphasis on direct-to-consumer marketing and sales. It is based in Montevideo, Uruguay.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: trafilea,
    source_code_link: "https://www.trafilea.com/",
  },
  {
    name: "Sephora SEA",
    description:
      "Sephora SEA is a high growth division of leading global beauty retailer, Sephora. Our teams run omni-channel retail businesses in Singapore, Thailand, Australia & Malaysia, franchise operations in India & Indonesia, and we run ecommerce only businesses in Philippines, Hong Kong SAR, Indonesia, and New Zealand. Our success is built on innovation, a unique product portfolio, market leading digital capability, and our exceptional people!",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby",
        color: "pink-text-gradient",
      },
    ],
    image: sephora,
    source_code_link: "https://www.sephora.sg/",
  },
];

const codingProfiles = [
  {
    name: 'Leetcode',
    link: 'https://leetcode.com/Hiaakash/',
    icon: leetcode
  },
  {
    name: 'Codeforces',
    link: 'https://codeforces.com/profile/Hiaakash',
    icon: codeforces
  },
  {
    name: 'Codechef',
    link: 'https://www.codechef.com/users/hiaakash',
    icon: codechef
  },
  {
    name: 'Github',
    link: 'https://github.com/Hiaakash',
    icon: githublogo
  },
  {
    name: 'Stackblitz',
    link: 'https://stackblitz.com/@Hiaakash',
    icon: stackblitz,
  }
]

const socialProfiles = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/highsky/',
    icon: linkedin
  },
  {
    name: 'twitter',
    link: 'https://x.com/hi5ky',
    icon: twitter,
  }
]

export { services, technologies, experiences, testimonials, projects, codingProfiles, socialProfiles, expertise };
