import * as React from "react"
import {motion} from "framer-motion"



const groupVariant = {
  hidden: {opacity:0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
    }
  }
}
const pathVaraint = {
  hidden:{opacity:0, pathLength: 0 },
  visible: {
    opacity:1,
    pathLength: 1,
    transition: {
      duration: 3,
      repeatType: "reverse",
      repeatDelay: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const ContactMe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={300}
    height={300}
    {...props}
  >
    <motion.g
      variants={groupVariant}
      initial="hidden"
      animate="visible"
      style={{
        stroke:"rgb(78 255 234)" ,
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <motion.path
        variants={pathVaraint}
        d="m81.353 50.79-18.21-13.991 18.302-15.87a1.999 1.999 0 1 0-2.62-3.021L58.682 35.374l-.014.012-4.921 4.267-25.078-21.746a1.999 1.999 0 1 0-2.619 3.021l18.44 15.99-12.442 9.912a2 2 0 0 0 2.491 3.129l13.024-10.375 4.874 4.226a1.995 1.995 0 0 0 2.62 0l5.002-4.337 18.858 14.488c.363.279.792.414 1.217.414a2 2 0 0 0 1.219-3.585z"
        style={{
          stroke: "rgb(78 255 234)",
          strokeWidth: 1,
          // strokeDasharray: "none",
          // strokeLinecap: "butt",
          // strokeLinejoin: "miter",
          // strokeMiterlimit: 10,
          fill: "none",
          // fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
      <motion.path
        variants={pathVaraint}
        d="M84.004 10.598H23.49a6.003 6.003 0 0 0-5.996 5.996v1.616a4.002 4.002 0 0 0-3.982-.453c-.87.383-2.006.88-3.19 1.394l-.032.014c-2.526 1.095-4.385 1.88-5.378 2.269a4.64 4.64 0 0 0-1.845 1.278c-8.173 9.429 1.178 26.658 14.071 39.551 9.539 9.539 21.449 17.14 30.82 17.139 3.296-.001 6.278-.941 8.731-3.066a4.656 4.656 0 0 0 1.278-1.846c.395-1.009 1.171-2.847 2.304-5.456.507-1.168.996-2.286 1.373-3.144a4.003 4.003 0 0 0-.578-4.148h22.939a6.002 6.002 0 0 0 5.996-5.996v-39.15a6.005 6.005 0 0 0-5.997-5.998zM56.603 67.439c-1.152 2.656-1.947 4.538-2.36 5.592a.76.76 0 0 1-.173.282c-7.118 6.171-22.543-2.315-34.105-13.877C8.402 47.872-.078 32.445 6.088 25.331a.76.76 0 0 1 .283-.174c1.063-.416 2.944-1.21 5.592-2.359 1.173-.509 2.296-1 3.168-1.373l7.266 12.256-4.505 8.393a3.986 3.986 0 0 0 .698 4.732l14.007 14.007a3.982 3.982 0 0 0 4.731.696l8.404-4.505 12.245 7.267.006.01c-.38.863-.873 1.987-1.38 3.158zm29.398-11.695a2 2 0 0 1-1.997 1.997H54.809l-7.038-4.177a4.03 4.03 0 0 0-3.942-.083l-8.406 4.503-14.008-14.02 4.505-8.392a4.035 4.035 0 0 0-.084-3.943l-4.343-7.319v-7.716a2 2 0 0 1 1.997-1.997h60.514a2 2 0 0 1 1.997 1.997v39.15z"
        style={{
          stroke: "rgb(78 255 234)",
          strokeWidth: 2,
          // strokeDasharray: "none",
          // strokeLinecap: "butt",
          // strokeLinejoin: "miter",
          // strokeMiterlimit: 10,
          fill: 'none',
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </motion.g>
  </svg>
)
export default ContactMe
