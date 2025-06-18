import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Button, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlaceholderImage from "../../assets/images/common/placeholder.png";
import { ReactComponent as LocationIcon } from "../../assets/images/space/location.svg";
import ApartmentDetails from "../../spaces/components/ApartmentDetails";
import type { Apartment } from "../../spaces/types/Apartment";
import { apartmentService } from "../../spaces/service/ApartmentService";
const slideDuration = 5000;

const AuthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const progressRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const slides = ["", "", ""];

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
      startTimeRef.current = null;
      setProgress(0);
      sliderRef.current?.slickNext();
    }
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateProgress);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      startTimeRef.current = null;
    };
  }, [currentSlide]);

  const [apartments, setApartments] = useState<Apartment[]>([]);


  const fetchApartments = async (): Promise<void> => {
    try {
      const { data } = await apartmentService.getAll();
       setApartments((data as Apartment[]).slice(0, 3));
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchApartments();
  }, []);

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
    autoplay: false,
  };

  const customPaging = (i: number) => {
    const isActive = i === currentSlide;
    return (
      <Box
        sx={{
          width: isActive ? 40 : 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: isActive ? "primary.main" : "grey.400",
          position: "relative",
          overflow: "hidden",
          transition: "width 0.3s ease",
        }}
      >
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              backgroundColor: "primary.dark",
              width: `${progress}%`,
              transition: "width 0.1s linear",
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
        height: "100vh",
        width: "100%",
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080?nature)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {apartments && (
        <Box sx={{ width: { xs: "90%", sm: "60%", md: "50%" } }}>
          <Slider
            ref={sliderRef}
            {...settings}
            appendDots={(dots) => (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  marginTop: 2,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {dots}
              </Box>
            )}
            customPaging={customPaging}
          >
            {apartments.map((apartment, idx) => (
              <Box
                key={idx}
                sx={{
                  height: 420,
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: "bold",
                  userSelect: "none",
                  borderRadius: 1,
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Box
                    component="img"
                    src={PlaceholderImage}
                    sx={{
                      height: 200,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#171717",
                      fontSize: 18,
                      fontWeight: 700,
                      marginTop: 1,
                    }}
                  >
                    1 Bedroom aprtment
                  </Typography>

                  <Typography
                    sx={{
                      color: "#195444",
                      fontSize: 16,
                      fontWeight: 600,
                      marginTop: 1,
                      marginBottom: 1,
                    }}
                  >
                    ₦{apartment.price.toLocaleString()}/ month
                  </Typography>

                  <ApartmentDetails apartment={apartment} />

                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationIcon />
                    <Typography
                      fontSize={13}
                      sx={{
                        color: "#515151",
                      }}
                    >
                      {apartment.location}
                    </Typography>
                  </Stack>

                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      mt: 2,
                    }}
                    fullWidth
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default AuthSlider;
