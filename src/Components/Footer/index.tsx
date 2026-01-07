// import React from 'react'
// import { FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
// import { RxGithubLogo } from 'react-icons/rx'
// import { RxDiscordLogo } from 'react-icons/rx'
// import { FaTwitter } from 'react-icons/fa'

// type Props = {}

// const Footer = (props: Props) => {
//   return (
//     <footer className='bg-black'>
//      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
//         <div className="w-full flex flex-col items-center justify-center m-auto">
//             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            
//               <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                   <div className="font-bold text-[16px]">Community</div>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <FaYoutube />
//                       <span className="text-[15px] ml-[6px]">Youtube</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <RxGithubLogo />
//                       <span className="text-[15px] ml-[6px]">Github</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <RxDiscordLogo />
//                       <span className="text-[15px] ml-[6px]">Discord</span>
//                   </p>
//               </div>
//               <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                   <div className="font-bold text-[16px]">Social Media</div>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <FaWhatsapp/>
//                       <span className="text-[15px] ml-[6px]">Whatsapp</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <FaTwitter/>
//                       <span className="text-[15px] ml-[6px]">Twitter</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                       <FaLinkedin/>
//                       <span className="text-[15px] ml-[6px]">Linkedin</span>
//                   </p>
//               </div>
//               <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                   <div className="font-bold text-[16px]">About</div>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    
//                       <span className="text-[15px] ml-[6px]">Become Sponsor</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    
//                       <span className="text-[15px] ml-[6px]">Learning about me</span>
//                   </p>
//                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                
//                       <span className="text-[15px] ml-[6px]">jayeolajeremiah@gmail.com</span>
//                   </p>
//               </div>
//             </div>

//             <div className="mb-[20px] text-[15px] text-center">
//                 &copy; Jayeola 2023 Inc. All rights reserved
//             </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




import React from 'react';
import { FaLinkedin, FaWhatsapp, FaYoutube, FaTwitter } from 'react-icons/fa';
import { RxGithubLogo, RxDiscordLogo } from 'react-icons/rx';

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const communityLinks: LinkItem[] = [
    // {
    //   icon: <FaYoutube />,
    //   label: 'Youtube',
    //   href: 'https://youtube.com',
    // },
    {
      icon: <RxGithubLogo />,
      label: 'Github',
      href: 'https://github.com/Olajaye?tab=repositories',
    },
    // {
    //   icon: <RxDiscordLogo />,
    //   label: 'Discord',
    //   href: 'https://discord.com',
    // },
  ];

  const socialLinks: LinkItem[] = [
    {
      icon: <FaWhatsapp />,
      label: 'Whatsapp',
      href: 'https://wa.link/rkh34e',
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      href: 'https://x.com/jayeolajeremiah',
    },
    {
      icon: <FaLinkedin />,
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/gbolahan-jayeola-5b1981280/',
    },
  ];

  const aboutLinks: LinkItem[] = [
    {
      icon: null,
      label: 'Become Sponsor',
      href: '#contact',
    },
    {
      icon: null,
      label: 'Learning about me',
      href: '#about',
    },
    {
      icon: null,
      label: 'jayeolajeremiah@gmail.com',
      href: 'mailto:jayeolajeremiah@gmail.com',
    },
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.href?.startsWith('#')) {
      // For anchor links, you might want to handle smooth scrolling
      const element = document.getElementById(link.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderLinkItem = (link: LinkItem, index: number) => {
    const Component = link.href ? 'a' : 'button';
    
    return (
      <Component
        key={`${link.label}-${index}`}
        href={link.href}
        onClick={() => handleLinkClick(link)}
        className="flex items-center text-white gap-2 my-[15px] cursor-pointer hover:text-green transition-colors duration-200 group"
        aria-label={link.label}
        {...(link.href?.startsWith('http') && { 
          target: '_blank', 
          rel: 'noopener noreferrer' 
        })}
      >
        {link.icon && (
          <span className="text-lg group-hover:scale-110 transition-transform duration-200">
            {link.icon}
          </span>
        )}
        <span className="text-[15px]">{link.label}</span>
      </Component>
    );
  };

  const renderSection = (title: string, links: LinkItem[]) => (
    <div className="min-w-[200px] h-auto flex flex-col items-center sm:items-start">
      <h3 className="font-bold text-[16px] text-green mb-4">{title}</h3>
      <div className="flex flex-col">
        {links.map((link, index) => renderLinkItem(link, index))}
      </div>
    </div>
  );

  return (
    <footer className="bg-black border-t border-cyan-200">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="w-full flex flex-col items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center lg:justify-items-start">
            {renderSection('Community', communityLinks)}
            {renderSection('Social Media', socialLinks)}
            {renderSection('About', aboutLinks)}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-[15px] text-gray-400">
              &copy; {currentYear} Jayeola. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Crafted with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;