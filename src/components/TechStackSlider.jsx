import React from 'react';
import Slider from 'react-slick';
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiGraphql,
  SiVite,
  SiTypescript,
  SiMongodb
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techItems = [
  { name: 'React 18', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'AWS Cloud', icon: FaAws, color: '#FF9900' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
];

export default function TechStackSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div style={{ padding: '2rem 0', overflow: 'hidden' }}>
      <Slider {...settings}>
        {techItems.map((tech, idx) => {
          const IconComp = tech.icon;
          return (
            <div key={idx} style={{ padding: '0 1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  padding: '0.85rem 1.25rem',
                  background: 'rgba(23, 21, 43, 0.6)',
                  border: '1px solid rgba(185, 150, 255, 0.12)',
                  borderRadius: '12px',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                <IconComp size={22} style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
