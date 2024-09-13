'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Programs: React.FC = () => {
 
return (
        <Flex
            border="accent-strong"
            gap="m"
            padding="m"
            alignItems="center"
            justifyContent="center"
            onBackground="accent-strong"
            background="accent-strong">
                <Heading variant="body-default-m">
						Programs
				</Heading>
                <Image src="/images/photoshop.svg" width={50} height={50} alt="Photoshop" />
                <Image src="/images/illustrator.svg" width={50} height={50} alt="Illustrator" />
                <Image src="/images/figma.svg" width={50} height={50} alt="Figma" />
        </Flex>
    )
}

export default Programs;