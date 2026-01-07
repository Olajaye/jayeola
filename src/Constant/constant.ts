import JAVASCRIPT from "@/assets/js.png"
import NODEJS from "@/assets/node-js.png"
import CSS from "@/assets/css.png"
import NEXTJS from "@/assets/next.png"
import FRAMER from "@/assets/framer.png"
import MONGODB from "@/assets/mongodb.png"
import TAILWIND from "@/assets/tailwind.png"
import HTML from "@/assets/html.png"
import REACT from "@/assets/react.png"
import REDUX from "@/assets/redux.png"
import REACTQUERY from "@/assets/reactquery.png"
import RTK from '@/assets/ReducToolkit.png'
import REACTNATIVE from "@/assets/ReactNative .png"
import TYPESCRIPT from "@/assets/ts.png"
import EXPRESS from "@/assets/express.png"
import FIREBASE from "@/assets/Firebase.png"
import MYSQL from "@/assets/mysql.png"
import POSTGRESQL from "@/assets/PostgreSql.png"
import MATERIALUI from "@/assets/mui.png"
import FIGMA from "@/assets/figma.png"
import GITHUB from "@/assets/gitHub.png"
import MICROSOFT from "@/assets/microsoft.avif"
import FITNESS from "@/assets/FitnessImage.png"
import NUPAT from "@/assets/nupat.png"
import JAYNETWORK from "@/assets/JAYNETWORK.png"
import BOOTSTRAP from "@/assets/Bootstrap_logo.svg.png"
import OUNJEEKO from "@/assets/OunjeEko.png"
import UBUNTU from '@/assets/ubuntu-linux.avif'
import PYTHON from "@/assets/python.jpg"
import FASTAPI from "@/assets/fastApi.png"
import MEETTOASPIRE from "@/assets/meettoaspire.png"
import TIKKETS from "@/assets/tikkets.png"
import TIAAGO from "@/assets/tiaago.png"
import ZANGAPAY from "@/assets/zanagapay.png"
import NEST from "@/assets/Nest-js.svg"


export const Frontend_data = [
  {
    skill_name: "React Native",
    Image: REACTNATIVE,
  },
  {
    skill_name: "React",
    Image: REACT,
  },
  {
    skill_name: "Redux",
    Image: REDUX,
  },
  {
    skill_name: "Redux Tookit",
    Image: RTK
  },
 
  
  {
    skill_name: "Css",
    Image: CSS,
  },
  {
    skill_name: "Framer Motion",
    Image: FRAMER,
  },
   {
    skill_name: "Bootstrap",
    Image: BOOTSTRAP,
  },
  {
    skill_name: "Tailwind Css",
    Image: TAILWIND,
  },
  {
    skill_name: "Html 5",
    Image: HTML,
  },
  {
    skill_name: "Material UI",
    Image: MATERIALUI,
    
  },
  
  {
    skill_name: "React Query",
    Image: REACTQUERY,
  },
 
  
]


export const Backend_skill = [
  {
    skill_name: "Nest-js",
    Image: NEST

  },
   {
    skill_name: "Fast-Api",
    Image: FASTAPI,
  },
  {
    skill_name: "Next js",
    Image: NEXTJS,
  },
  {
    skill_name: "Node js",
    Image: NODEJS,
  },
  {
    skill_name: "Express js",
    Image: EXPRESS,
  },
  {
    skill_name: "Mongo db",
    Image: MONGODB,
  },
  {
    skill_name: "MySQL",
    Image: MYSQL,
  },
  {
    skill_name: "PostgreSql",
    Image: POSTGRESQL,
  },
]

export const Tools_skill = [
 {
    skill_name: "GitHub",
    Image: GITHUB,
  },
  
   {
    skill_name: "Figma",
    Image: FIGMA,
  },
   {
    skill_name: "Fire base",
    Image: FIREBASE,
  
  },
]

