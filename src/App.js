import React, { useState } from 'react';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import Skills from './Components/Skills/skills';
import Timeline from './Components/Timeline/timeline';
import Contact from './Components/Contact/contact';
import utils from './utils';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [introSlidUp, setIntroSlidUp] = useState(() => {
    const hash = window.location.hash;
    return Boolean(hash && hash !== '#Intro');
  });
  const introSlidUpRef = React.useRef(introSlidUp);
  const isTransitioningRef = React.useRef(false);

  // Keep ref in sync with state
  React.useEffect(() => {
    introSlidUpRef.current = introSlidUp;
  }, [introSlidUp]);

  // Handle initial page load with hash
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== '#Intro') {
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Lock body overflow while Intro is active
  React.useEffect(() => {
    if (!introSlidUp) {
      document.body.style.overflow = 'hidden';
    } else {
      // Delay unlocking well past transition to absorb residual wheel momentum
      const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 1200);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [introSlidUp]);

  // Touch handlers for mobile swipe support
  React.useEffect(() => {
    let startY = 0;
    let touchStartedOnIntro = false; // tracks if THIS gesture began on the intro screen

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        startY = e.touches[0].clientY;
        // Snapshot whether intro is showing at the START of the gesture
        touchStartedOnIntro = !introSlidUpRef.current;
      }
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY; // positive = swipe up, negative = swipe down
      const slidUp = introSlidUpRef.current;

      // SCENARIO 1: Gesture started on intro screen -> block ALL native scroll
      // for the ENTIRE gesture, even after introSlidUp flips to true mid-swipe
      if (touchStartedOnIntro) {
        if (e.cancelable) e.preventDefault();
        if (!slidUp && deltaY > 15 && !isTransitioningRef.current) {
          isTransitioningRef.current = true;
          setIntroSlidUp(true);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 1200);
        }
        return;
      }

      // SCENARIO 2: Content is visible, user at top, swipes DOWN -> restore Home
      if (slidUp && window.scrollY <= 0 && deltaY < -30) {
        if (e.cancelable) e.preventDefault();
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          document.body.style.overflow = 'hidden';
          setIntroSlidUp(false);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 10);
        }
      }

      // SCENARIO 3: Currently transitioning -> block scroll bleed
      if (isTransitioningRef.current) {
        if (e.cancelable) e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      touchStartedOnIntro = false;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  // Single wheel handler registered ONCE — never re-attached
  React.useEffect(() => {
    const handleWheel = (e) => {
      const slidUp = introSlidUpRef.current;

      // SCENARIO 1: Home page is visible -> block ALL native scroll
      if (!slidUp) {
        if (e.cancelable) e.preventDefault();
        if (e.deltaY > 0 && !isTransitioningRef.current) {
          isTransitioningRef.current = true;
          setIntroSlidUp(true);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 1200);
        }
        return;
      }

      // SCENARIO 2: Content is visible, user at top, scrolls UP -> restore Home
      if (slidUp && window.scrollY <= 0 && e.deltaY < 0) {
        if (e.cancelable) e.preventDefault();
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          document.body.style.overflow = 'hidden';
          setIntroSlidUp(false);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 10);
        }
      }

      // SCENARIO 3: Currently transitioning -> block scroll bleed
      if (isTransitioningRef.current) {
        if (e.cancelable) e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []); // Empty deps — registered once, reads refs for current state

  const handleArrowClick = () => {
    if (!isTransitioningRef.current) {
      isTransitioningRef.current = true;
      setIntroSlidUp(true);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 280);
    }
  };

  const handleHomeClick = () => {
    document.body.style.overflow = 'hidden';
    setIntroSlidUp(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavToSection = (href) => {
    setIntroSlidUp(true);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} onHomeClick={handleHomeClick} onNavToSection={handleNavToSection} />
      <div className="flex flex-col min-h-screen bg-black text-white pt-16 relative overflow-x-hidden">
        
        {/* Intro Section — slides up as a curtain overlay */}
        <div
          className={`w-full z-30 transition-transform duration-700 ease-in-out ${
            introSlidUp ? '-translate-y-full pointer-events-none' : 'translate-y-0'
          }`}
          style={{
            position: introSlidUp ? 'absolute' : 'relative',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Intro onButtonClick={handleArrowClick} />
        </div>

        {/* Content sections behind Intro */}
        <div className="w-full relative z-10">
          <Skills skills={utils.Constants.SkillSet} />
          <Timeline timelineData={utils.Constants.TimelineData} />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
