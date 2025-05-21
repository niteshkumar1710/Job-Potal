import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Emma Williams",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "This platform helped me land my dream job in just a few weeks! The job listings are relevant and the application process is super easy.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "HR Manager",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "Finding qualified candidates has never been easier. The filtering options and candidate profiles save us so much time.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Fullstack Developer",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "I appreciate how user-friendly and secure this platform is. I always feel confident applying to jobs here.",
  },
];

const Testimonials = () => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        padding: "0 20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 40, color: "#007bff" }}>
        What Our Users Say
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
        }}
      >
        {testimonialsData.map(({ id, name, role, photo, feedback }) => (
          <div
            key={id}
            style={{
              padding: 20,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: 10,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: 280,
            }}
          >
            <img
              src={photo}
              alt={name}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 15,
              }}
            />
            <p
              style={{
                fontStyle: "italic",
                color: "#555",
                marginBottom: 20,
                flexGrow: 1,
              }}
            >
              "{feedback}"
            </p>
            <h3 style={{ margin: "0 0 5px" }}>{name}</h3>
            <p style={{ margin: 0, color: "#777", fontSize: 14 }}>{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
