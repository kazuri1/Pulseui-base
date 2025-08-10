import React from "react";
import npmLogo from "../../../assets/npmlogo.png";

interface NpmIconProps {
  className?: string;
  size?: number;
}

export const NpmIcon: React.FC<NpmIconProps> = ({ className, size = 16 }) => {
  return (
    <img
      src={npmLogo}
      alt="npm"
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  );
};
