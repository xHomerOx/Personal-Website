"use client";

import React from "react";

import { Heading, Text, Flex, Button, Background } from "@/once-ui/components";
import Nav from "@/components/Nav";

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
            Page Not Found
          </Heading>
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
          <Heading variant="body-default-l">404</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
