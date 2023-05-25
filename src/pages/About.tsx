import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Katherine Villenueva",
    title: "Spider-Person",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "",
  },
  {
    name: "Melissa Warak",
    title: "Primary Investigator",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "",
  },
  {
    name: "Jessica Gomez",
    title: "Research Fellow",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "src/assets/Jessica.jpg",
  },
];

const About: React.FC = () => {
  return (
    <div className="container">
      <h1 className="mt-4">About Us</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="rounded-circle"
                  src={member.imageUrl}
                  alt={member.name}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title">{member.name}</h2>
                <h3 className="card-subtitle">{member.title}</h3>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
