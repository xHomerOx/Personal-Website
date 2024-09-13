'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Management: React.FC = () => {
 
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
						CMS
				</Heading>
                <Image src="/images/drupal.svg" width={100} height={100} alt="drupal" />
                <Image src="/images/wordpress.svg" width={100} height={100} alt="wordpress" />
                <Image src="/images/strapi.svg" width={100} height={100} alt="strapi" />
        </Flex>
    )
}

export default Management;