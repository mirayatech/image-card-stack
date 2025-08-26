import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { DraggableContainer } from "./DraggableContainer";
import type { StackableItem } from "../../lib/types";

interface StackConfig {
  rotation: number;
  scale: number;
  perspective: number;
}

interface CardStackProps<T extends StackableItem> {
  items: T[];
  children: (item: T) => ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  stackConfig?: Partial<StackConfig>;
}

const defaultConfig: StackConfig = {
  rotation: 4,
  scale: 0.06,
  perspective: 600,
};

export function CardStack<T extends StackableItem>({
  items: initialItems,
  children,
  containerClassName = "relative h-52 w-52",
  cardClassName = "absolute h-52 w-52 cursor-grab",
  stackConfig: userConfig = {},
}: CardStackProps<T>) {
  const [items, setItems] = useState(initialItems);
  const config = { ...defaultConfig, ...userConfig };

  const sendToBack = (id: T["id"]) => {
    setItems((prev) => {
      const newItems = [...prev];
      const index = newItems.findIndex((item) => item.id === id);
      const [item] = newItems.splice(index, 1);
      newItems.unshift(item);
      return newItems;
    });
  };

  return (
    <div
      className={containerClassName}
      style={{ perspective: config.perspective }}
    >
      {items.map((item, index) => (
        <DraggableContainer
          key={item.id}
          onSendToBack={() => sendToBack(item.id)}
          className={cardClassName}
        >
          <motion.div
            className="h-full w-full"
            animate={{
              rotateZ: (items.length - index - 1) * config.rotation,
              scale: 1 + index * config.scale - items.length * config.scale,
              transformOrigin: "90% 90%",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {children(item)}
          </motion.div>
        </DraggableContainer>
      ))}
    </div>
  );
}
