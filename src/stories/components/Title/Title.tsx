
import React from 'react';
import './title.css';

interface TitleProps {
  level: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, children }) => {
  const Heading = level;
  
  return <Heading>{children}</Heading>;
};

export default Title;
