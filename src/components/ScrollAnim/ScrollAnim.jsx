import { useEffect } from 'react';

const ScrollAnim = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));

    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return null;
};

export default ScrollAnim;
