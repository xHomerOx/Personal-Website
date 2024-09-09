'use client'

import React from 'react';

interface CarouselProps {
  data: { text: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {

  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s ease'}}>
        {data.map((item, index) => (
          <div key={index} style={{ minWidth: '100%', position: 'relative', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;