import { CardStack } from "../core/CardStack";
import type { StackableItem } from "../../lib/types";

interface ImageCard extends StackableItem {
  img: string;
}

export function ImageCardStack() {
  const items: ImageCard[] = [
    { id: 1, img: "/1.avif" },
    { id: 2, img: "/2.jpg" },
    { id: 3, img: "/3.jpg" },
    { id: 4, img: "/4.jpg" },
  ];

  return (
    <CardStack items={items}>
      {(card) => (
        <img
          src={card.img as string}
          alt="card"
          width={1000}
          height={1000}
          className="pointer-events-none h-full w-full rounded-lg object-cover"
        />
      )}
    </CardStack>
  );
}
