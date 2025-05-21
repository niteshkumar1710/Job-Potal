import React, { useState } from "react";

const talentsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"],
    location: "New York, USA",
    experience: "3 years",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    location: "San Francisco, USA",
    experience: "5 years",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Clara Lee",
    role: "Fullstack Developer",
    skills: ["React", "Node.js", "GraphQL"],
    location: "Toronto, Canada",
    experience: "4 years",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  // add more as needed
];

const FindTalents = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filter talents based on search and location
  const filteredTalents = talentsData.filter((talent) => {
    const matchesNameOrRole =
      talent.name.toLowerCase().includes(search.toLowerCase()) ||
      talent.role.toLowerCase().includes(search.toLowerCase()) ||
      talent.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
    const matchesLocation = talent.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());

    return matchesNameOrRole && matchesLocation;
  });

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Find the Best Talents</h2>

      {/* Search Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search by name, role or skills"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 15px",
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{
            flexBasis: 200,
            padding: "10px 15px",
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Talents List */}
      <div>
        {filteredTalents.length === 0 ? (
          <p style={{ textAlign: "center" }}>No talents found matching your criteria.</p>
        ) : (
          filteredTalents.map((talent) => (
            <div
              key={talent.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: 15,
                marginBottom: 15,
                border: "1px solid #ddd",
                borderRadius: 8,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={talent.photo}
                alt={talent.name}
                style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
              />
              <div style={{ marginLeft: 20, flex: 1 }}>
                <h3 style={{ margin: 0 }}>{talent.name}</h3>
                <p style={{ margin: "4px 0", color: "#555" }}>
                  <strong>{talent.role}</strong> - {talent.experience} experience
                </p>
                <p style={{ margin: "4px 0", color: "#777" }}>
                  Skills: {talent.skills.join(", ")}
                </p>
                <p style={{ margin: "4px 0", color: "#777" }}>{talent.location}</p>
              </div>
              <button
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                  fontSize: 14,
                }}
                onClick={() => alert(`Contacting ${talent.name}...`)}
              >
                Contact
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindTalents;
