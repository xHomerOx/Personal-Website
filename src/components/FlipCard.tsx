import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/FlipCard.module.sass";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card front" onClick={handleClick}>
        {frontContent}
      </div>

      <div className="card back" onClick={handleClick}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
