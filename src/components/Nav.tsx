
'use client';

import Link from 'next/link';
import React from 'react';

const Nav: React.FC = () => {
    return (
        <>
            <Link href={'/'}>
            Home
            </Link>
            <Link href={'/about'}>
            About Me
            </Link>
            <Link href={'/resume'}>
            Resume
            </Link>
            <Link href={'/contact'}>
            Contact
            </Link>
        </>
    )
}

export default Nav;