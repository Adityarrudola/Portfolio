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
      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          {/* Quokka Labs */}

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">DevOps Engineer Intern</h4>
            <p className="timeline-text">Quokka Labs</p>
            <span>Jan 2026 — Present</span>

            <p className="timeline-text" style={{ marginTop: "10px" }}>
              • Designed and implemented CI/CD pipelines using Jenkins and GitHub
              for automated build, testing, and deployment workflows.
              <br />
              • Containerized applications using Docker and deployed workloads on
              cloud infrastructure across AWS and Azure environments.
              <br />
              • Automated infrastructure provisioning using Terraform and managed
              environment configurations for scalable deployments.
              <br />
              • Integrated monitoring and logging solutions to improve system
              observability and reliability.
            </p>
          </li>


          {/* Seldom Labs */}

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cloud Engineer Intern</h4>
            <p className="timeline-text">Seldom Labs</p>
            <span>May 2025 — July 2025</span>

            <p className="timeline-text" style={{ marginTop: "10px" }}>
              • Designed cloud-native architectures on AWS using services like EC2,
              S3, IAM, Route 53, and Lambda.
              <br />
              • Developed Terraform modules to automate infrastructure provisioning
              including VPC networks, security groups, and API Gateway.
              <br />
              • Implemented CI/CD pipelines using GitHub Actions for automated
              Docker builds and cloud deployments.
            </p>
          </li>


          {/* Entab */}

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Development Intern
            </h4>
            <p className="timeline-text">Entab Infotech</p>
            <span>Aug 2023 — Oct 2023</span>

            <p className="timeline-text" style={{ marginTop: "10px" }}>
              • Developed application modules using ASP.NET Core, C#, and MS-SQL
              for enterprise education management systems.
              <br />
              • Built responsive interfaces using ASP.NET Web Forms and JavaScript
              with both client-side and server-side validation.
              <br />
              • Implemented secure CRUD operations and stored procedures for
              efficient database interactions.
            </p>
          </li>

        </ol>
      </section>

    </article>
  );
}
