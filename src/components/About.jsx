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
          I am a Cloud and DevOps Engineer currently pursuing a Master’s in
          Computer Applications at Jaypee Institute of Information Technology.
          I focus on building scalable, secure, and production-ready cloud
          systems using modern DevOps practices and cloud-native architectures.
        </p>

        <p>
          My experience includes designing infrastructure on AWS and Azure,
          automating environments with Terraform and Ansible, and implementing
          CI/CD pipelines using Jenkins, GitHub Actions, and GitOps workflows.
          I enjoy working across the full lifecycle of systems—from development
          and containerization with Docker to orchestration using Kubernetes
          and automated cloud deployments.
        </p>

        <p>
          Through various DevOps and cloud projects, I have implemented
          infrastructure automation, Kubernetes-based deployments, container
          pipelines, monitoring systems, and secure backend services. I am
          passionate about improving system reliability, scalability, and
          operational visibility through well-designed DevOps workflows.
        </p>

      </section>


      {/* Core Expertise */}
      <section className="service">

        <h3 className="h3 service-title">Core Expertise & Technologies</h3>

        <ul className="service-list">


          {/* Cloud Architecture */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-dev.svg"
                alt="cloud architecture icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud Architecture</h4>
              <p className="service-item-text">
                Designing scalable cloud-native architectures using AWS
                and Azure services including EC2, S3, IAM, Lambda,
                API Gateway, DynamoDB, VPC, Route53, Azure App Service,
                Azure Container Instances, and secure networking
                configurations.
              </p>
            </div>
          </li>


          {/* Linux & Networking */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-dev.svg"
                alt="linux networking icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Linux & Networking</h4>
              <p className="service-item-text">
                Working with Linux servers, SSH authentication,
                system services, package management, and networking
                fundamentals including DNS, ports, public/private
                IPs, and cloud firewall configurations.
              </p>
            </div>
          </li>


          {/* Containerization */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-design.svg"
                alt="docker icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Containerization</h4>
              <p className="service-item-text">
                Packaging applications using Docker including image
                creation, multi-stage builds, container networking,
                container lifecycle management, and container log
                inspection.
              </p>
            </div>
          </li>


          {/* Kubernetes */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-design.svg"
                alt="kubernetes icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Kubernetes Orchestration</h4>
              <p className="service-item-text">
                Managing container workloads using Kubernetes including
                deployments, services, autoscaling, namespaces,
                networking, Helm charts, and GitOps-driven delivery.
              </p>
            </div>
          </li>


          {/* Infrastructure as Code */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-design.svg"
                alt="terraform icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Infrastructure as Code</h4>
              <p className="service-item-text">
                Automating infrastructure provisioning using Terraform
                and configuration management with Ansible to build
                reproducible environments and manage infrastructure
                lifecycle through version-controlled code.
              </p>
            </div>
          </li>


          {/* CI/CD */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-dev.svg"
                alt="cicd icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">CI/CD Automation</h4>
              <p className="service-item-text">
                Designing automated pipelines using Jenkins and GitHub
                Actions for build automation, container image versioning,
                secure secrets management, approval gates, and
                automated deployment workflows.
              </p>
            </div>
          </li>


          {/* Monitoring */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-dev.svg"
                alt="monitoring icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Monitoring & Observability</h4>
              <p className="service-item-text">
                Implementing observability using Grafana dashboards,
                Azure Monitor, Application Insights, and centralized
                logging systems to track metrics, analyze logs,
                detect anomalies, and enable proactive alerting.
              </p>
            </div>
          </li>


          {/* Backend Security */}

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/icon-design.svg"
                alt="backend security icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend & Cloud Security</h4>
              <p className="service-item-text">
                Developing secure backend services using Node.js and
                Express while implementing IAM policies, encryption,
                authentication mechanisms, secrets management,
                and secure data handling for cloud-native applications.
              </p>
            </div>
          </li>

        </ul>

      </section>

    </article>
  );
}