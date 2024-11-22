'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Languages: React.FC = () => {

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
                Languages
            </Heading>
            <Image src="/images/html-5.svg" width={50} height={50} alt="HTML5" />
            <Image src="/images/css-3.svg" width={50} height={50} alt="CSS3" />
            <Image src="/images/typescript.svg" width={50} height={50} alt="TypeScript" />
            <Image src="/images/php.svg" width={50} height={50} alt="PHP" />
        </Flex>
    )
}

export default Languages;