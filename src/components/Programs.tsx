'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Programs: React.FC = () => {
 
return (
        <Flex
            border="accent-strong"
            gap="24"
            padding="24"
            alignItems="center"
            justifyContent="center"
            onBackground="accent-strong"
            background="accent-strong">
                <Heading variant="body-default-m">
						Programs
				</Heading>
                <Image src="/images/photoshop.svg" width={100} height={100} alt="Photoshop" />
                <Image src="/images/illustrator.svg" width={100} height={100} alt="Illustrator" />
                <Image src="/images/figma.svg" width={100} height={100} alt="Figma" />
        </Flex>
    )
}

export default Programs;