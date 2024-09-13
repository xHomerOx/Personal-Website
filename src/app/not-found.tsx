"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={100}
				direction="column" alignItems="center" flex={1}>
				<Flex
					border="brand-medium"
					borderStyle="solid-1"
					gap="24"
					padding="24"
					alignItems="center"
					justifyContent="center"
					fillWidth
					onBackground="brand-strong"
					background="brand-medium">
					<Link href={'about'}>
						About Me
					</Link>
					<Link href={'portfolio'}>
						Portfolio
					</Link>
					<Link href={'contact'}>
						Contact
					</Link>
				</Flex>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight paddingY="l" gap="l">
					<Heading
						align="center"
						wrap="balance"
						variant="body-default-l">
							Page Not Found
					</Heading>
				</Flex>
				<Flex
					direction="column"
					alignItems="center"
					padding="l"
					marginY='l'
					fillWidth
					gap="l"
					background="neutral-weak"
					className='border-solid-1 brand-border-strong'>
					<Heading variant="body-default-l">
						404
					</Heading>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 xHomerOx Portfolio
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/xHomerOx/Website"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}