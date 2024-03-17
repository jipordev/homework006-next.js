'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

function EnrollmentFormComponent() {
  return (
    <>
    <form className="flex w-[700px] flex-col gap-4 bg-white px-10 my-20 rounded-xl shadow-md">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput id="fullName" type="text" placeholder="John Doe" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your Email" />
        </div>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword" value="Confirm Password" />
        </div>
        <TextInput id="confirmPassword" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree to the&nbsp;
          <Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <button className='my-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2 w-[100px] mx-auto' type="submit">Enroll</button>
    </form>
    </>
  );
}

export default EnrollmentFormComponent;
