'use client';

import React from 'react';

interface CarouselProps {
  data: { text: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {

  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
        {data.map((item, index) => (
          <div key={index} style={{ minWidth: '100%', position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              {renderTextWithLineBreaks(item.text)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;