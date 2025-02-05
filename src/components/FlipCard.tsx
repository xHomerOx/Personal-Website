import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerStyle={{ width: "100%", height: "100%" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {frontContent}
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#28a745",
          background: "linear-gradient(262deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%)",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
