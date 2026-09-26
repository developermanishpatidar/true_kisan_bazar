import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Idiomatic React component using React hooks (useRef, useEffect) and JSX
 * to ensure every route transition starts at the top of the page.
 */
const ScrollToTop = ({ children }) => {
  const { pathname, search } = useLocation();
  const topAnchorRef = useRef(null);

  useEffect(() => {
    // Scroll the React top anchor element into view
    if (topAnchorRef.current) {
      topAnchorRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
    // Window scroll reset
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search]);

  return (
    <>
      <div
        ref={topAnchorRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          visibility: 'hidden',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      {children || null}
    </>
  );
};

export default ScrollToTop;
