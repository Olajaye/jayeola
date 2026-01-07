import { motion } from "framer-motion";
import IMAGE2 from "@/assets/graphjpeg.jpeg"
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromRight, ParentVariant } from "@/utils/motion";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";


interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gbolahan-jayeola-5b1981280/",
    icon: <FaLinkedin className="w-5 h-5" />,
    ariaLabel: "Visit my LinkedIn profile"
  },
  {
    name: "GitHub",
    url: "https://github.com/Olajaye?tab=repositories",
    icon: <FaGithub className="w-5 h-5" />,
    ariaLabel: "View my GitHub repositories"
  },
  {
    name: "WhatsApp",
    url: "https://wa.link/rkh34e",
    icon: <FaWhatsapp className="w-5 h-5" />,
    ariaLabel: "Contact me on WhatsApp"
  },
  {
    name: "Twitter",
    url: "https://x.com/jayeolajeremiah",
    icon: <FaTwitter className="w-5 h-5" />,
    ariaLabel: "Follow me on Twitter"
  }
];

const RESUME_URL = "#"; // Replace with actual URL
const PROFILE_IMAGE_ALT = "Professional portrait of Jayeola Gbolahan";

export const Header = () => {
  return (
    <header
      id="home"
      className="relative px-4 sm:px-8 lg:px-16 pt-20 md:pt-32 pb-16 md:pb-28"
      aria-label="Main header"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="order-2 lg:order-1 flex-1 w-full max-w-md"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-green-500/10 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                <img
                  src={IMAGE2}
                  alt={PROFILE_IMAGE_ALT}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </motion.div>

         
          <motion.div
            variants={ParentVariant}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={slideInFromRight(0.3)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-sm mb-8"
            >
              <SparklesIcon className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-green tracking-widest ">
                Full-stack Developer Portfolio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideInFromRight(0.5)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Exceptional
              </span>{" "}
              Digital Experiences
            </motion.h1>

        
            <motion.p
              variants={slideInFromRight(0.7)}
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Hi, I'm <span className="text-cyan-300 font-semibold">Jayeola Gbolahan</span>. 
              A seasoned Full-stack Developer with 4+ years building scalable web applications, 
              mobile solutions, and enterprise software systems.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              variants={slideInFromRight(0.9)}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={RESUME_URL}
                download="Jayeola_Gbolahan_Resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-green-600 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-center"
                aria-label="Download my resume"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-cyan-500/30 text-cyan-300 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-center"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={slideInFromRight(1.1)}
              className="space-y-4"
            >
              <h2 className="text-lg text-cyan-200 font-semibold text-green-400">
                Connect With Me
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="group w-12 h-12 rounded-xl bg-gray-900/50 border border-cyan-200 flex items-center justify-center hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <span className="text-gray-400 group-hover:text-green-400 transition-colors">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>
    </header>
  );
};

export default Header;