import React, { useEffect, useState } from "react";

export default function ProgressiveImage({
  imgSrc,
  previewSrc,
  width,
  height
}) {
  const [usedSrc, setUsedSrc] = useState(previewSrc);
  const [usedEffectStyle, setUsedEffectStyle] = useState({
    filter: "blur(15px)",
    clipPath: "inset(0)"
  });

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setUsedSrc(img.src);
      setUsedEffectStyle({});
    };
  }, []);

  return (
    <img
      src={usedSrc}
      width={width}
      height={height}
      alt="demo"
      style={{
        transition: "filter 0.1s ease-out",
        objectFit:'cover',
        // objectPosition: "contain",
        ...usedEffectStyle
      }}
    />
  );
}
