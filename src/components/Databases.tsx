'use client';

import React from 'react';
import Image from 'next/image';

import { Flex, Heading } from '@/once-ui/components';

const Databases: React.FC = () => {
 
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
						Databases
				</Heading>
                <Image src="/images/mysql.svg" width={100} height={100} alt="MySQL" />
                <Image src="/images/mongodb.svg" width={100} height={100} alt="MongoDB" />
        </Flex>
    )
}

export default Databases;