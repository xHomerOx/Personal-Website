import React from 'react';
import styles from '../styles/Skills.module.sass';

import { Heading } from '@/once-ui/components';

const Skills: React.FC = () => (
  <div className={styles.skills}>
    <ul>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">HTML</Heading>
        <span className={styles.bar}>
          <span className={`${styles.html} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">CSS</Heading>
        <span className={styles.bar}>
          <span className={`${styles.css} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">JavaScript</Heading>
        <span className={styles.bar}>
          <span className={`${styles.javascript} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">TypeScript</Heading>
        <span className={styles.bar}>
          <span className={`${styles.typescript} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">Angular</Heading>
        <span className={styles.bar}>
          <span className={`${styles.angular} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">React</Heading>
        <span className={styles.bar}>
          <span className={`${styles.react} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">MongoDB</Heading>
        <span className={styles.bar}>
          <span className={`${styles.mongodb} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">MySQL</Heading>
        <span className={styles.bar}>
          <span className={`${styles.mysql} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">Drupal</Heading>
        <span className={styles.bar}>
          <span className={`${styles.drupal} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">WordPress</Heading>
        <span className={styles.bar}>
          <span className={`${styles.wordpress} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">Strapi</Heading>
        <span className={styles.bar}>
          <span className={`${styles.strapi} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">NodeJS</Heading>
        <span className={styles.bar}>
          <span className={`${styles.nodejs} ${styles.bar}`}></span>
        </span>
      </li>
      <li>
        <Heading as='h3' wrap="balance" variant="body-default-l">Express</Heading>
        <span className={styles.bar}>
          <span className={`${styles.express} ${styles.bar}`}></span>
        </span>
      </li>
    </ul>
  </div>
);

export default Skills;
