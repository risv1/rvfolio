import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";

const Horizontal = ({children}: {children: ReactNode}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden">
        <motion.div style={{x}} className="flex gap-4 text-6xl">
            {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
