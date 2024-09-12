'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Stacks: React.FC = () => {
 
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
						Stacks
				</Heading>
                <Image src="/images/nextjs.svg" width={100} height={100} alt="nextjs" />
                <Image src="/images/nestjs.svg" width={100} height={100} alt="nestjs" />
        </Flex>
    )
}

export default Stacks;