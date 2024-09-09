"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Background } from '@/once-ui/components';

export default function Home() {

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
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
					<Text>
						About us
					</Text>
			</Flex>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							border="brand-medium"
							borderStyle="solid-1"
							direction="row"
							gap="24"
							padding="24"
							alignItems="center"
							justifyContent="center"
							fillWidth
							onBackground="brand-strong"
							background="brand-medium">
							<Heading
								wrap="balance"
								variant="body-default-l">
									Welcome to xHomerOx Testing Website!
							</Heading>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
					</Grid>
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
