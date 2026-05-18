import { useEffect, useRef, useState } from 'react';

/**
 * AnimateOnScroll — wraps any children and applies a fade-up / slide
 * animation the first time the element scrolls into the viewport.
 *
 * Props:
 *  animation  — 'fade-up' | 'fade-in' | 'slide-left'  (default: 'fade-up')
 *  delay      — CSS delay in seconds, e.g. 0.1              (default: 0)
 *  threshold  — IntersectionObserver threshold              (default: 0.15)
 *  className  — extra class names on the wrapper div
 *  as         — HTML tag for the wrapper                   (default: 'div')
 */
const AnimateOnScroll = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass = visible ? `animate-${animation}` : 'pre-animate';

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${className}`.trim()}
      style={{ animationDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
