
'use client';

import { Carousel } from 'flowbite-react';

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-none">
      <Carousel>
        <img src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" alt="..." />
        <img src="https://colinhacks.com/nextjs_banner.png" alt="..." />
        <img src="https://miro.medium.com/v2/resize:fit:1358/1*U62pEikCBvM1gjIDlAry7Q.png" alt="..." />
        <img src="https://miro.medium.com/v2/resize:fit:1140/1*olEe-YQm7qfpwa3iWOrTPw.jpeg" alt="..." />
      </Carousel>
    </div>
  ); 
}
export default CarouselComponent
