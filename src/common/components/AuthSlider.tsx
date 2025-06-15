import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideDuration = 5000; 

const AuthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const progressRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const slides = [
    'Slide 1 Content',
    'Slide 2 Content',
    'Slide 3 Content',
  ];

  const animateProgress = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    const elapsed = timestamp - startTimeRef.current;
    const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
    setProgress(newProgress);
    progressRef.current = newProgress;

    if (newProgress < 100) {
      animationFrameId.current = requestAnimationFrame(animateProgress);
    } else {
      // Move to next slide when progress completes
      startTimeRef.current = null;
      setProgress(0);
      sliderRef.current?.slickNext();
    }
  };

  // Start animation on currentSlide change
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateProgress);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      startTimeRef.current = null;
    };
  }, [currentSlide]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
      setProgress(0);
      startTimeRef.current = null;
    },
    // We disable autoplay since we control slide change manually
    autoplay: false,
  };

  // Custom dots render with progress loader on active dot
  const customPaging = (i: number) => {
    const isActive = i === currentSlide;
    return (
      <Box
        sx={{
          width: isActive ? 40 : 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: isActive ? 'primary.main' : 'grey.400',
          position: 'relative',
          overflow: 'hidden',
          transition: 'width 0.3s ease',
        }}
      >
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              backgroundColor: 'primary.dark',
              width: `${progress}%`,
              transition: 'width 0.1s linear',
              borderRadius: 6,
            }}
          />
        )}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080?nature)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: { xs: '90%', sm: '60%', md: '50%' } }}>
        <Slider ref={sliderRef} {...settings} appendDots={dots => (
          <Box
            component="ul"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              marginTop: 2,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {dots}
          </Box>
        )} customPaging={customPaging}>
          {slides.map((content, idx) => (
            <Box
              key={idx}
              sx={{
                height: 300,
                bgcolor: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                userSelect: 'none',
              }}
            >
              {content}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default AuthSlider;
