import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/my-avatar.png"
            alt="Aditya Rudola"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Aditya Rudola">
            Aditya Rudola
          </h1>
          <p className="title">Cloud | DevOps</p>
        </div>

        <button className="info_more-btn" onClick={() => setOpen(!open)}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:contact@adityarudola.com"
                target="_blank"
                className="contact-link"
                style={{ fontSize: "13px" }}
              >
                contact@adityarudola.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919667885912" target="_blank" className="contact-link">
                +91 9667885912
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Delhi NCR, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/aditya-rudola-11a950237" target="_blank" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Adityarrudola" target="_blank" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
