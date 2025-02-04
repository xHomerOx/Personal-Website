"use client";

import { Flex, Button, Text } from "@/once-ui/components";
import React from "react";

const Footer = () => (
  <Flex
    as="footer"
    position="relative"
    fillWidth
    paddingX="l"
    paddingY="m"
    justifyContent="space-between"
  >
    <Text variant="body-default-s" onBackground="neutral-weak">
      © 2024 xHomerOx
    </Text>
    <Flex gap="12">
      <Button
        href="https://github.com/xHomerOx/Website"
        prefixIcon="github"
        size="s"
        variant="tertiary"
      >
        GitHub
      </Button>
    </Flex>
  </Flex>
);

export default Footer;
