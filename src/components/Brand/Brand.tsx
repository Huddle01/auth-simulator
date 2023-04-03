import React from 'react';

import Image from 'next/image';

const Brand: React.FC<{ alt: string; src: string; name: string }> = ({
  alt,
  src,
  name,
}) => {
  return (
    <div className="flex items-center text-md gap-2 cursor-pointer font-bold text-slate-300">
      <Image
        src={src}
        width={25}
        height={25}
        alt={alt}
        className="rounded-md"
      />
      {name}
    </div>
  );
};

export default Brand;
