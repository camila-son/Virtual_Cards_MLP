import React, { useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { CardCarouselProps } from '../types';
import { LAYOUT_CONSTANTS } from '../constants';

export function CardCarousel({
  cardDesigns,
  selectedDesignIndex,
  onCardSelect,
  screenWidth,
  scrollToIndex,
}: CardCarouselProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const itemWidth = LAYOUT_CONSTANTS.CARD_WIDTH + LAYOUT_CONSTANTS.CARD_SPACING;
  const screenCenter = screenWidth / 2;

  // Calculate correct snap positions to center each card
  const snapPositions = Array.from({ length: cardDesigns.length }, (_, index) => {
    const cardCenterInContent = LAYOUT_CONSTANTS.LEFT_MARGIN + (index * itemWidth) + (LAYOUT_CONSTANTS.CARD_WIDTH / 2);
    return cardCenterInContent - screenCenter;
  });

  const handleCardPress = (index: number) => {
    onCardSelect(index);
    scrollViewRef.current?.scrollTo({
      x: snapPositions[index],
      animated: true,
    });
  };

  const handleScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    
    // Calculate which card is centered based on snap positions
    let closestIndex = 0;
    let minDistance = Math.abs(contentOffsetX - snapPositions[0]);
    
    for (let i = 1; i < snapPositions.length; i++) {
      const distance = Math.abs(contentOffsetX - snapPositions[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    if (closestIndex !== selectedDesignIndex) {
      onCardSelect(closestIndex);
    }
  };

  // Handle external scroll requests (from color swatches)
  useEffect(() => {
    if (scrollToIndex !== undefined && scrollToIndex >= 0 && scrollToIndex < snapPositions.length) {
      scrollViewRef.current?.scrollTo({
        x: snapPositions[scrollToIndex],
        animated: true,
      });
    }
  }, [scrollToIndex, snapPositions]);

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToOffsets={snapPositions}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContent}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {/* Left margin */}
        <View style={styles.leftMargin} />
        
        {cardDesigns.map((item, index) => (
          <React.Fragment key={item.id}>
            <TouchableOpacity
              style={styles.cardDesignItem}
              activeOpacity={1}
              onPress={() => handleCardPress(index)}
            >
              <Image 
                source={item.image} 
                style={styles.cardImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            {/* Spacer between cards (except after last card) */}
            {index < cardDesigns.length - 1 && (
              <View style={styles.cardSpacer} />
            )}
          </React.Fragment>
        ))}
        
        {/* Right margin */}
        <View style={styles.rightMargin} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 36, // 36px below title
    alignItems: 'center',
    position: 'relative',
  },
  carouselContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftMargin: {
    width: LAYOUT_CONSTANTS.LEFT_MARGIN,
    height: 330,
  },
  rightMargin: {
    width: LAYOUT_CONSTANTS.LEFT_MARGIN,
    height: 330,
  },
  cardSpacer: {
    width: LAYOUT_CONSTANTS.CARD_SPACING,
    height: 330,
  },
  cardDesignItem: {
    width: LAYOUT_CONSTANTS.CARD_WIDTH,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: LAYOUT_CONSTANTS.CARD_WIDTH,
    height: 330,
  },
});

