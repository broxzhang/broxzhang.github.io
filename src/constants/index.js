import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,  
    devFortressIcon,
    groupe3dmIcon,
    livescaleIcon,
    connectGoIcon,
    trafficTechIcon,
    orangeDigitalIcon,
    assetScienceIcon,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Consultant Software Developer",
      company_name: "DevFortress",
      icon: devFortressIcon,
      iconBg: "#383E56",
      date: "May 2022 – June 2023",
      points: [
        "Spearheaded the development of a high-performance web application using NodeJS, Spring, Next.js, Tailwind CSS, and Graph CMS.",
        "Collaborated directly with clients to capture requirements and integrate new features, enhancing client satisfaction.",
        "Led a remote development team, ensuring efficient, on-time project delivery across multiple time zones.",
        "Executed comprehensive testing and debugging to uphold stringent quality standards."
      ],
    },
    {
      title: "Lead Front End Developer",
      company_name: "Groupe 3DM",
      icon: groupe3dmIcon,
      iconBg: "#E6DEDD",
      date: "Aug 2021 – Apr 2022",
      points: [
        "Led the front-end development team, providing guidance and mentorship to junior developers.",
        "Optimized front-end applications using Next.js and React, resulting in a 25% improvement in load times.",
        "Collaborated with backend teams to ensure seamless integration.",
        "Spearheaded the implementation of best practices in code quality and user experience.",
        "Coordinated with project managers and stakeholders to align development efforts with business goals."
      ],
    },
    {
      "title": "Backend Developer",
      "company_name": "Livescale",
      "icon": livescaleIcon,
      "iconBg": "#383E56",
      "date": "Dec 2020 – Feb 2021",
      "points": [
        "Implemented RESTful backend services using NodeJS, ensuring scalable and maintainable architecture.",
        "Optimized database queries and server performance, resulting in a 15% increase in application efficiency.",
        "Collaborated closely with front-end developers to integrate APIs, enhancing overall application functionality and user experience.",
        "Proactively identified and resolved bottlenecks, leading to improved application stability and performance."
      ]
    },
    {
      "title": "Full Stack Developer",
      "company_name": "Connect&Go",
      "icon": connectGoIcon,
      "iconBg": "#E6DEDD",
      "date": "Feb 2020 – Aug 2020",
      "points": [
        "Developed dynamic web applications using PHP, Laravel, Vue.js, and AngularJS, delivering seamless and responsive user interfaces.",
        "Collaborated with UI/UX designers to refine application usability, resulting in a 20% improvement in user engagement.",
        "Implemented robust back-end logic with Laravel, enhancing data processing and retrieval speeds.",
        "Led the migration of legacy systems to modern frameworks, reducing technical debt and improving maintainability."
      ]
    },
    {
      "title": "Developer",
      "company_name": "Traffic Tech",
      "icon": trafficTechIcon,
      "iconBg": "#383E56",
      "date": "Jun 2019 – Feb 2020",
      "points": [
        "Developed and maintained various web solutions, focusing on optimizing performance and enhancing user experience.",
        "Designed and implemented new features, leading to a 30% increase in client satisfaction and user retention.",
        "Collaborated with cross-functional teams to ensure project alignment with business objectives and timelines.",
        "Conducted code reviews and implemented best practices to maintain high code quality and performance."
      ]
    },
    {
      "title": "Full-Stack Developer",
      "company_name": "ORANGE Digital Systems, Inc.",
      "icon": orangeDigitalIcon,
      "iconBg": "#E6DEDD",
      "date": "May 2018 – Jan 2019",
      "points": [
        "Rebuilt payroll and time entry web applications using modern technology stacks, significantly improving system reliability and performance.",
        "Developed client-side applications with Angular, achieving over 90% test coverage and ensuring high-quality, bug-free deployments.",
        "Designed and implemented complex RESTful APIs and microservices, supporting scalable and efficient data exchange across platforms.",
        "Collaborated with stakeholders to gather requirements and deliver solutions that met and exceeded business needs."
      ]
    },
    {
      "title": "Front-End Developer",
      "company_name": "Asset Science LLC",
      "icon": assetScienceIcon,
      "iconBg": "#383E56",
      "date": "Jun 2016 – Feb 2018",
      "points": [
        "Designed and implemented modular front-end applications using JavaScript, AngularJS, and other web technologies, ensuring scalability and reusability.",
        "Engineered fully responsive single-page applications following MVC design patterns, enhancing user experience across devices.",
        "Optimized front-end performance by implementing best practices in code structure, resulting in a 25% reduction in load times.",
        "Collaborated with back-end developers to integrate APIs seamlessly, ensuring smooth data flow and interaction within applications."
      ]
    }    
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };