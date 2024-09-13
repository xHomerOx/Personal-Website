'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Frameworks: React.FC = () => {
 
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
						Frameworks
				</Heading>
                <Image src="/images/react.svg" width={50} height={50} alt="react" />
                <Image src="/images/angular.svg" width={50} height={50} alt="angular" />
        </Flex>
    )
}

export default Frameworks;