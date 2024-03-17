
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import IstadLogoFooter from '../Logo/CstadLogoFooterComponent';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa"

function FooterComponent() {
  return (
    <Footer container className='bg-blue-700 rounded-none mt-[50px]'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <IstadLogoFooter/>
            <span className='text-white'>Start your IT career with CSTAD</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className='text-white text-lg' title="about" />
              <Footer.LinkGroup col>
                <Footer.Link className='text-white' href="#">Flowbite</Footer.Link>
                <Footer.Link className='text-white' href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-white text-lg' title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className='text-white' href="#">Github</Footer.Link>
                <Footer.Link className='text-white' href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-white text-lg' title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className='text-white' href="#">Privacy Policy</Footer.Link>
                <Footer.Link className='text-white' href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className='text-white'  href="#" by="Flowbite™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className='text-white' href="#" icon={FaFacebook} />
            <Footer.Icon className='text-white' href="#" icon={FaInstagram} />
            <Footer.Icon className='text-white' href="#" icon={FaTwitter} />
            <Footer.Icon className='text-white' href="#" icon={FaGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
} 
export default FooterComponent
