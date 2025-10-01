import React, { useState } from 'react';
import { HeroCarousel } from './HeroCarousel';
import { PageIndicators } from './PageIndicators';
import { ContentSection } from './ContentSection';

export function HeroSectionWithIndicators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCount = 3; // Number of hero sections

  return (
    <>
      <HeroCarousel onIndexChange={setCurrentIndex} />
      <PageIndicators currentIndex={currentIndex} totalCount={totalCount} />
      <ContentSection currentIndex={currentIndex} />
    </>
  );
}
