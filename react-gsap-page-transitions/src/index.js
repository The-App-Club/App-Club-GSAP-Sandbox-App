import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import './index.scss';

import { About } from './pages/about';
import { Home } from './pages/home';
import { Layout } from './layouts/default';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
];

function App() {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: 'power3.InOut',
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: 'power3.InOut',
        stagger: {
          amount: 0.2,
        },
      }
    );
  };

  return (
    <Layout>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => {
            return (
              <CSSTransition
                in={match !== null}
                timeout={1200}
                classNames={'bebop'}
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit
              >
                <div className="bebop">
                  <Component />
                </div>
              </CSSTransition>
            );
          }}
        </Route>
      ))}
    </Layout>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
