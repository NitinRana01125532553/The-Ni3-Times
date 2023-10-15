import Link from 'next/link';
import React from 'react'

const Heading = ({heading}: {heading: string}) => {
  return (
    <div>
      <h1 className="font-nitin text-5xl text-center p-6 font-medium">
        {heading}
      </h1>
    </div>
  );
}

export default Heading