import { motion } from "framer-motion";
import { useCardRotation } from "../../hooks/useCardRotation";

interface DraggableContainerProps {
  children: React.ReactNode;
  onSendToBack?: () => void;
  className?: string;
  isDraggable?: boolean;
}

export function DraggableContainer({
  children,
  onSendToBack,
  className,
  isDraggable = true,
}: DraggableContainerProps) {
  const { x, y, rotateX, rotateY, handleDragEnd } =
    useCardRotation(onSendToBack);

  return (
    <motion.div
      className={className}
      style={{ x, y, rotateX, rotateY, pointerEvents: isDraggable ? "auto" : "none" }}
      drag={isDraggable}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={isDraggable ? { cursor: "grabbing" } : undefined}
      onDragEnd={isDraggable ? handleDragEnd : undefined}
    >
      {children}
    </motion.div>
  );
}
