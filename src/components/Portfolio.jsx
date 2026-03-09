import React from "react";

const projects = [

  {
    title: "Azure Hub-Spoke DevOps Infrastructure",
    summary: "Automated Hub–Spoke microservices architecture on Azure using Terraform, Jenkins, Ansible, and Docker with CI/CD pipelines and secure infrastructure provisioning.",
    tech: ["terraform", "azure", "jenkins", "ansible", "docker", "nginx", "microservices", "iac"],
    github: "https://github.com/Adityarrudola/ansible-terraform-hubspoke",
    image: "/project-logo/hubspoke.png",
  },

  {
    title: "DevOps Workflow (EKS + GitOps)",
    summary: "Automated DevOps pipeline deploying containerized applications on AWS EKS using Docker, Helm, GitHub Actions and ArgoCD with GitOps-based Kubernetes deployments.",
    tech: ["aws", "docker", "kubernetes", "eks", "helm", "argocd", "github-actions", "gitops"],
    github: "https://github.com/Adityarrudola/devops-workflow",
    image: "/project-logo/devopsified.png",
  },

  {
    title: "CI/CD Pipeline with Jenkins",
    summary: "Secure CI/CD workflow using Jenkins, Docker and Azure to automate container builds, registry pushes and cloud deployment with pipeline approvals and notifications.",
    tech: ["jenkins", "docker", "azure", "devops", "ci-cd", "dockerhub", "automation"],
    github: "https://github.com/Adityarrudola/cicd-Jenkins",
    image: "/project-logo/jenkins.png",
  },

  {
    title: "Azure App Service CI/CD Deployment",
    summary: "Node.js application deployed on Azure App Service with GitHub Actions CI/CD, autoscaling, HTTPS enforcement and monitoring using Application Insights.",
    tech: ["azure", "nodejs", "github-actions", "application-insights", "devops", "express"],
    github: "https://github.com/Adityarrudola/node-app-service",
    image: "/project-logo/appservice.png",
  },

  {
    title: "Secure File Vault",
    summary: "Zero-trust cloud storage solution demonstrating secure file storage and sharing using AWS services including Cognito authentication, KMS encryption and IAM policies.",
    tech: ["aws", "cognito", "iam", "s3", "kms", "amplify", "cloudtrail", "security"],
    github: "https://github.com/Adityarrudola/Secure-File-Vault",
    image: "/project-logo/filevault.png",
  },

  {
    title: "Expora - Virtual Travel Companion",
    summary: "Cloud-native virtual travel platform offering immersive 360° destination tours built with React and deployed using AWS serverless architecture.",
    tech: ["aws", "react", "lambda", "api-gateway", "dynamodb", "s3", "ec2", "route53"],
    github: "https://github.com/Adityarrudola/Expora-VirtualTravelCompanion",
    image: "/project-logo/expora.png",
  },

  {
    title: "Crystal Memory Game",
    summary: "Dockerized browser-based memory game deployed using AWS Elastic Beanstalk demonstrating containerized application lifecycle.",
    tech: ["docker", "nginx", "aws", "elastic-beanstalk", "javascript"],
    github: "https://github.com/Adityarrudola/crystal-memory",
    image: "/project-logo/crystal-memory.jpg",
  },
  
  {
    title: "End-to-End Encrypted Multimedia Platform",
    summary: "Secure chat and multimedia sharing platform implementing encryption algorithms and secure communication protocols using Python.",
    tech: ["python", "cryptography", "encryption", "secure-communication", "aes"],
    github: "https://github.com/Adityarrudola/End-to-End-Encrypted-Multimedia-Platform",
    image: "/project-logo/encrypted-chat.png",
  },

  {
    title: "MERN Authentication System",
    summary: "Full-stack MERN authentication system implementing JWT-based stateless authentication with secure login and protected API routes.",
    tech: ["mongodb", "express", "react", "nodejs", "jwt", "authentication"],
    github: "https://github.com/Adityarrudola/Mern-Auth-App",
    image: "/project-logo/mern-auth.png",
  },

  {
    title: "Library Management System",
    summary: "Full-stack ASP.NET application for managing book inventory, user management and automated issue-return workflows.",
    tech: ["asp.net", "c#", "ms-sql", "bootstrap", "javascript"],
    github: "https://github.com/Adityarrudola/E-Library-Management-System",
    image: "/project-logo/librarymng.png",
  },

  {
    title: "TSP Algorithm Visualizer",
    summary: "Interactive visualization tool for solving the Traveling Salesman Problem using multiple algorithms implemented in Python.",
    tech: ["python", "algorithms", "streamlit", "numpy", "pandas", "matplotlib"],
    github: "https://github.com/Adityarrudola/Travelling-Salesman-Simulator",
    image: "/project-logo/tsp.png",
  },

  {
    title: "Movie Discovery App",
    summary: "Web application integrating the TMDB API to fetch and display real-time movie data using JavaScript.",
    tech: ["javascript", "html", "css", "api"],
    github: "https://github.com/Adityarrudola/Movie-App",
    image: "/project-logo/movie.png",
  },

  {
    title: "Mini JavaScript Games",
    summary: "Collection of interactive browser games developed using HTML, CSS and JavaScript to explore frontend mechanics.",
    tech: ["javascript", "html", "css"],
    github: "https://github.com/Adityarrudola/Mini-Js-Games",
    image: "/project-logo/minigames.png",
  },

  {
    title: "Gym Website",
    summary: "Responsive fitness website built using HTML, CSS and Font Awesome with modern layout design.",
    tech: ["html", "css", "javascript", "responsive-design"],
    github: "https://github.com/Adityarrudola/GYM-Website",
    image: "/project-logo/gym.png",
  }

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