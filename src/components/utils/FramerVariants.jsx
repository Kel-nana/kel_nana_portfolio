const copyPopup = {
  hidden: {
    opacity: 0,
    y: '-100vh',

  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: '-100vh',
  },
};

export default copyPopup;
