import React from 'react';
import { Heading, Text, Flex } from '@/once-ui/components';

const About = () => {
  return (
    <Flex
        direction="column" alignItems="center"
        padding="l" fillWidth>
        <Heading variant="body-default-l">About Me</Heading>
        <Text variant="body-default-m">
                Hi, I'm Otello, Web Developer from Argentina, and welcome to my personal profile.
                I specialize in creating modern web applications using the latest technologies.
                I started my studies on TI at the age of 16, since then, I had interest on how computers work at that time and nowadays I can say I have mastered my skills on programming languages.
                But like in all aspects of life, it's a path of never-ending learning.
        </Text>
    </Flex>
  );
};

export default About;