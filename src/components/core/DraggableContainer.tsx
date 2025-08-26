import { motion } from "framer-motion";
import { useCardRotation } from "../../hooks/useCardRotation";

interface DraggableContainerProps {
  children: React.ReactNode;
  onSendToBack?: () => void;
  className?: string;
}

export function DraggableContainer({
  children,
  onSendToBack,
  className,
}: DraggableContainerProps) {
  const { x, y, rotateX, rotateY, handleDragEnd } =
    useCardRotation(onSendToBack);

  return (
    <motion.div
      className={className}
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}
