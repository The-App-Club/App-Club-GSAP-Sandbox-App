import {css} from '@emotion/css';
import {AnimatePresence, motion} from 'framer-motion';
const variants = {
  hidden: {opacity: 0, x: -120, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 120, y: 0},
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
          className={css`
            @media screen and (max-width: 768px) {
              position: fixed;
              top: 5px;
              right: 5px;
              width: 100%;
            }
          `}
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
