"use client";

import React from "react";

import { Heading, Text, Flex, Button, Background } from "@/once-ui/components";

import Carousel from "@/components/Carousel";
import Languages from "@/components/Languages";
import Programs from "@/components/Programs";
import Databases from "@/components/Databases";
import Frameworks from "@/components/Frameworks";
import Management from "@/components/Management";
import Stacks from "@/components/Stacks";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const DATA = [
  {
    imageUrl: "/images/background.jpg",
    text: "Otello Boz Maraldo\nSoftware Developer",
  },
];

export default function Home() {
  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Background dots={false} />
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={100}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          border="brand-medium"
          borderStyle="solid-1"
          gap="24"
          padding="24"
          alignItems="center"
          justifyContent="center"
          fillWidth
          onBackground="brand-strong"
          background="brand-medium"
        >
          <Nav />
        </Flex>
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          paddingY="l"
          gap="l"
        >
          <Heading align="center" wrap="balance" variant="body-default-l">
            Welcome to xHomerOx Personal Website!
          </Heading>
          <Carousel data={DATA} />
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          padding="l"
          marginY="l"
          fillWidth
          gap="l"
          background="neutral-weak"
          className="border-solid-1 brand-border-strong"
        >
          <Heading variant="body-default-l">About Me</Heading>
          <Text variant="body-default-m">
            {`Hi, I'm Otello, Web Developer from Argentina, and welcome to my personal profile.
						I specialize in creating modern web applications using the latest technologies.
						I started my studies on TI at the age of 16, since then, I had interest on how computers work at that time and nowadays I can say I have mastered my skills on programming languages.
						But like in all aspects of life, it's a path of never-ending learning.`}
          </Text>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          padding="l"
          fillWidth
          gap="l"
          background="neutral-weak"
          className="border-solid-1 accent-border-strong"
        >
          <Heading variant="body-default-l">Knowledges</Heading>
          <Flex
            direction="row"
            wrap
            gap="m"
            padding="m"
            justifyContent="center"
          >
            <Languages />
            <Databases />
            <Frameworks />
            <Management />
            <Programs />
            <Stacks />
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
