import Lottie from "lottie-web";
import React, { useRef, useEffect } from "react";

const LottieAnimation = ({ animation, shouldPlay }: any) => {
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animation,
    });

    anim.setSpeed(0.7);

    if (shouldPlay) anim.play();
    return () => anim.destroy(); // optional clean up for unmounting
  });

  const animationContainer = useRef<HTMLDivElement>(null!);
  return <div ref={animationContainer} className="lottie"></div>;
};

export default LottieAnimation;
