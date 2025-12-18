import React from "react";

export default function About() {
  return (
    <article className="about active">
      {/* Header */}
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {/* About text */}
      <section className="about-text">
        <p>
          I am a Cloud Engineer currently pursuing a Master’s in Computer Applications at Jaypee Institute of Information Technology. With a strong foundation in C++ and Java, I specialize in designing scalable, secure cloud-native solutions on AWS and automating infrastructure.
        </p>

        <p>
          My expertise lies in cloud security, containerization, and orchestration using Docker and Kubernetes, along with infrastructure automation through DevOps practices. I am passionate about building reliable, secure backend systems and production-ready deployment pipelines that scale efficiently.
        </p>
      </section>

      {/* What I do */}
      <section className="service">
        <h3 className="h3 service-title">What I do</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Cloud architecture icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud Architecture</h4>
              <p className="service-item-text">
                Designing secure and scalable cloud-native solutions on AWS using
                services like EC2, S3, IAM, Lambda, API Gateway, and DynamoDB.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="Containerization and orchestration icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Docker & Kubernetes</h4>
              <p className="service-item-text">
                Containerizing applications with Docker and managing scalable,
                production-ready workloads using Kubernetes.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="DevOps and automation icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">DevOps & Automation</h4>
              <p className="service-item-text">
                Implementing Infrastructure as Code with Terraform and automating
                deployments to ensure consistency, reliability, and scalability.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="CI/CD and security icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">CI/CD & Cloud Security</h4>
              <p className="service-item-text">
                Building secure CI/CD pipelines using GitHub Actions and ArgoCD,
                focusing on access control, secrets management, and best security
                practices.
              </p>
            </div>
          </li>
        </ul>
      </section>
      
    </article>
  );
}
