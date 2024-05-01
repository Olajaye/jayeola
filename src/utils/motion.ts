// menu and navbar

export const menuVar = {
   initial:{ opacity: 0 },
   animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when:"beforeChildren",
      staggerChildren: 1,
    }
  }
}
export const menuVariant = (size: any) => {
  return (
    {
      initial:{ width: 0, opacity:0 },
      animate:{width: size, opacity:1, transition:{duration:1, repeat:Infinity, repeatDelay: 2,}}
    }
  )

}
export function slideInFromRight(delay: number) {
  return {
    hidden: { x: "100px", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
}

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: "-100px", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
}

// ///////
export const hiParentVariant = {
  hidden: { opacity: 0 },
  visible:{opacity:1, transition:{ duration: 1,staggerChildren: 11, when:"beforeChildren",} }
} 
export const ParentVariant = {
  hidden: { opacity: 0 },
  visible:{opacity:1, transition:{ duration: 1,staggerChildren: 1, when:"beforeChildren"} }
} 

export const imageVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 1} }
}