import React, { useRef, useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { HeroSection } from './HeroSection';

const { width: screenWidth } = Dimensions.get('window');
const HERO_WIDTH = screenWidth - 32; // 16px margin on each side

interface HeroCarouselProps {
  onIndexChange: (index: number) => void;
}

export function HeroCarousel({ onIndexChange }: HeroCarouselProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroData = [
    { emoji: '🤡' },
    { emoji: '💳' },
    { emoji: '🚀' },
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const snapInterval = HERO_WIDTH + 16;
    const index = Math.round(contentOffsetX / snapInterval);
    
    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, heroData.length - 1));
    
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
      onIndexChange(clampedIndex);
    }
  };

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const snapInterval = HERO_WIDTH + 16;
    const index = Math.round(contentOffsetX / snapInterval);
    
    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, heroData.length - 1));
    
    // Snap to center with proper calculation accounting for padding
    const targetX = clampedIndex * snapInterval;
    scrollViewRef.current?.scrollTo({
      x: targetX,
      animated: false, // Remove bounce by disabling animation
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        decelerationRate={0.98}
        snapToInterval={HERO_WIDTH + 16}
        snapToAlignment="start"
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        bouncesZoom={false}
        alwaysBounceHorizontal={false}
      >
        {heroData.map((hero, index) => (
          <View key={index} style={styles.heroContainer}>
            <HeroSection emoji={hero.emoji} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  scrollContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  heroContainer: {
    width: HERO_WIDTH,
    marginRight: 16,
  },
});
