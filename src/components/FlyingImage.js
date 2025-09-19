import { motion } from "framer-motion";

export default function FlyingImage({ src, start, end, onComplete }) {
  return (
    <motion.img
      src={src}
      initial={{
        top: start.y,
        left: start.x,
        width: 100,
        height: 60,
        position: "fixed",
        borderRadius: 8,
        zIndex: 50,
      }}
      animate={{
        top: end.y,
        left: end.x,
        width: 30,
        height: 20,
        opacity: 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
