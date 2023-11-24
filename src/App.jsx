import React from 'react';
import './App.css';

const App = () => {
  const profile = {
    name: 'Muhammad Umer',
    title: 'MERN Stack Web Developer',
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
    experience: [
      {company: 'IMSIDesign', years: '3 Years    ', desc: 'Creating Installers of Desktop CAD products using Installshield and NSIS. Automating installers process in Jenkins. Worked on the localized version of the products. Worked on Customization of the UI of products.' }
    ],

    certificates: [
      {name: 'MERN Stack Web Development', institute: 'NexusBerry', pasyr: 'Oct 2023 - Continue' },
      {name: 'Modern JavaScript: ES6 Basics', institute: 'Coursera', pasyr:  'August 30, 2022' },
      {name: 'Introduction to Front-End Development by Meta',  institute: 'Coursera', pasyr: 'September 1, 2022'},
      {name: 'Build Your Portfolio Website with HTML and CSS', institute: 'Coursera', pasyr: 'April 23, 2020' },
      {name: 'Advanced Styling with Responsive Design by University of Michigan',  institute: 'Coursera', pasyr: 'April 23, 2020'},
    ]
  };

  return (
    <div className="app">
      <div className="left-column">
        <div className='info'>
         <h2>Mobile No.</h2>
         <p>0313-4492891</p>
         <h2>Email:</h2>
         <p>itsumerch6432@gmail.com</p>
         <h2>Github:</h2>
         <p><a target="_blank" href="https://github.com/umerchaudhary"> https://github.com/umerchaudhary </a></p>
        </div>
        <h2>Skills:</h2>
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
          <h3><strong>{profile.title}</strong></h3>
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
        <section className="experience">
          <h2>Work Experience</h2>
          <ul>
            {profile.experience.map((exp, index) => (
              <li key={index}>
                <strong>{exp.company}</strong> - {exp.years} ({exp.desc})
              </li>
            ))}
          </ul>
        </section>
        <section className="certificates">
          <h2>Certifications</h2>
          <ul>
            {profile.certificates.map((cert, index) => (
              <li key={index}>
                <strong>{cert.name}</strong> - {cert.institute} ({cert.pasyr})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;

