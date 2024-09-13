'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Stacks: React.FC = () => {
 
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
						Stacks
				</Heading>
                <Image src="/images/nextjs.svg" width={50} height={50} alt="nextjs" />
                <Image src="/images/nestjs.svg" width={50} height={50} alt="nestjs" />
        </Flex>
    )
}

export default Stacks;