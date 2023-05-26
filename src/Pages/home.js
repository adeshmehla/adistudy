import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container1}>
        <h1>
          Class 11, 12, NEET - NCERT, Subject-Wise Mind Maps, Detailed notes for
          <br /> BIOLOGY | CHEMISTRY | PHYSICS | Notes, <br /> Videos & Tests
        </h1>
        <br />
        <div className={styles.container}>
          <div>
            <p
              style={{
                textAlign: "start",
                lineHeight: "25px",
                fontSize: "20px",
              }}
            >
              "Welcome to the chemistry, physics, and biology pages for classes
              11th and 12th, as well as NEET preparation, on our website! Our
              goal is to provide comprehensive and reliable resources for
              students studying these fascinating subjects. We offer NCERT books
              and solutions that are aligned with the latest curriculum,
              ensuring that you have access to the most up-to-date information.
              Additionally, we provide mind maps, notes, and previous year
              question papers that can help you prepare better for exams. Our
              unique approach sets us apart from other resources available
              online.
              <br />
              <br />
              <br />
              Our website offers detailed explanations, examples, and practice
              problems to help students master these topics and succeed in their
              exams. With our comprehensive resources, you'll be able to deepen
              your understanding of chemistry, physics, and biology and build a
              solid foundation for future studies in these exciting fields.
            </p>
            <p
              style={{
                textAlign: "start",
                lineHeight: "25px",
                fontSize: "20px",
              }}
            >
              Class 11, 12 and NEET chapter-wise collection of Important notes,
              Topic Wise tests, Video lectures, NCERT Textbook, NCERT Solution
              is designed in a way where you get a complete chapter-wise package
              for your preparation in one place. Here, the chapter-wise guide is
              framed by best teachers of Class 11, 12 and NEET having tremendous
              knowledge in the respective streams, thereby making Class 11, 12
              and NEET - Subject-Wise Mind Maps, Detailed notes, Ncert solutions
              for the ultimate study source for the chapter. Some students find
              it difficult to find ncert solutions, detailed notes, previous
              year question papers our website will provide your desired needs
              related to every topic. Each and every topic will be cleared
              through our notes.
              <br />
              <br />
              <br />
              All subjects pdf are provided below like ncert books, ncert
              solutions, detailed notes, previous year question papers, mind
              maps of 11th and 12th. And also detailed notes, mind maps,
              previous year question papers, MCQs are provided below 👇... Press
              the link given below to choose your desired results...
            </p>
          </div>
          <button
            className={styles.classname_btn}
            onClick={() => navigate("/class11")}
          >
            11th Class
          </button>
          <button
            className={styles.classname_btn}
            variant="contained"
            color="primary"
            onClick={() => navigate("/class12")}
          >
            12th Class
          </button>
          <button
            className={styles.classname_btn}
            variant="contained"
            color="primary"
            onClick={() => navigate("/class12")}
          >
            NEET
          </button>

          <div
            style={{
              textAlign: "start",
              lineHeight: "25px",
              fontSize: "20px",
            }}
          >
            <br />
            In the classes 11th and 12th, as well as in NEET preparation,
            chemistry, physics, and biology play an important role in shaping a
            student's future. Our expertly crafted content provides a strong
            foundation for those interested in pursuing careers in healthcare,
            research, or industry. In chemistry, students will learn about the
            fundamental concepts of atomic structure, chemical bonding, elements
            and compounds, the periodic table, stoichiometry, thermodynamics,
            equilibrium, and redox reactions. They will also explore organic
            chemistry, which deals with the structures, properties, and
            reactions of organic compounds. This includes topics such as
            hydrocarbons, alcohols, carbonyl compounds, and carboxylic acids.
            Physical chemistry is another important area that encompasses the
            study of the physical properties and behavior of matter, including
            topics such as chemical kinetics, electrochemistry, and surface
            chemistry.
            <br />
            <br />
            In physics, students will learn about the fundamental principles of
            mechanics, electricity, magnetism, waves, optics, and modern
            physics. Our website offers detailed explanations, examples, and
            practice problems to help students master these topics and succeed
            in their exams.
            <br />
            <br />
            In biology, students will explore the intricacies of cell biology
            and genetics, learning how organisms function at a molecular level.
            They will also delve into the principles of evolution, ecology, and
            environmental studies. Our website provides a strong foundation for
            those interested in pursuing careers in healthcare, research, or
            environmental studies.
          </div>
          <div className={styles.neet_section}>
            <h1> Why this website should be preferred..???</h1>

            <ul>
              <li>
                - The page will be a comprehensive resource for students
                studying 11th, 12th, and preparing for NEET exams in the fields
                of chemistry, physics, and biology.
              </li>
              <li>
                - It will feature a range of study materials, including NCERT
                textbooks, NCERT solutions, mind maps, notes, and previous
                year's question papers, making it an all-in-one platform for
                learning and exam preparation.
              </li>
              <li>
                - The NCERT textbooks and solutions will provide a solid
                foundation for understanding the core concepts of each subject,
                while the mind maps and notes will help students revise and
                remember important information easily.
              </li>
              <li>
                - The previous year's question papers will allow students to
                practice and prepare for the actual NEET exam, giving them a
                clear idea of what to expect and helping them develop strategies
                for answering questions effectively.
              </li>
              <li>
                - Overall, this page will be an excellent resource for students
                looking to excel in their studies and achieve success in NEET
                exams.
              </li>
            </ul>
          </div>
          <div className={styles.neet_section}>
            <h2> Do you know how toppers study for 11th and 12th..??? </h2>

            <p>
              Toppers usually follow a disciplined study routine and focus on
              understanding the core concepts rather than just memorizing them.
              Here are some detailed strategies that toppers often use for 11th
              and 12th class preparation:
            </p>

            <p>
              1. Understanding the Syllabus: Toppers first understand the
              syllabus and exam pattern thoroughly. They identify the topics
              that are important and need to be covered in-depth.
            </p>

            <p>
              2. Creating a Study Plan: A well-planned study schedule helps
              toppers cover all the topics and practice regularly. They allocate
              specific time slots for each subject and topic, making sure they
              have enough time for revision and practice tests.
            </p>

            <p>
              3. Consolidating the Concepts: Toppers emphasize consolidating
              their understanding of concepts by focusing on the most important
              topics. They also create summaries and mind maps to remember the
              key points effectively.
            </p>

            <p>
              4. Taking Regular Tests: Regular tests help toppers assess their
              understanding of the concepts and identify their weak areas. They
              take chapter-wise tests and analyze their performance to improve
              their scores.
            </p>

            <p>
              5. Seeking Help: Toppers are proactive in seeking help from
              teachers or mentors whenever they face difficulties in
              understanding any concept. They also interact with peers to
              exchange ideas and discuss complex topics.
            </p>
            <p>
              Overall, toppers follow a structured approach to 11th and 12th
              class preparation, which involves understanding the syllabus,
              creating a study plan, consolidating concepts, taking regular
              tests, and seeking help when needed.
            </p>
          </div>
          <div className={styles.neet_section}>
            <h2>Topic-wise MCQ Tests for NEET</h2>
          
            <h1>Do you know? How Toppers prepare for NEET Exam ?</h1>
            <p>
              Toppers usually follow a disciplined routine and focus on
              understanding the concepts rather than just memorizing them. They
              also practice solving previous year's question papers and take
              mock tests to assess their preparation level and identify areas
              that need improvement. Additionally, they are proactive in seeking
              help from teachers or mentors whenever they face difficulties in
              understanding any concept.
            </p>
            <p>
              With help of the best NEET teachers, toppers & notes , We have
              prepared a guide for student who are preparing for NEET : Simple
              Steps to clear NEET Exam
            </p>
            <ul>
              <li> cover complete ncert</li>
              <li> study regularly</li>
              <li> revise our website Detailed notes as much as possible</li>
              <li> have a quick revision of our notes and mind maps</li>
              <li> attempt tests </li>
            </ul>
            <p>
              {" "}
              Toppers usually follow a disciplined study routine which includes
              regular practice sessions, revision, and solving question papers.
              Here are some detailed strategies that toppers often use for NEET
              preparation:
            </p>
            <p>
              1. Building a Strong Foundation: Toppers focus on understanding
              the core concepts of each subject and building a strong foundation
              for further learning. They start with NCERT books and gradually
              move on to other reference books to gain in-depth knowledge.
            </p>
            <p>
              2. Practice and Revision: Regular practice and revision are
              essential for NEET preparation. Toppers allocate specific time
              slots for practicing questions, revising formulas, and solving
              previous year's question papers. This helps them identify their
              strengths and weaknesses, and work on improving their weak areas.
            </p>
            <p>
              3. Identifying Important Topics: Toppers identify important topics
              and concepts based on the previous year's question papers and exam
              pattern. They prioritize these topics and give more emphasis to
              them during their preparation.
            </p>
            <p>
              4. Taking Mock Tests: Toppers take several mock tests to assess
              their preparation level, time management skills, and identify
              areas that need improvement. They analyze their performance and
              modify their study plan accordingly.
            </p>
            <p>
              5. Seeking Help: Toppers are proactive in seeking help from
              teachers or mentors whenever they face difficulties in
              understanding any concept. They also interact with peers to
              exchange ideas and discuss complex topics.
            </p>
            Overall, toppers follow a structured approach to NEET preparation,
            which involves understanding the concepts, regular practice,
            revision, and identifying and working on weak areas.
          </div>

          <div className={styles.neet_section}>
            <h2>Preparation Tips for NEET 2024 Exam</h2>
            <ul>
              <li>Learn the NEET Exam Pattern </li>
              <li>Understanding the NEET Syllabus </li>
              <li>Select Coaching as Well as other Preparation Methods </li>
              <li>Make a schedule </li>
              <li>Examine Previous Years’ Question Papers </li>
              <li>Be Self-Assured </li>
            </ul>
          </div>
          <div className={styles.neet_section}>
            <h2>  NEET Mock Test Series</h2>
            <ul>
              <li>How To Prepare For NEET</li>
              <li>Biology Class 11th </li>
              <li>Biology Class 12th </li>
            </ul>
          </div>
          <div>
            <h2>
              Track your progress, build, highlight & save important lessons and
              more!
            </h2>
            <p
              style={{
                textAlign: "start",
                lineHeight: "25px",
                fontSize: "20px",
              }}
            >
              We hope that you find our website informative and helpful. Please
              don't hesitate to reach out if you need further assistance. Thank
              you for choosing us as your go-to resource for 11th and 12th class
              chemistry, physics, and biology, as well as NEET preparation."
            </p>
            <div className={styles.links_section}>
              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Medical Non- Medical </i>
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ CBSE Class 11th</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ CBSE Class 12th</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ COMPETITIVE EXAMINATIONS LIKE NEET </i>
              </p>
              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Online Tests / MCQs</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Verbal Logical Reasoning</i>{" "}
              </p>
              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Study Material Question & Answers Revision Notes</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Important Practice Quizzes</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ NCERT Solutions NCERT</i>{" "}
              </p>

              <p style={{ fontWeight: 700 }}>
                {" "}
                <i>⭐ Textbooks NCERT </i>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
