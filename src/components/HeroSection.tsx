import { useState, useEffect, useCallback, useRef } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg1 from "@/assets/hero-grid-1.jpg";
import heroImg2 from "@/assets/hero-grid-2.jpg";
import heroImg3 from "@/assets/hero-grid-3.jpg";
import heroImg4 from "@/assets/hero-grid-4.jpg";
import "@/styles/hero.css";
import "@/styles/button.css";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

/*
  4 images, 2 columns, each image has a fixed height.
  We define 4 "slots" — top-left, bottom-left, top-right, bottom-right.
  Each slot has a fixed size. Images shuffle which slot they occupy.
  All images stay in one flat container with absolute positioning
  so Framer Motion can smoothly animate between any position.
*/

const GAP = 12;
const COL_WIDTH_PCT = 50; // each column is 50% minus half gap

// Fixed heights for each image (these never change)
const IMG_HEIGHTS = [240, 180, 200, 260];

// Generate a random permutation of [0,1,2,3]
function shuffleIndices(): number[] {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Given a permutation (which image goes to which slot),
// compute the top/left/width/height for each image.
// Slots: 0=top-left, 1=bottom-left, 2=top-right, 3=bottom-right
function computePositions(perm: number[]) {
  // perm[imageIdx] = slotIdx
  // We need to figure out which images are in left col vs right col
  const leftImages: number[] = [];
  const rightImages: number[] = [];

  for (let imgIdx = 0; imgIdx < 4; imgIdx++) {
    const slot = perm[imgIdx];
    if (slot === 0 || slot === 1) leftImages.push(imgIdx);
    else rightImages.push(imgIdx);
  }

  // Sort by slot to determine top vs bottom
  leftImages.sort((a, b) => perm[a] - perm[b]);
  rightImages.sort((a, b) => perm[a] - perm[b]);

  const positions: Record<
    number,
    { top: number; left: string; height: number }
  > = {};

  // Left column — centered vertically
  const leftTotalH =
    IMG_HEIGHTS[leftImages[0]] + GAP + IMG_HEIGHTS[leftImages[1]];
  const rightTotalH =
    IMG_HEIGHTS[rightImages[0]] + GAP + IMG_HEIGHTS[rightImages[1]];
  const maxH = Math.max(leftTotalH, rightTotalH);

  const leftOffsetY = (maxH - leftTotalH) / 2;
  positions[leftImages[0]] = {
    top: leftOffsetY,
    left: "0%",
    height: IMG_HEIGHTS[leftImages[0]],
  };
  positions[leftImages[1]] = {
    top: leftOffsetY + IMG_HEIGHTS[leftImages[0]] + GAP,
    left: "0%",
    height: IMG_HEIGHTS[leftImages[1]],
  };

  const rightOffsetY = (maxH - rightTotalH) / 2;
  positions[rightImages[0]] = {
    top: rightOffsetY,
    left: `calc(50% + ${GAP / 2}px)`,
    height: IMG_HEIGHTS[rightImages[0]],
  };
  positions[rightImages[1]] = {
    top: rightOffsetY + IMG_HEIGHTS[rightImages[0]] + GAP,
    left: `calc(50% + ${GAP / 2}px)`,
    height: IMG_HEIGHTS[rightImages[1]],
  };

  return { positions, containerHeight: maxH };
}

const HeroSection = () => {
  const [perm, setPerm] = useState<number[]>(() => shuffleIndices());
  const permRef = useRef(perm);

  const shuffle = useCallback(() => {
    let next = shuffleIndices();
    // Ensure at least one image changes slot
    while (next.every((s, i) => s === permRef.current[i])) {
      next = shuffleIndices();
    }
    permRef.current = next;
    setPerm(next);
  }, []);

  useEffect(() => {
    const interval = setInterval(shuffle, 3000);
    return () => clearInterval(interval);
  }, [shuffle]);

  const { positions, containerHeight } = computePositions(perm);

  return (
    <section className="hero">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pill">// Live Now</span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              New Auctions <br className="br-desktop" />
              Every <span className="accent-dot">Week</span>.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Discover unbeatable deals on premium items. Canada's most trusted
              auction platform from luxury goods to everyday essentials.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button className="btn btn-primary btn-xl">
                Browse Auctions
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline btn-xl">How It Work</button>
            </motion.div>

            {/* <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Live Auctions ending today
            </motion.div> */}

            {/* <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="hero-avatars">
                {["MR", "KL", "JS", "AP"].map((initials, i) => (
                  <div key={i} className="hero-avatar">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="hero-social-text">
                <strong>12,400+</strong> trusted bidders across Canada
              </div>
            </motion.div> */}

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="hero-social-text" style={{ paddingLeft: 24 }}>
                {/* <strong>12,400+</strong> */}Live auctions ending today 🔥
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-masonry"
            style={{ height: containerHeight }}
            initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="hero-image-cell"
                animate={{
                  top: positions[i].top,
                  left: positions[i].left,
                  height: positions[i].height,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage: `url(${src})`,
                  position: "absolute",
                  width: `calc(50% - ${GAP / 2}px)`,
                }}
                role="img"
                aria-label={`Auction item ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
