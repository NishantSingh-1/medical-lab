import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import CheckupSlider from "./Recommended Packages/RecommendedPackages";

const SLIDE_INTERVAL_MS = 4000;

const heroImages = [image1, image2, image3, image4, image5, image6];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    x: "0%",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
  }),
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const totalSlides = heroImages.length;

  const goToNextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = window.setInterval(goToNextSlide, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [currentSlide]);

  const currentImage = useMemo(
    () => heroImages[currentSlide],
    [currentSlide]
  );

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-[#fdf6ee] pt-28 md:pt-32">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 md:px-6">
        <div className="group relative mx-auto mt-6 h-[185px] w-full overflow-hidden rounded-[20px] bg-white shadow-md sm:h-[230px] md:mt-0 md:h-[440px] md:rounded-[32px] lg:h-[480px] xl:h-[500px]">
          <div className="relative h-full w-full overflow-hidden rounded-[20px] md:rounded-[32px]">
            <AnimatePresence initial={false} custom={slideDirection}>
              <motion.img
                key={currentSlide}
                src={currentImage}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 180, damping: 26 },
                }}
                className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center md:object-fill"
                alt={`MedLab hero banner ${currentSlide + 1}`}
              />
            </AnimatePresence>
          </div>

          <SliderArrow
            direction="left"
            label="Previous banner"
            onClick={goToPreviousSlide}
          />

          <SliderArrow
            direction="right"
            label="Next banner"
            onClick={goToNextSlide}
          />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 py-2 md:mt-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to banner ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-primary w-7"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mb-10 mt-6 w-full max-w-[1360px] px-4 md:mt-10 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center md:justify-start"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-primary hover:bg-primary-hover rounded-full px-8 py-3.5 font-semibold text-white shadow-md transition"
            >
              Book Slot
            </Link>

            <Link
              to="/tests"
              className="border-primary text-primary hover:bg-primary-light rounded-full border-2 px-8 py-3.5 font-semibold transition"
            >
              Explore Tests
            </Link>
          </div>
        </motion.div>
      </div>

      <CheckupSlider />
    </section>
  );
};

type SliderArrowProps = {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
};

const SliderArrow = ({ direction, label, onClick }: SliderArrowProps) => {
  const positionClass = direction === "left" ? "left-2 md:left-5" : "right-2 md:right-5";
  const arrowSymbol = direction === "left" ? "‹" : "›";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${positionClass} absolute top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sm font-medium text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white md:h-12 md:w-12 md:text-xl md:text-slate-800 md:opacity-0 md:shadow-xl md:group-hover:opacity-100`}
    >
      {arrowSymbol}
    </button>
  );
};

export default Hero;