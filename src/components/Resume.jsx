import React from "react";

export default function Resume() {
  return (
    <article className="resume active">
      {/* Header */}
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education & Certifications */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education & Certifications</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Jaypee Institute of Information Technology
            </h4>
            <p className="timeline-text">Masters in Computer Application</p>
            <span>Aug 2024 — Aug 2026</span>
            <p className="timeline-text">Noida, UP, India</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Institute of Innovation in Technology and Management
            </h4>
            <p className="timeline-text">Bachelors in Computer Application</p>
            <span>Aug 2021 — Aug 2024</span>
            <p className="timeline-text">Janakpuri, Delhi</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              DAV Public School
            </h4>
            <span>Passed Out - 2021</span>
            <p className="timeline-text">Dayanand Vihar, Delhi</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Certifications</h4>
            <p className="timeline-text">
              • AWS Certified Solutions Architect Associate
              <br />
              • The Ultimate DevOps Bootcamp
              <br />
              • Data Visualisation Using Power BI
              <br />
              • Beginner to Advanced C,C++ 
            </p>
          </li>

        </ol>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cloud Engineer Intern</h4>
            <p className="timeline-text">Seldom Labs</p>
            <span>May 2025 — July 2025</span>

            <p className="timeline-text" style={{ marginTop: "10px" }}>
              • Designed cloud-native solutions on AWS (EC2, S3, IAM, Route 53,
              Lambda).
              <br />
              • Developed Terraform modules to automate infrastructure (VPCs,
              Security Groups, API Gateway).
              <br />
              • Implemented CI/CD pipelines using GitHub Actions for automated
              Docker builds.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Development Intern
            </h4>
            <p className="timeline-text">Entab Infotech</p>
            <span>Aug 2023 — Oct 2023</span>

            <p className="timeline-text" style={{ marginTop: "10px" }}>
              • Developed core modules using ASP.NET Core, C#, and MS-SQL.
              <br />
              • Built responsive UI with ASP.NET Web Forms and JavaScript,
              implementing client-side and server-side validations.
              <br />
              • Implemented secure CRUD operations and stored procedures for
              reliable data handling.
            </p>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section className="service">
        <h3 className="h3 service-title">Technical Skills</h3>

        <ul className="service-list">
          {/* Cloud */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Cloud skills icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud Platforms (AWS)</h4>
              <p className="service-item-text">
                EC2, S3, IAM, Lambda, API Gateway, DynamoDB, VPC, Route 53, Security
                Groups, High Availability Architecture.
              </p>
            </div>
          </li>

          {/* Containers */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="Docker Kubernetes icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Docker & Kubernetes</h4>
              <p className="service-item-text">
                Docker image creation and optimization, container orchestration,
                Kubernetes deployments, services, scaling, and cluster basics.
              </p>
            </div>
          </li>

          {/* DevOps */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="DevOps automation icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">DevOps & Infrastructure</h4>
              <p className="service-item-text">
                Infrastructure as Code using Terraform, Git-based workflows,
                automation, environment consistency, and deployment reliability.
              </p>
            </div>
          </li>

          {/* Security */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Cloud security icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">CI/CD & Cloud Security</h4>
              <p className="service-item-text">
                Secure CI/CD pipelines with GitHub Actions and ArgoCD, IAM best
                practices, secrets management, and secure cloud configurations.
              </p>
            </div>
          </li>

          {/* Core */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Programming skills icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Core Engineering</h4>
              <p className="service-item-text">
                C++, Java, Linux fundamentals, and strong understanding
                of Data Structures & Algorithms.
              </p>
            </div>
          </li>
        </ul>
      </section>

    </article>
  );
}
