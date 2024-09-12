'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Languages: React.FC = () => {
 
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
						Languages
				</Heading>
                <Image src="/images/html-5.svg" width={100} height={100} alt="HTML5" />
                <Image src="/images/css-3.svg" width={100} height={100} alt="CSS3" />
                <Image src="/images/typescript.svg" width={100} height={100} alt="TypeScript" />
                <Image src="/images/php.svg" width={100} height={100} alt="PHP" />
        </Flex>
    )
}

export default Languages;