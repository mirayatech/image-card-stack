# 🃏 Dynamic Image Card Stack

An interactive image stack component built with React and Motion. Features smooth 3D animations, drag interactions, and a reusable component architecture that can work with any type of stackable content.

## ✨ Technologies

- `React 19`
- `TypeScript`
- `Motion 12` (Framer Motion successor)
- `Tailwind CSS 4`
- `Vite 7`

## 🚀 Features

- **Dynamic Card Stacking** - Cards naturally stack with configurable rotation and scale
- **3D Drag Interactions** - Realistic card rotations that respond to drag movements
- **Spring Physics** - Smooth animations with natural spring transitions
- **Generic Architecture** - Built with TypeScript generics to work with any `StackableItem` type
- **Configurable Effects** - Customize rotation angles, scaling factors, and 3D perspective
- **Threshold Detection** - Cards automatically move to bottom of stack when dragged beyond limits

## 📍 The Process

I wanted to create something that felt tactile and fun, like handling real cards. Started with a simple drag concept but realized it needed that extra dimension to feel authentic. The 3D rotations based on drag position make each interaction feel responsive and natural. The generic component design means you can stack anything.. images, content cards, whatever you need. The spring animations give it that satisfying snap-back feeling when you let go. Built the whole thing to be modular, so the core `CardStack` component can be reused while `ImageCardStack` shows how to implement it for specific use cases.

## 🎯 Component Architecture

- **`CardStack<T>`** - Generic draggable stack component accepting any `StackableItem`
- **`DraggableContainer`** - Handles drag physics and 3D motion effects  
- **`useCardRotation`** - Custom hook managing drag interactions and threshold detection
- **`ImageCardStack`** - Concrete implementation for image galleries
- **`StackableItem`** - TypeScript interface ensuring type safety across components

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## 🎞️ Preview

https://github.com/user-attachments/assets/1d35a074-284f-478f-a95b-541ad3ee242e