export const DevOps_skill = [
  {
    skill_name: "Java Script",
    Image: JAVASCRIPT,
  },
   {
    skill_name: "Type Script",
    Image: TYPESCRIPT,
  },
  {
    skill_name: "Python",
    Image: PYTHON,
  },
   {
    skill_name: "Ubuntu Linux",
    Image: UBUNTU,
  },
]





// export const Project = [
  
//   {
//     Title: "Fitness Place",
//     icon: FITNESS,
//     img: FITNESS,
//     Description: "The FITNESS PLACES serves as a comprehensive platform for individuals striving to improve their physical health and overall well-being. It offers unparalleled convenience by providing access to a vast array of workout routines, nutrition plans, and expert advice, all accessible from the comfort of one's home or on the go. This customization ensures that each user receives tailored guidance and support, maximizing the effectiveness of their fitness efforts. Overall, the advantages of a The Fitness Place lie in its ability to empower individuals with the resources, support, and guidance needed to achieve their health and fitness goals efficiently and effectively.",
//     link: "https://fitness-place.vercel.app/"
//   },
  
//   {
//     Title: "NUPAT Academy",
//     icon: NUPAT,
//     img: NUPAT,
//     Description: "NUPAT Academic serves as a valuable resource for students, educators, researchers, and self thought learners. It offers a vast repository of educational materials, including textbooks, articles, lecture notes, and multimedia resources, which can be accessed anytime, anywhere, fostering continuous learning beyond traditional classroom settings. Moreover, NUPAT academic websites often provide tools and platforms for collaboration and communication among peers and mentors. Enabling users to stay abreast of the latest developments in their fields of interest. This access to cutting-edge research fosters critical thinking, innovation, and evidence-based decision-making. Furthermore, NUPAT academic also offer supplementary resources such as study guides, practice exams, and tutoring services, catering to diverse learning needs and styles. These resources support students in their academic endeavors, helping them excel in their coursework and examinations.",
//     link: "https://olajaye.github.io/Tech-Academy"
//   },
//   {
//     Title: "Ounje-Eko",
//     icon: OUNJEEKO,
//     img: OUNJEEKO,
//     Description: "Ounje-Eko is a food shopping website that functions as a marketplace, offering customers accessibility, simple use, and an extensive range of items. It allows customers to explore, compare, and buy products from the comfort of their homes, bypassing regional restrictions. It improves the whole buying experience with safe payment methods and effective delivery services. It also helps businesses access a wider audience, and implement more focused marketing campaigns. Additionally, Ounje-Eko features an admin dashboard that makes data analysis easier and provides insights into customer behavior and preferences, which helps with making decisions. Here is the admin Link ----https://ounjeeko-admin.vercel.app----",
//     link: "https://ounjeeko.vercel.app"
//    },
//    {
//     Title: "Microsoft_Clone",
//     icon: MICROSOFT,
//     img: MICROSOFT,
//     Description: "",
//     link: "https://olajaye.github.io/Microsoft/"
//   },
//   {
//     Title: "Jaye.Network",
//     icon: JAYNETWORK,
//     img: JAYNETWORK,
//     Description: "",
//     link: "https://jayso-network.vercel.app/"
//   },
// ]



export interface ProjectType {
  Title: string;
  icon: string;
  img: string;
  Description: string;
  link: string;
  github?: string;
  adminLink?: string
  caseStudy?: string;
  techStack: string[];
  features: string[];
  year: string;
  type: "Web Application" | "E-commerce" | "Clone" | "Educational Platform" | "Web Application and Mobile Application";
  category: "Full-Stack" | "Frontend" | "Backend" | "Mobile";
  challenges?: string;
  solution?: string;
  role: string;
  status: "Completed" | "In Development" | "Maintained";
  metrics?: string[];
}

