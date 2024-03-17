
'use client';

import { Card } from 'flowbite-react';

export default function JobCardComponent() {
  return (
    <>
    <Card
      className="w-[270px] shadow-sm border-[0.5px]"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
    >
      <p className='font-light text-[12px]'>Job Announcement</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Senior Spring Web Developer
      </p>
    </Card>
    </>
  );
}
