// src/components/WomanDrinkingTeaAnimation.tsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WomanDrinkingTeaAnimation: React.FC = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/5ebc2394-d4ed-4c95-9ae7-e6541713a039/q4yM0X0sCA.lottie"
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