export const Project: ProjectType[] = [
  {
    Title: "Meet To Aspire",
    icon: MEETTOASPIRE,
    img: MEETTOASPIRE,
    Description: "Meet to Aspire is a professional networking and mentorship platform designed to connect aspiring professionals with experienced mentors through structured, interactive sessions. the platform facilitates knowledge exchange, skill development, and career growth via seamless digital interactions. Meet To Aspire platform moves beyond traditional networking by offering structured, interactive, and goal-oriented sessions. This ensures every meeting is productive, focusing on knowledge exchange, practical skill development, and strategic career planning. It facilitate not just connections, but transformative professional relationships. Meet to Aspire emphasizes scalability, security, and user experience, supporting both web and mobile access. MOBILE APP IS IN PROGRESS",
    link: "https://www.meettoaspire.com",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Next-JS", "Pay-stack", "AWS S3", "PostgreSql"],
    features: [
      "Matching & Scheduling System",
      "Video Conferencing Integration",
      "Secure Payment Processing",
      "Structured Payout System",
      "Dashboard & Analytics",
      "Notifications & Reminders",
      "Review & Feedback System"
    ],
    year: "2025",
    type: "Web Application and Mobile Application",
    category: "Full-Stack",
    role: "Lead Full-Stack Developer",
    status: "Completed",
  },
  {
    Title: "TIAAGO",
    icon: TIAAGO,
    img: TIAAGO,
    Description: "Tiaago is an all-in-one, AI-powered hiring platform designed to streamline the recruitment process for staffing agencies, internal HR teams, and job seekers. Tiaago combines Applicant Tracking System (ATS) and Customer Relationship Management (CRM) functionalities into a single dashboard. Its standout features include an AI Resume Screening tool, an AI Skill Assessment generator, and a Sourcing Engine that scans external platforms and internal databases",
    link: "https://www.tiaago.com/",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Next-JS"],
    features: [
      "Job Posting",
      "AI Screening & Assessment",
      "AI Voice Interview",
      "Results & Ranking",
      "Dashboard & Analytics",
    ],
    year: "2024",
    type: "Web Application",
    category: "Full-Stack",
    role: "Frontend Developer",
    status: "Completed",
  },
 {
    Title: "TIKKETS",
    icon: TIKKETS,
    img: TIKKETS,
    Description: "TIKKETS is a web application designed to be a centralized platform connecting event industry professionals and attendees. The primary goal is to simplify the process of discovering, managing, and attending events. It's key value proposition is providing Technology and Infrastructure for Event Industry Professionals while offering attendees a personalized way to find events that align with their interests. While the platform serves attendees, it's foundational offering is the technology backbone for event industry professionals (like organizers, planners, and promoters). For attendees, it caters to a wide range of interests, inviting them to select their preferred event types to receive better recommendations. This suggests support for diverse categories like conferences, concerts, workshops, and networking meetups The overall design and messaging position TIKKETS as a modern, user-friendly hub meant to enhance the entire event lifecycle, from discovery to attendance and continued engagement",
    link: "https://www.tikkets.io/",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Next-JS" ],
    features: [
      "Personalized Event Discovery",
      "Streamlined Ticket Acquisition",
      "Secure Payment Processing",
      "Staying Connected",
      "Dashboard & Analytics",
      "Notifications & Reminders",
      "Review & Feedback System"
    ],
    year: "2025",
    type: "Web Application",
    category: "Full-Stack",
    role: "Lead Frontend Developer",
    status: "Completed",
   },

  {
    Title: "ZANGAPAY",
    icon: ZANGAPAY,
    img: ZANGAPAY,
    Description: "Zangapay is a Nigerian digital bill payment platform designed to be a one-stop solution for simplifying and managing various household and personal payments. It operates as a bill payment company with a mission to create simple financial access for everyone. It aims to build an ecosystem that enables digital payments, allowing users to manage all their financial commitments from a single, centralized dashboard. The platform's key promise is to provide unmatched convenience and value by partnering with all major service brands in Nigeria. This partnership model is intended to ensure users can pay their bills at the cheapest available rates.",
    link: "https://zangapay.com/",
    github: "https://github.com/Olajaye/zangapay",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Next-JS", "Email-JS"],
    features: [
      "Fast Transactions",
      "Comprehensive Solutions",
      "Trustworthy & Secure"
    ],
    year: "2023",
    type: "Web Application",
    category: "Full-Stack",
    role: "Lead Fulll-stack Developer",
    status: "Completed",
  },
  {
    Title: "Fitness Place",
    icon: FITNESS,
    img: FITNESS,
    Description: "The Fitness Place serves as a comprehensive platform for individuals striving to improve their physical health and overall well-being. It offers unparalleled convenience by providing access to a wide range of workout routines, nutrition plans, and expert advice, all accessible from the comfort of one’s home or on the go. This level of customization ensures that each user receives tailored guidance and support, maximizing the effectiveness of their fitness efforts. Overall, the advantages of The Fitness Place lie in its ability to empower individuals with the resources, support, and guidance needed to achieve their health and fitness goals efficiently and effectively.",
    link: "https://fitness-place.vercel.app/",
    github: "https://github.com/Olajaye/fitness-place",
    caseStudy: "/case-study/fitness-place",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    features: [
      "Personalized workout plan generator",
      "Nutrition tracking and meal planning",
      "Progress analytics dashboard",
      "Video workout library with AI form analysis",
      "Social features and community challenges",
      "Mobile-responsive design with PWA support"
    ],
    year: "2024",
    type: "Web Application",
    category: "Full-Stack",
    challenges: "Implementing real-time workout tracking with offline capabilities and handling video streaming for exercise tutorials",
    solution: "Used Service Workers for offline functionality, WebRTC for live sessions, and optimized video delivery with AWS CloudFront",
    role: "Lead Full-Stack Developer",
    status: "Completed",
    metrics: ["95% user retention", "40% faster load times", "5000+ active users"]
  },
  
  {
    Title: "NUPAT Academy",
    icon: NUPAT,
    img: NUPAT,
    Description: "NUPAT Academy serves as a comprehensive educational platform for students, educators, researchers, and self-taught learners. It offers a vast repository of educational materials, including interactive courses, textbooks, articles, lecture notes, and multimedia resources. The platform enables continuous learning beyond traditional classroom settings with collaborative tools and communication features among peers and mentors. Real-time progress tracking and adaptive learning algorithms ensure personalized educational experiences that cater to individual learning styles and paces.",
    link: "https://olajaye.github.io/Tech-Academy",
    github: "https://github.com/Olajaye/Tech-Academy",
    caseStudy: "/case-study/nupat-academy",
    techStack: ["React", "Redux", "Firebase", "Material-UI", "Chart.js", "JWT", "REST API"],
    features: [
      "Interactive course builder with drag-and-drop interface",
      "Real-time collaborative whiteboard",
      "Automated grading and feedback system",
      "Learning path customization",
      "Video conferencing integration",
      "Comprehensive admin dashboard"
    ],
    year: "2022",
    type: "Educational Platform",
    category: "Full-Stack",
    challenges: "Building a scalable real-time collaboration system for virtual classrooms with 100+ concurrent users",
    solution: "Implemented Socket.io for real-time communication, Redis for session management, and optimized database queries with indexing",
    role: "Full-Stack Developer & System Architect",
    status: "Maintained",
    metrics: ["3000+ registered students", "89% course completion rate", "4.8/5 user rating"]
  },
  
  {
    Title: "Ounje-Eko",
    icon: OUNJEEKO,
    img: OUNJEEKO,
    Description: "Ounje-Eko is a comprehensive food e-commerce marketplace offering customers accessibility, simple navigation, and an extensive range of food products. It allows customers to explore, compare, and buy products from the comfort of their homes, bypassing regional restrictions. The platform enhances the shopping experience with secure payment methods, efficient delivery services, and real-time order tracking. The integrated admin dashboard provides comprehensive data analytics and insights into customer behavior and preferences, enabling data-driven decision making for business optimization.",
    link: "https://ounjeeko.vercel.app",
    github: "https://github.com/Olajaye/ounjeeko",
    adminLink: "https://ounjeeko-admin.vercel.app",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
    features: [
      "Advanced product search with AI recommendations",
      "Real-time inventory management",
      "Multi-vendor support system",
      "Order tracking with GPS integration",
      "Automated invoice generation",
      "Customer loyalty program",
      "Advanced admin analytics dashboard"
    ],
    year: "2022",
    type: "E-commerce",
    category: "Full-Stack",
    challenges: "Handling high traffic during peak hours while maintaining real-time inventory synchronization across multiple vendors",
    solution: "Implemented Redis caching layer, optimized database queries, and used queue systems for inventory updates",
    role: "Full-Stack Developer & Team Lead",
    status: "In Development",
   
  },
  {
    Title: "Microsoft Clone",
    icon: MICROSOFT,
    img: MICROSOFT,
    Description: "A pixel-perfect responsive clone of Microsoft's official website, implementing modern UI/UX principles with advanced animations and interactions. This project demonstrates mastery of frontend development, accessibility standards, and performance optimization techniques. The clone includes all major sections of the original site with enhanced mobile responsiveness and improved loading performance.",
    link: "https://olajaye.github.io/Microsoft/",
    github: "https://github.com/Olajaye/Microsoft",
    techStack: ["React", "CSS Modules", "Framer Motion", "GSAP", "Webpack", "Lighthouse", "PWA"],
    features: [
      "100% pixel-perfect design implementation",
      "Advanced CSS animations and transitions",
      "Progressive Web App capabilities",
      "Accessibility (WCAG 2.1 AA compliant)",
      "Lazy loading and image optimization",
      "Cross-browser compatibility",
      "SEO optimized structure"
    ],
    year: "2023",
    type: "Clone",
    category: "Frontend",
    challenges: "Achieving exact pixel-perfect replication while maintaining performance and accessibility standards",
    solution: "Used CSS Grid and Flexbox for precise layouts, implemented Intersection Observer for lazy loading, and automated accessibility testing",
    role: "Frontend Developer",
    status: "Completed",
   
  },
  
  // {
  //   Title: "Jaye.Network",
  //   icon: JAYNETWORK,
  //   img: JAYNETWORK,
  //   Description: "A professional networking platform designed specifically for developers and tech professionals. The platform facilitates connections, knowledge sharing, and career opportunities through advanced matching algorithms and community features. Includes real-time messaging, project collaboration tools, and a job marketplace with AI-powered recommendations.",
  //   link: "https://jayso-network.vercel.app/",
  //   github: "https://github.com/Olajaye/jaye-network",
  //   techStack: ["Next.js 14", "TypeScript", "tRPC", "PostgreSQL", "WebSocket", "Drizzle ORM", "Tailwind CSS", "Clerk Auth"],
  //   features: [
  //     "AI-powered professional matching",
  //     "Real-time chat and video conferencing",
  //     "Project collaboration workspace",
  //     "Skill validation through coding challenges",
  //     "Job matching algorithm",
  //     "Community forums and tech discussions",
  //     "Portfolio showcase integration"
  //   ],
  //   year: "2024",
  //   type: "Web Application",
  //   category: "Full-Stack",
  //   challenges: "Building real-time collaboration features with conflict resolution and implementing secure WebSocket connections",
  //   solution: "Used WebRTC for real-time communication, operational transformation for conflict resolution, and JWT for secure authentication",
  //   role: "Lead Developer & System Architect",
  //   status: "In Development",
  //   metrics: ["2000+ registered professionals", "85% connection acceptance rate", "4.9/5 user satisfaction"]
  // }
];

// Utility function to get project by title
export const getProjectByTitle = (title: string): ProjectType | undefined => {
  return Project.find(project => project.Title === title);
};

// Filter projects by category
export const getProjectsByCategory = (category: ProjectType['category']): ProjectType[] => {
  return Project.filter(project => project.category === category);
};

// Get recent projects
export const getRecentProjects = (count: number = 3): ProjectType[] => {
  return [...Project]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, count);
};

// Get featured projects
export const getFeaturedProjects = (): ProjectType[] => {
  return Project.filter(project => 
    project.Title === "Ounje-Eko" || 
    project.Title === "NUPAT Academy" || 
    project.Title === "Jaye.Network"
  );
};