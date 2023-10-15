import React from 'react'
import NavLink from './NavLink'

interface props {
    categories: string[],
}

const Navbar = ({categories}: props) => {
  return (
    <div className={`${categories.length == 0 ? "hidden" : ""} hidden lg:flex`}>
    <div className={`w-full p-2`}>
      <ul className="lg:flex flex-row gap-12 justify-center w-full">
        {categories.map((category, b) => (
          <NavLink key={b} category={category} />
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Navbar