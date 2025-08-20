import React from 'react';

interface ThreeProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Three: React.FC<ThreeProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#ff69b4' }}>{title}</h2> {/* Pink color for title */}
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <p