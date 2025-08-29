import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string; // resolved, final URL
}

const teamMembers: TeamMember[] = [
  {
    name: "Melissa Warak",
    title: "Primary Investigator",
    description: "",
    imageUrl: new URL("../assets/mcwarak.jpeg", import.meta.url).href,
  },
  {
    name: "Jessica Gomez",
    title: "Research Fellow",
    description:
      "I have completed my Undergraduate degree in English and American Literature, with a minor in mathematics. My research interest has been focused on the Haitian Revolution and Caribbean Diaspora and how one can use the archives as a lens through which to read contemporary literature. My studies will be continued at the University of Virginia's English Ph.D. program.",
    imageUrl: new URL("../assets/Jessica.jpg", import.meta.url).href,
  },
  {
    name: "Katherine Villenueva",
    title: "Research Fellow,\n\nWeb-apprentice",
    description:
      "I am currently a rising senior undergraduate student majoring in English American Literature, with a minor in Creative Writing at The University of Texas at El Paso. I assisted in this research project by investigating the intersection of disability and art, aimed at promoting inclusivity and accessibility within cultural institutions. My engagement in this project has exposed me to different research and investigation methodologies and additionally provided me with the opportunity to enhance my software development skills.",
    imageUrl: new URL("../assets/KnVillanueva.png", import.meta.url).href,
  },
];

const About: React.FC = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Team</h1>
      <div className="mt-4 d-flex align-items-center"></div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 text-center">
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "250px", height: "250px", margin: "0 auto" }}
              >
                <img
                  className="rounded-circle img-fluid"
                  src={member.imageUrl}
                  alt={member.name}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title">{member.name}</h2>
                {/* Convert \n in title to <br/> so it renders nicely */}
                <h3 className="card-subtitle text-muted" style={{ whiteSpace: "pre-line" }}>
                  {member.title}
                </h3>
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
