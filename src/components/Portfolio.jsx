import React from "react";

const projects = [
  {
    title: "Secure File Vault",
    summary: "Currently developing a zero-trust file storage solution.",
    tech: ["aws", "cognito", "iam", "s3", "kms", "amplify", "cloudtrail", "encryption"],
    github: "https://github.com/Adityarrudola/",
    image: "/assets/images/filevault.jpg",
  },
  {
    title: "Expora",
    summary: "A virtual travel companion build using react.js and deployed on AWS.",
    tech: ["aws", "iam", "ec2", "s3", "cognito", "route53", "api-gateway", "dynamoDB", "lambda", "serverless", "react"],
    github: "https://github.com/Adityarrudola/Expora-VirtualTravelCompanion",
    image: "/assets/images/expora.png",
  },
  {
    title: "DevOpsiFied App",
    summary: "Built an automated DevOps CI/CD pipeline using various tools.",
    tech: ["github", "git", "docker", "kubernetes", "aws", "helm-charts", "kubectl", "argocd", "github-actions"],
    github: "https://github.com/Adityarrudola/devops-workflow",
    image: "/assets/images/devopsified.png",
  },
  {
    title: "Crystal-Memory",
    summary: "Dockerized memory game containerized and deployed via AWS Elastic Beanstalk.",
    tech: ["docker", "containerisation", "aws", "elastic-beanstalk", "git", "github"],
    github: "https://github.com/Adityarrudola/crystal-memory",
    image: "/assets/images/crystal-memory.jpg",
  },
  {
    title: "Library Management System",
    summary: "Developed a full-stack System to automate user management, book inventory, and related workflows.",
    tech: ["ASP.NET", "C#", "MS-SQL", "WebForms", "HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/Adityarrudola/E-Library-Management-System",
    image: "/assets/images/librarymng.png",
  },
  {
    title: "Gym Website",
    summary: "A responsive fitness website featuring key gym sections and a modern design.",
    tech: ["html", "css", "js", "bootstrap"],
    github: "https://github.com/Adityarrudola/GYM-Website",
    image: "/assets/images/gym.png",
  },
  {
    title: "TSP - Visualiser",
    summary: "A powerful and interactive web-based application to visualize and solve TSP using multiple algorithms.",
    tech: ["python", "streamlit", "numpy", "pandas", "matplotlib", "algorithms"],
    github: "https://github.com/Adityarrudola/Travelling-Salesman-Simulator",
    image: "/assets/images/tsp.png",
  },
];

export default function Portfolio() {
  return (
    <article className="portfolio active" style={{ paddingBottom: "50px" }}>
      <header>
        <h2 className="h2 article-title" style={{ marginBottom: "30px" }}>Portfolio</h2>
      </header>

      <section className="projects">
        {/* CSS Grid ensures the cards wrap perfectly */}
        <ul className="project-list" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '25px',
          listStyle: 'none',
          padding: 0 
        }}>
          {projects.map((project, index) => (
            <li key={index} className="project-item active">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                
                {/* 1. Image Container with Fixed Aspect Ratio */}
                <figure className="project-img" style={{ 
                  position: 'relative', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  margin: 0,
                  aspectRatio: '16 / 9', // Forces all images to the same shape
                  background: '#202022'
                }}>
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Crops the image to fill the 16:9 box without stretching
                      display: 'block'
                    }}
                  />
                </figure>

                {/* 2. Project Content Section */}
                <div style={{ padding: '15px 5px' }}>
                  <h3 className="project-title" style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    margin: '0 0 8px 0',
                    color: '#fafafa'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p className="project-summary" style={{ 
                    fontSize: '0.9rem', 
                    color: '#d6d6d6', 
                    lineHeight: '1.4',
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: '2', // Limits text to 2 lines
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.summary}
                  </p>

                  {/* 3. Tech Stack Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tech.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.7rem', 
                        background: 'rgba(255, 219, 112, 0.1)', 
                        padding: '2px 8px', 
                        borderRadius: '4px', 
                        color: '#ffdb70',
                        border: '1px solid rgba(255, 219, 112, 0.2)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}