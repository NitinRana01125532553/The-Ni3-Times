import Link from 'next/link'
import React from 'react'

interface cardProps {
    img: string,
    title: string,
    desc: string,
    link: string
}

const Card = ({img, title, desc, link} : cardProps) => {
  return (
    <div className='flex flex-col gap-2 w-80'>
        {/* image */}
        <Link href={link}><img src={img} className='w-70 h-[12rem] rounded-xl hover:rounded-none transition ease-in-out delay-150 duration-300 overflow-hidden object-cover' /></Link>
        {/* title */}
        <div>
            <Link href={link}><h2>{title}</h2></Link>
        </div>
        {/* Description */}
        <div>
            <Link href={link}><p>{desc}</p></Link>
        </div>
    </div>
  )
}

export default Card;