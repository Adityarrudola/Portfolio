// Skills Section Logo's
import ec2Logo from './assets/tech_logo/ec2.png';
import s3Logo from './assets/tech_logo/s3.png';
import lambdaLogo from './assets/tech_logo/lambda.png';
import cognitoLogo from './assets/tech_logo/cognito.png';
import dynamodbLogo from './assets/tech_logo/dynamodb.png';
import vpcLogo from './assets/tech_logo/vpc.png';
import ecsLogo from './assets/tech_logo/ecs.png';
import route53Logo from './assets/tech_logo/route53.png';
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import entabLogo from './assets/company_logo/entabLogo.png';
import seldomLabsLogo from './assets/company_logo/seldomLabsLogo.png';

// Education Section Logo's
import jiitLogo from './assets/education_logo/jiit.png';
import iitmipuLogo from './assets/education_logo/iitmipu.png';
import davLogo from './assets/education_logo/dav.png';

// Project Section Logo's
import amazonClone from './assets/work_logo/amazon.png';
import chatApp from './assets/work_logo/chatapp.png';
import eLibrary from './assets/work_logo/elibrary.png';
import Expora from './assets/work_logo/expora.png';
import Gymate from './assets/work_logo/gymate.png';
import tsp from './assets/work_logo/tsp.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      //{ name: 'SASS', logo: sassLogo },
      //{ name: 'Angular', logo: angularLogo },
      //{ name: 'Redux', logo: reduxLogo },
      //{ name: 'Next JS', logo: nextjsLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Springboot', logo: springbootLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      //{ name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      //{ name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'AWS - Services',
    skills: [
      { name: 'EC2', logo: ec2Logo },
      { name: 'S3', logo: s3Logo },
      { name: 'Lambda', logo: lambdaLogo },
      { name: 'Route 53', logo: route53Logo },
      { name: 'DynamoDB', logo: dynamodbLogo },
      { name: 'Cognito', logo: cognitoLogo },
      { name: 'VPC', logo: vpcLogo },
      { name: 'ECS', logo: ecsLogo },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
    ],
  },
  
];

  export const experiences = [
  {
    id: 0,
    img: entabLogo,
    role: ".NET Developer Intern",
    company: "Entab Infotech",
    date: "Aug 2023 - Sep 2023",
    desc: "Gained hands-on experience in .NET development by working with ASP.NET Core, ASP.NET MVC, and C#. Developed dynamic and responsive web pages using HTML, CSS, JavaScript, and Bootstrap. Integrated front-end components with backend logic and worked with MS-SQL for data-driven applications. This internship provided practical exposure to enterprise-level software development workflows and tools.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ASP.NET Core",
      "ASP.NET MVC",
      "C#",
      "Bootstrap",
      "MS-SQL",
    ],
  },
  {
    id: 1,
    img: seldomLabsLogo,
    role: "DevOps Engineer Intern",
    company: "Seldom Labs",
    date: "June 2025 - August 2025",
    desc: "Worked on automating infrastructure deployment and application delivery pipelines using tools like AWS, Docker, GitHub Actions, and Terraform. Assisted in setting up CI/CD workflows, container orchestration, and monitoring solutions for scalable web applications. Focused on enhancing system reliability, deployment efficiency, and cloud-native practices across development and production environments.",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "Linux",
      "CI/CD",
      "Monitoring",
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: jiitLogo,
      school: "JIIT, Noida-62",
      date: "July 2024 - July 2026",
      grade: "8.33 CGPA",
      desc: "I am currently pursuing my Master's degree (MCA) in Computer Applications from JIIT, Noida-62. During my time at JIIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at JIIT has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: iitmipuLogo,
      school: "IITM-IPU, Janakpuri",
      date: "Sept 2021 - sept 2024",
      grade: "8.35 CGPA",
      desc: "I completed my Bachelor of Computer Application (BCA) from IITM-IPU, Janakpuri. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    },
    {
      id: 2,
      img: davLogo,
      school: "SR DAV Public School, Dayanand Vihar",
      date: "Apr 2020 - March 2021",
      grade: "81.6%",
      desc: "I completed my class 12 education from SR DAV Public School, Dayanand Vihar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: davLogo,
      school: "SR DAV Public School, Dayanand Vihar",
      date: "Apr 2018 - March 2019",
      grade: "92%",
      desc: "I completed my class 10 education from SR DAV Public School, Dayanand Vihar, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  






  export const projects = [
    {
      id: 0,
      title: "Travelling Salesman Simulator",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: tsp,
      tags: ["Python","Streamlit"],
      github: "https://github.com/Adityarrudola/Travelling-Salesman-Simulator.git",
    },
    {
      id: 1,
      title: "Expora - A Virtual Travel Companion",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: Expora,
      tags: ["React JS", "EC2", "S3", "Cognito","Route 53", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Adityarrudola/Expora-VirtualTravelCompanion.git",
    },
    {
      id: 2,
      title: "E Library Management System",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: eLibrary,
      tags: ["ASP.NET", "ASP MVC", "HTML", "CSS", "C#", "MS-SQL"],
      github: "https://github.com/Adityarrudola/E-Library-Management-System.git",
    },
    {
      id: 3,
      title: "Gymmate - A Gym Website",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: Gymate,
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      github: "https://github.com/Adityarrudola/GYM-Website.git",
    },
    {
      id: 4,
      title: "Amazon Clone",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: amazonClone,
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      github: "https://github.com/Adityarrudola/Amazon-Clone-Updated.git",
    },
    {
      id: 5,
      title: "End to End Encypted Multi Media Platform",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: chatApp,
      tags: ["Python", "Encryption", "Encoding"],
      github: "https://github.com/Adityarrudola/Chat-App.git",
    },
    
  ];  