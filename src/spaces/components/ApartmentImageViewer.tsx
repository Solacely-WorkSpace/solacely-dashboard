import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Fade,
} from "@mui/material";
import { useEffect, useState } from "react";
import type { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImageTypeLabels } from "../config/const/ImageTypeLabels";
import type { ImageType } from "../types/Apartment";

interface ApartmentImageViewerProps {
  images: Record<string, string[]>;
}

const ApartmentImageViewer: FC<ApartmentImageViewerProps> = ({ images }) => {
  console.log("images to render", images);
  const categories = Object.keys(images);
  const [selectedCategory, setSelectedCategory] =
    useState<ImageType>("bedroom");
  const [imageIndex, setImageIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const open = Boolean(anchorEl);
  const currentImages = images[selectedCategory] || [];
  const currentImage = currentImages[imageIndex];
  console.log("images list", images);

  const handleOpenModal = () => {
    if (!currentImage) return;
    setIsModalOpen(true);
    setIsLoading(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(true);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setImageIndex(0);
    setAnchorEl(null);
    setIsLoading(true);
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % currentImages.length);
    setIsLoading(true);
  };

  const handlePrev = () => {
    setImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
    setIsLoading(true);
  };

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0] as ImageType);
      setImageIndex(0);
    }
  }, [images]);

  return (
    <>
      <Paper
        sx={{
          height: 400,
          position: "relative",
          p: 0,
          boxShadow: 0,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            cursor: currentImage ? "pointer" : "default",
            borderRadius: 5,
          }}
          onClick={handleOpenModal}
        >
          <Box sx={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
            <Button
              variant="contained"
              onClick={handleOpenMenu}
              startIcon={<MoreVertIcon />}
              sx={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff" }}
            >
              {selectedCategory}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleSelectCategory(category);
                  }}
                >
                  {category}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Paper>

      <Modal open={isModalOpen} onClose={handleCloseModal} closeAfterTransition>
        <Fade in={isModalOpen}>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              bgcolor: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
            >
              <CloseIcon />
            </IconButton>

            {currentImages.length > 1 && (
              <IconButton
                onClick={handlePrev}
                sx={{ position: "absolute", left: 16, color: "white" }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            )}

            <Box
              sx={{
                maxWidth: "90%",
                maxHeight: "90%",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {isLoading && <CircularProgress sx={{ color: "white" }} />}

              <img
                src={currentImage}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: isLoading ? "none" : "block",
                  objectFit: "contain",
                }}
                onLoad={() => setIsLoading(false)}
              />
            </Box>

            {currentImages.length > 1 && (
              <IconButton
                onClick={handleNext}
                sx={{ position: "absolute", right: 16, color: "white" }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ApartmentImageViewer;
