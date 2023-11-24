import React from 'react';
import './App.css';

const App = () => {
  const profile = {
    name: 'Muhammad Umer',
    title: 'Full Stack Web Developer',
    description: 'Results-driven React Developer with a passion for crafting responsive and dynamic user interfaces. Proficient in leveraging the power of React to create modular, reusable components that enhance the overall user experience. Experienced in translating design concepts into efficient and visually appealing web applications. Adept at collaborating with cross-functional teams, including designers and backend developers, to deliver high-quality software solutions. Strong understanding of JavaScript, JSX, and modern front-end development practices. Possesses excellent problem-solving skills and a commitment to staying current with emerging trends in web development. Proven ability to contribute to the full development lifecycle, from concept to deployment, with a focus on delivering robust and scalable solutions.',
    education: [
      { degree: 'Bachelor of Science in Computer Science', school: 'University Of the Punjab', year: '2016-2020' },
      { degree: 'Intermediat in Sciences', school: 'Punjab Group of Colleges', year: '2020-2022' },
      { degree: 'MERN Stack Web Development', school: 'Nexusberry', year: '2023' },
    ],
    skills: [
      { skill: 'JavaScript', level: 80 },
      { skill: 'React', level: 75 },
      { skill: 'Node.js', level: 70 },
      { skill: 'HTML', level: 85 },
      { skill: 'CSS', level: 80 },
      { skill: 'MongoDB', level: 75 },
      { skill: 'Express', level: 70 },
    ],
    // Add more skills as needed
  };

  return (
    <div className="app">
      <div className="left-column">
        <h2>Skills</h2>
        <ul className="skills-list">
          {profile.skills.map((skill, index) => (
            <li key={index}>
              <span className="skill-name">{skill.skill}</span>
              <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-column">
        <header>
          <img src="./image.jpeg" alt="Umer" />
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>
        </header>

        <section className="profile">
          <p>{profile.description}</p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <ul>
            {profile.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;

