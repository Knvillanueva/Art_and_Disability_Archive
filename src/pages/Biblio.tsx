import React from "react";

const BiblioEntry: React.FC<{
  title: string;
  author: string;
  publisher: string;
  year: string;
  description: string;
}> = ({ title, author, publisher, year, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <strong>{author}</strong>. {title}. {publisher}, {year}.
      </p>
      <p>{description}</p>
    </div>
  );
};

export const Biblio: React.FC = () => {
  return (
    <div>
      <h1>Bibliography</h1>
      <BiblioEntry
        title="And Yet We Rise"
        author="Borden, David"
        publisher="Scribblefire"
        year="2017"
        description="Borden is a writer, painter, professor of art at Austin Community College, and runs a studio called Impossible Dream in Florence, Texas. This autobiographical graphic novel recalls Borden’s experiences as a caretaker of a disabled child..."
      />
      <BiblioEntry
        title="DisCrit: Disability Studies and Critical Race Theory in Education"
        author="Connor, David J. et al."
        publisher="Teachers College Press"
        year="2016"
        description="In this book, several academic essays forge implications of how race and ability are socially constructed, engaging with Disability Studies and Critical Race Theory..."
      />
      <BiblioEntry
        title="The Routledge Handbook of Disability Arts, Culture, and Media"
        author="Hadley, Bree, and Donna McDonald"
        publisher="Routledge"
        year="2020"
        description="Bree Hadley and Donna McDonald create a collection of texts and scholars that consider the past, present, and possible future conversations on the perception, construction, and terminology that defines and affects disabled identity and access to agency and authority..."
      />
      <BiblioEntry
        title="The Routledge Companion to Disability and Media"
        author="Kirsty Liddiard and Alison Wilde"
        publisher="Routledge"
        year="2021"
        description="This comprehensive companion explores the intersection of disability studies and media studies, examining how media represents, portrays, and includes or excludes disabled people. It covers a wide range of media forms and genres, including film, television, advertising, social media, news, art, and literature."
      />

      <BiblioEntry
        title="Disability Visibility: First-Person Stories from the Twenty-First Century"
        author="Alice Wong"
        publisher="Vintage"
        year="2020"
        description="This anthology features essays, memoirs, poems, and artwork by disabled people, offering an authentic and diverse portrayal of disability experiences. The collection highlights the voices of disabled individuals and challenges ableist narratives and stereotypes."
      />

      <BiblioEntry
        title="Criptiques"
        author="Caitlin Wood"
        publisher="Caitlin Press"
        year="2021"
        description="Criptiques is a collection of personal essays and interviews that explore disability, identity, and activism. The author shares her own experiences as a disabled person and engages in conversations with other disabled individuals, shedding light on the intersectional aspects of disability."
      />

      <BiblioEntry
        title="Disability Studies: An Interdisciplinary Introduction"
        author="Dan Goodley"
        publisher="SAGE Publications Ltd"
        year="2016"
        description="This introductory textbook provides an overview of disability studies, covering key concepts, theories, and research in the field. It examines disability from a social, cultural, and historical perspective, challenging dominant discourses and promoting disability rights and inclusivity."
      />

      <BiblioEntry
        title="Critical Disability Theory: Essays in Philosophy, Politics, Policy, and Law"
        author="Dianne Pothier and Richard Devlin"
        publisher="UBC Press"
        year="2006"
        description="This collection of essays explores critical disability theory, examining the intersections of disability with philosophy, politics, policy, and law. The book offers critical perspectives on disability and challenges existing power structures and social norms."
      />
    </div>
  );
};

export default Biblio;
