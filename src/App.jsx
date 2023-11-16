import React from 'react';
import './App.css';

const App = () => {
  const profile = {
    name: 'Muhammad Umer',
    title: 'Full Stack Web Developer',
    description: 'Passionate about creating web applications that make a difference.',
    education: [
      { degree: 'Bachelor of Science in Computer Science', school: 'University A', year: '2015-2019' },
      { degree: 'Master of Science in Software Engineering', school: 'University B', year: '2020-2022' },
      { degree: 'Web Development Bootcamp', school: 'Coding Academy', year: '2022' },
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
        <img src="assets/image.jpeg" alt="Umer" />
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

