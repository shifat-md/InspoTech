import React from 'react';
import * as Icons from 'react-icons/fi';

export default function DynamicIcon({ name, size = 24, className = '' }) {
  const IconComponent = Icons[name] || Icons.FiLayers;
  return <IconComponent size={size} className={className} />;
}
