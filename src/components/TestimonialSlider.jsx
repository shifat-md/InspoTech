import React from 'react';
import Slider from 'react-slick';
import { FiMessageSquare, FiStar } from 'react-icons/fi';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="slick-slider-wrapper">
      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div key={item.id}>
            <div className="testimonial-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <FiMessageSquare className="testimonial-quote-icon" style={{ margin: 0 }} />
                <div style={{ display: 'flex', gap: '3px', color: '#FBBF24' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <FiStar key={i} fill="#FBBF24" size={16} />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">"{item.quote}"</p>

              <div className="testimonial-author-row">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="testimonial-name">{item.clientName}</h4>
                  <p className="testimonial-role">{item.role} • {item.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
