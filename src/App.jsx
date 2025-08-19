
import React, { useState, useEffect } from 'react';


const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Confidence",
      subtitle: "grows in community",
      mainText: "Clarity & Confidence",
      description: "together brings strong trading",
      highlight: "Community",
      image: "/images/1.jpg"
    },
    {
      id: 2,
      title: "Community",
      subtitle: "builds success",
      mainText: "Clarity & Confidence",
      description: "together brings strong trading",
      highlight: "Community",
      image: "/images/2.jpg"
    },
    {
      id: 3,
      title: "Clarity",
      subtitle: "is not an option, it's an",
      mainText: "Edge",
      description: "Precision trading starts here",
      highlight: "Edge",
      image: "/images/3.jpg"
    },
    {
      id: 4,
      title: "Strategy",
      subtitle: "drives results",
      mainText: "Clarity & Confidence",
      description: "together brings strong trading",
      highlight: "Community",
      image: "/images/2.jpg"
    },
    {
      id: 5,
      title: "Growth",
      subtitle: "through learning",
      mainText: "Clarity & Confidence",
      description: "together brings strong trading",
      highlight: "Community",
      image: "/images/1.jpg"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, cards.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const total = cards.length;
    
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    return position;
  };

  return (
    <div className="carousel-container">
      <style jsx>{`
        
      `}</style>

      <div className="carousel-wrapper">
        {cards.map((card, index) => {
          console.log('card', card)
          const position = getCardPosition(index);
          return (
            <div
              key={card.id}
              className="card"
              data-position={position}
              onClick={() => goToSlide(index)}
            >
              <div className="card-inner">
                 <img src={card.image} alt={card.title} />
                {/* we will use this in case of card contains content */}
                {/* <div className="card-body">
                  <div className="card-main-text">{card.mainText}</div>
                  <div className="card-description">{card.description}</div>
                  <div className="card-highlight">{card.highlight}</div>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="controls">
        <button className="control-btn" onClick={prevSlide}>
          ‹
        </button>
        <button className="control-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="indicators">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button 
        className="auto-play-toggle"
        onClick={() => setIsAutoPlay(!isAutoPlay)}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default CardCarousel;