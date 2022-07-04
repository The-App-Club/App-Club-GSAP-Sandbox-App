import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = lazy(() => import('../components/header'));
const Footer = lazy(() => import('../components/footer'));

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>
      <StyledLayout>{children}</StyledLayout>
      <AnimatePresence>
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <StyledLayout>{children}</StyledLayout>
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </>
  );
};

export { Layout };
