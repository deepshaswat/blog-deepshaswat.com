import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  startColor: string;
  endColor: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  startColor,
  endColor,
  className,
}) => {
  const style = {
    "--gradient-start": startColor,
    "--gradient-end": endColor,
  } as React.CSSProperties;

  return (
    <h1
      className={`gradient-text text-5xl font-bold mb-10 ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};

export default GradientText;
