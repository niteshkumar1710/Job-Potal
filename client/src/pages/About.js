import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        padding: "0 20px",
        lineHeight: 1.6,
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20, color: "#007bff" }}>
        About Our Job Platform
      </h1>

      <p>
        Welcome to <strong>YourJobPortal</strong>, the go-to destination for
        connecting talented professionals with top companies around the world.
        Our mission is to empower job seekers and employers by providing a
        seamless, efficient, and transparent hiring experience.
      </p>

      <h2 style={{ marginTop: 30, color: "#0056b3" }}>What We Offer</h2>
      <ul>
        <li>
          <strong>Comprehensive Talent Search:</strong> Find skilled candidates
          quickly with advanced search and filtering options.
        </li>
        <li>
          <strong>Job Matching:</strong> Get personalized job and talent
          recommendations based on your preferences and skills.
        </li>
        <li>
          <strong>Easy Application Process:</strong> Apply to jobs or contact
          talents effortlessly through our user-friendly interface.
        </li>
        <li>
          <strong>Secure & Trusted:</strong> We prioritize your privacy and data
          security to create a safe environment for all users.
        </li>
      </ul>

      <h2 style={{ marginTop: 30, color: "#0056b3" }}>Our Commitment</h2>
      <p>
        At YourJobPortal, we believe that great opportunities should be
        accessible to everyone. We are continuously working to improve our
        platform, adding new features and tools that help you achieve your
        career and hiring goals.
      </p>

      <p>
        Thank you for choosing <strong>YourJobPortal</strong>. Let's build the
        future of work together!
      </p>
    </div>
  );
};

export default About;
