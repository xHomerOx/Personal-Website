import React from 'react';
import styles from '../app/styles/Skills.module.sass'

const Skills: React.FC = () => (
  <div className={styles.skills}>
    <ul>
      <li>
        <h3>HTML</h3>
        <span className={styles.bar}>
            <span className={`${styles.html} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <h3>CSS</h3>
        <span className={styles.bar}>
            <span className={`${styles.css} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <h3>JavaScript</h3>
        <span className={styles.bar}>
            <span className={`${styles.javascript} ${styles.bar}`}></span>
        </span>
      </li>
    </ul>
  </div>
);

export default Skills;