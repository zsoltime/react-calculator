import React from 'react';

const About = () => (
  <div className="page">
    <h1 className="page__title">About React Calculator</h1>
    <p>This is my React calculator for Free Code Camp&apos;s <a href="https://www.freecodecamp.com/challenges/build-a-javascript-calculator" target="_blank" rel="noopener noreferrer">first advanced front end project</a>. The source code is available on <a href="https://github.com/zsoltime/react-calculator" target="_blank" rel="noopener noreferrer">my GitHub profile</a>.</p>
    <h2 className="page__subtitle">Tools Used</h2>
    <ul>
      <li>React.js</li>
      <li>React router</li>
      <li>Webpack module bundler</li>
      <li>Babel.js compiler</li>
      <li>ESLint linter with Airbnb&apos;s config</li>
      <li>Sass with PostCSS Autoprefixer</li>
      <li>Karma test runner</li>
      <li>Mocha test framework</li>
      <li>Expect assertion library</li>
    </ul>
  </div>
);

export default About;
