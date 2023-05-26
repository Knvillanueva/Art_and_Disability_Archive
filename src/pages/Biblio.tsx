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
      <h3>{author}</h3>
      <p>
        {author}. <strong>{title}.</strong> {publisher}, {year}.
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
        description="Borden is a writer, painter, professor of art at Austin Community College, and runs a studio called Impossible Dream in Florence, Texas. This autobiographical graphic novel recalls Borden’s experiences as a caretaker of a disabled child, his daughter Savannah, in what he calls “a tale of coping, overcoming, and transcending.” However, it is not meant as a story of inspiration; instead, it shows the ups and downs Borden experienced as a parent and caretaker of a physically disabled child. As a graphic novel, it incorporates five or six text-and-image panels per page. The narrative begins with a gut punch: a letter to Borden’s younger daughter, Ruby, recounting the story of Savannah’s death at age fifteen. Borden writes, “This is not a ‘clean’ grief. It is filled with guilt because you miss this child you loved, but you’re also relieved that her suffering and your burden of care has ended.” The story then recalls how Borden met his then-wife in college, their move to Morocco to teach English, and Savannah’s complicated birth there. The majority of the novel focuses on Borden’s raw experiences through specific moments in time, such as a time when he was mistaken for a vagrant while picking up syringes for his daughter at a pharmacy. Borden unpacks some of the labyrinthine medical and bureaucratic processes he and his wife navigated, such as getting home health assistance for Savannah, as well as the moments of peace in her life, but he avoids telling the story from Savannah’s point of view. It is always his own, and told candidly and with love for Savannah. The book ends with “A Final Thought: The Truth is Horrific and Beautiful,” a message about embracing challenges, empathy, and compassion."
      />
      <BiblioEntry
        title="DisCrit: Disability Studies and Critical Race Theory in Education"
        author="Connor, David J. et al."
        publisher="New York: Teachers College Press"
        year="2016"
        description="In this book, several academic essays forge implications of how race and ability are socially constructed, engaging with Disability Studies and Critical Race Theory. Both race and disability are intertwined as minority racial and ethnic students are segregated and “othered” in special ed classes relying on school personnel. These essays reveal the educational system's response to different bodies through various accounts and narratives from Black middle-class families who are associated with a medically diagnosed learning disability. DisCrit clearly states its purpose of countering “hegemonic knowledge-claims about the meaning of race and disability in society,” calling for these systems of regulating bodies that are different to be dismantled. This book is useful in terms of our research as it formalizes the inequities of people of color with learning disabilities in the educational system, expanding our understanding that disability and race are interdependent.  
        "
      />
      <BiblioEntry
        title="The Routledge Handbook of Disability Arts, Culture, and Media"
        author="Hadley, Bree, and Donna McDonald"
        publisher="Ne York and London: Routledge"
        year="2020"
        description="Bree Hadley and Donna McDonald create a collection of texts and scholars that consider the past, present, and possible future conversations on the perception, construction, and terminology that defines and affects disabled identity and access to agency and authority. The book looks at scholars from the U.S. UK, Europe, Asia, and Australasia. Part 1 comments on critiques of mainstream representation of disability in museums, galleries, contemporary narratives, and media. Part two examines the inclusion of disabled people in art, culture, media, and therapy programmes. Part three focuses on contemporary renderings of disability. Part four is a combination of stories and aims to allow the voices of those disabled to discuss policy, the public sphere, production, and reception. Part five focuses on the way disabled people take agency and leadership in fighting for adaptation, accommodations, and alternative futures, ranging on conversations on toys for children, the economical cost of adapting, and access to careers in performance. This text is beneficial in our research as it informs our terminology and our knowledge of the current debates being had. It is crucial at any point to be aware of the ways that society has ‘normalized’ disabilities in a typically negative manner and the importance of the agency of those that are disabled in being able to lead the discussions.
        "
      />
      <BiblioEntry
        title="Studying Disability Arts and Culture: An Introduction"
        author="Kuppers, Petra"
        publisher="RNew York: Palgrave Macmillan"
        year="2014"
        description="Kuppers introduces students to the works of disabled artists and encourages undergraduate students to question their own positionality in the classroom and the world. Kuppers provides a series of exercises, word association maps, essay questions, and various other activities to engage the students into the discourse. Some of the chapter topics include accommodations in the classroom, the language of disability, and how we think about power relations, rules, the public and private, an introduction to disability as a field, perspectives, and an introduction to disability culture. The chapters also focus on a range of parts of the field of disability studies from the institution to theatre, dance, and media portrayal that sensualizes disability, to autism and ends with classroom activities and resources. This book is particularly useful in our research as it provides a structure and flow of approach to studying disabilities art to undergraduates. The resources and activities invite the students into the discourse of disability and challenge their own positionality while introducing an undergraduate student to the artist, allies, and history of the social construction of disabilities."
      />

      <BiblioEntry
        title="Disability Visibility: First-Person Stories from the Twenty-First Century"
        author="Markotić, Nicole"
        publisher=" Jefferson, NC: McFarland Books"
        year="2016"
        description="Nicole Markotić forges the public’s impulsive diagnostic response to the media’s presentation of disability in media such as in literature and in film, usually portrayed as a negative counter to the ideal positive. The social ideal perfect healthy body is revealed as discrimination and oppression in these different representations of disabled characters although Markotić additionally looks at positive depictions. Satirical humor targeting disability is blurred with deliberate literal attacks and reveals the hidden discrimination behind metaphorical language that is in everyday conversation and across media. The commodification of the disabled body exploits an individual’s identity through mass culture such as commercials meant to pull at heartstrings for an emotional response evoking pity. Additionally, Markotić visits media that are meant to deliberately mock these same disability tropes. This book is particularly useful in our research as it questions the media that we consume, and everyday rhetoric having hidden discriminatory meaning behind it is intentionally patronizing those with visible and invisible disabilities."
      />

      <BiblioEntry
        title="The Disabled Body in Contemporary Art"
        author="Millett-Gallant, Ann"
        publisher="ew York: Palgrave Macmillan US"
        year="2010"
        description="Millett-Gallant critically analyzes representations of disability in different historical artworks and how it contributes to disability studies– as well as the cultural and societal response to these artworks that subvert the conventions of aesthetics and normativity for artwork and the human body. Diverse artists such as Mary Duffy, Frida Kahlo, Diego Velázquez, Joel-Peter Witkin, Marc Quinn, Sandie Yi, and more mentioned throughout the book represented disabilities in their artwork with several different formats of presentation and styles explored by Millett-Gallant. The importance of visual culture art intertwined with disability studies allows for an audience to gaze and stare at disabled bodies, mediating everyday social interactions, assumptions, and constructions. This book is particularly useful in our research as every artwork that presents a disability is expanded, and different techniques being symbolic and examined very closely enhances the importance of representation instead of negatively responding to disfigurement and what is not familiar."
      />

      <BiblioEntry
        title="Disability and Art History"
        author="Millett-Gallant, Ann and Elizabeth Howie"
        publisher="New York: Taylor and Francis"
        year="2016"
        description="In this book, Millett-Gallant and Howie explore ways in which art history and disability studies overlap in terms of the general public’s often negative response to representations of disability, stereotypes and diagnostic assumptions, the “stare” and “gaze”, the social construction of disability, and the differences in representation between invisible and visible disabilities. Disability studies are engaged in terms of its implications for societal oppression, and it is through the arts that allow disabled individuals to identify, define, and embrace themselves rather than be defined and assumed by others. Art history critically examines artwork through historical context, production, and social commentary thus identity is a vital theme. This book is useful in our research as it reveals the stigmatization of disability representation was traditionally studied only as a symbolic function in historical artwork and how this correlates with hurtful stereotypes of disability today."
      />

      <BiblioEntry
        title="Bodies in Commotion: Disability and Performance"
        author="Sandahl, Carrie, and Phillip Auslander, eds"
        publisher="Ann Arbor: The University of Michigan Press"
        year="2005"
        description="This book is made up of a collection of essays that explores the implications and challenges that are disability and performance, ranging from theater and dance to public speaking and sports. Through these different artistic performances, disabled and impaired bodies challenge the social restriction on their assumed ability by allowing a shift of control from the audience’s objectified, diagnostic gaze to the performer’s empowerment which is liberating. Additionally, the essays touch upon the diagnostic gaze/stare, the medical model, questioning disability to be a fictional and only a social construct, the problem of finding a cure, the effect impairment has on masculinity, and “performing” our identity as well as a disability that meets societal assumptions. Disability performance dismantles the societal perspective of what they are assumed unable to do and instead emphasizes their identity, artistic abilities, and their shift of strengths. This book is useful in terms of our research as its numerous examples of performances disrupt the social and cultural assumptions of those who are disabled as victims, notably resisting medical diagnosis and cure with the embracement of an impaired body."
      />
      <BiblioEntry
        title="Disability Aesthetics"
        author="Siebers, Tobin"
        publisher="Ann Arbor: The University of Michigan Press"
        year="2010"
        description="Siebers contemplates the aestheticization of the human body with a visible disability in the production of art and the necessary acceptance of disfigurement. The representation of the western ideal of the human body versus the rejected disabled human body by revealing what is or isn’t qualified as an aesthetic through examples of how the public view disabled, wounded, and traumatized bodies in artwork, literature, and other media portrayed with the intention to protest, and throughout history, notably the Nazis’ own preferred model of beauty. Siebers challenges the negative response to bodies that do not fit idealistic and healthy ideals, refusing to recognize that it is the only definition of beauty. This book is useful in terms of our research as it questions socially constructed familiar and idealized standards of beauty that do not tolerate those who do not fit it, thus limiting people with disabilities to be thought of as visually aesthetic rather than an assumed theme or political protest."
      />
      <BiblioEntry
        title="Deaf Artists in America: Colonial to Contemporary"
        author="Sonnenstrahl, Deborah M"
        publisher="San Diego:DawnSign Press"
        year="2002"
        description="Sonnenstrahl is an art historian who also identifies as a deaf woman; she taught at Gallaudet University in Washington, DC for several decades. The book is organized chronologically into five chapters and focuses on artists who were either born in the U.S. or lived there primarily while making art. Sonnenstrahl also underscores the history of deaf culture and changes in education for deaf persons since the colonial period, writing of the development of American Sign Language (ASL) as one example. As Sonnenstrahl writes, “There is no literature [as of 2002] on the unique aesthetic of deaf artists …. questions remain unanswered: how do deaf artists see their world, how do deaf artists interpret their world, how do deaf artists define their world, and finally how do deaf artists represent their world?” (xxiii). To be clear: much of the art in the book does not represent deaf culture, but Sonnenstrahl contextualizes each artist within their respective deaf and hearing worlds."
      />
      <BiblioEntry
        title="The Routledge Companion to Art and Disability"
        author="Watson, Keri W. and Timothy W. Hiles, eds"
        publisher="New York and London: Routledge"
        year="2022"
        description="Within this text, Keri Watson and Timothy Hiles offer a collection of essays that studies the role disabilities have played in cultures and societies. They provide a collection of scholars that grapple with the consequences of perception, and the way society has deemed some as “other” and “deformed” and focus on the visual language. The Routledge Companion to Art and Disability is broken into three main sections: Part one helps frame disabilities as a religious and socio-historical construct including scholars such as Sara Newman, Shilpa Das, Marion S. Lee, Lilian H. Zirpolo, and many more. Part two helps problematize ableism, disablism, and notions of idealism and deformity including scholars such as Jennifer M. Feltman, Elizabeth Lee, Kris Belden-Adams, and many more. Part three focuses on modern and contemporary art and design. This book is particularly useful as it includes artists from various historical periods, engaging with different questions that interact with the construction of idealism within society and beliefs of the normative body."
      />
      <BiblioEntry
        title="Art and Disability: The Social and Political Struggles Facing Education"
        author="Wexler, Alice J"
        publisher="New York: Palgrave Macmillan US"
        year="2009"
        description="In this book, Wexler highlights the different ways that education can be shifted for children that are disabled, and the social construction of “us” and “them” is an ongoing challenge faced in the education of children with disabilities. Wexler focuses on the way the sensory nature of art as a tool in fostering communication and breaking down barriers, while looking specifically at autism spectrum disorder (ASD), attention deficient hyperactive disorder (ADHD), learning disorders (LD), emotional and behavioral disorders (E/BD), those that are blind and visually impaired. The book concludes with concrete ways to structure lesson plans, so that children gain agency in their education and artwork. This book is useful to our research because the construction of the education system for children, tells us a lot of policies currently in place and the dichotomy still held by society. It is also useful because while learning about the representation of disabilities in art, it is important to also recognize the ways the arts have been used to bridge the boundaries."
      />
    </div>
  );
};

export default Biblio;
