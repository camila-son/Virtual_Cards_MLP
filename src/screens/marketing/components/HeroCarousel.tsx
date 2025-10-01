import React, { useRef, useState, useCallback } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { HeroSection } from './HeroSection';
import { HERO_DATA, MARKETING_SCREEN_CONFIG } from '../../../constants/marketingData';
import { HeroCarouselProps } from '../../../types/navigation';

const { width: screenWidth } = Dimensions.get('window');
const HERO_WIDTH = screenWidth - (MARKETING_SCREEN_CONFIG.MARGIN * 2);

export function HeroCarousel({ onIndexChange }: HeroCarouselProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback((event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const snapInterval = HERO_WIDTH + MARKETING_SCREEN_CONFIG.MARGIN;
    const index = Math.round(contentOffsetX / snapInterval);
    
    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, HERO_DATA.length - 1));
    
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
      onIndexChange(clampedIndex);
    }
  }, [currentIndex, onIndexChange]);

  const handleMomentumScrollEnd = useCallback((event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const snapInterval = HERO_WIDTH + MARKETING_SCREEN_CONFIG.MARGIN;
    const index = Math.round(contentOffsetX / snapInterval);
    
    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, HERO_DATA.length - 1));
    
    // Snap to center with proper calculation accounting for padding
    const targetX = clampedIndex * snapInterval;
    scrollViewRef.current?.scrollTo({
      x: targetX,
      animated: false, // Remove bounce by disabling animation
    });
  }, []);

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
        snapToInterval={HERO_WIDTH + MARKETING_SCREEN_CONFIG.MARGIN}
        snapToAlignment="start"
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        bouncesZoom={false}
        alwaysBounceHorizontal={false}
      >
        {HERO_DATA.map((hero, index) => (
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
    paddingLeft: MARKETING_SCREEN_CONFIG.MARGIN,
    paddingRight: MARKETING_SCREEN_CONFIG.MARGIN,
  },
  heroContainer: {
    width: HERO_WIDTH,
    marginRight: MARKETING_SCREEN_CONFIG.MARGIN,
  },
});
