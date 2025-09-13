// src/components/WomanDrinkingTeaAnimation.tsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WomanDrinkingTeaAnimation: React.FC = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/4459d9c8-f076-41e7-a09b-6576e20f43f4/HyTfpbVMiO.lottie"
      loop
      autoplay
      style={{ 
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
       }}
    />
  );
};

export default WomanDrinkingTeaAnimation;
