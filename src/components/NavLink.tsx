'use client'
import Link from 'next/link';
import { redirect } from 'next/navigation'
import React from 'react'

interface props {
    category: string,
}

const NavLink = ({category}: props) => {
  return (
    <li className="hover:cursor-pointer">
        <Link href={`/${category}`}>
      {category}
      </Link>
    </li>
  );
}

export default NavLink