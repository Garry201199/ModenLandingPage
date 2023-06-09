export const fadeIn = (direction) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          // type: 'linear',
          duration: 1,
          ease: [0.12, 0, 0.39, 0],
        },
      },
      exit:{
        opacity:0,
        scale:0,
      }

    };
  };