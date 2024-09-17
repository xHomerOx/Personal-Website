import React from 'react';
import styles from '../styles/Skills.module.sass';

const Skills: React.FC = () => (
  <div className={styles.skills}>
    <ul>
      <li>
        <h3>HTML</h3>
        <span className={styles.bar}>
          <span className={styles.html}></span>
        </span>
      </li>
      <li>
        <h3>CSS</h3>
        <span className={styles.bar}>
          <span className={styles.css}></span>
        </span>
      </li>
      <li>
        <h3>JavaScript</h3>
        <span className={styles.bar}>
          <span className={styles.javascript}></span>
        </span>
      </li>
      <li>
        <h3>TypeScript</h3>
        <span className={styles.bar}>
          <span className={styles.typescript}></span>
        </span>
      </li>
    </ul>
  </div>
);

export default Skills;
