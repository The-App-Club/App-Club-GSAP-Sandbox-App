import {AnimatePresence, motion} from 'framer-motion';
const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: 20},
};

const Layout = ({children, isShow, sectionId, activeSectionId}) => {
  return (
    <AnimatePresence>
      {isShow && sectionId === activeSectionId ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{duration: 0.4, type: 'easeInOut'}}
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </AnimatePresence>
  );
};

export {Layout};
