
'use client';

import { Card } from 'flowbite-react';

export default function ContentCardComponent() {
  return (
    <>
    <Card
      className="w-[270px] shadow-sm border-[0.5px]"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
    >
      <p className='font-light text-[12px]'>Blog</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        What is cyber security
      </p>
    </Card>
    </>
  );
}
