import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TopNavigationBar } from './marketing/components/TopNavigationBar';
import { CustomVirtualCardScreenProps } from '../types/navigation';
import { Fonts } from '../components/config/fonts';

export function CustomVirtualCardScreen({ onBack }: CustomVirtualCardScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const nameFadeAnim = useRef(new Animated.Value(1)).current;
  const flatListRef = useRef<ScrollView>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = 220;
  const cardSpacing = 44;
  const itemWidth = cardWidth + cardSpacing;
  
  // Calculate the exact center offset for each item
  const centerOffset = (screenWidth - cardWidth) / 2;
  const screenCenter = screenWidth / 2;
  const leftMargin = 90.5;
  
  // Calculate correct snap positions to center each card
  const snapPositions = Array.from({ length: 5 }, (_, index) => {
    const cardCenterInContent = leftMargin + (index * itemWidth) + (cardWidth / 2);
    return cardCenterInContent - screenCenter;
  });
  
  // Debug: Log the actual dimensions and calculated positions
  console.log('Screen width:', screenWidth);
  console.log('Screen center:', screenCenter);
  console.log('Card width:', cardWidth);
  console.log('Card spacing:', cardSpacing);
  console.log('Item width:', itemWidth);
  console.log('Left margin:', leftMargin);
  console.log('Calculated snap positions:', snapPositions);

  // Card designs data
  const cardDesigns = [
    { id: 0, name: 'Waveform', image: require('../../assets/custom-card/waveform.png') },
    { id: 1, name: 'Tulips', image: require('../../assets/custom-card/tulips.png') },
    { id: 2, name: 'City', image: require('../../assets/custom-card/city.png') },
    { id: 3, name: 'Cloud', image: require('../../assets/custom-card/cloud.png') },
    { id: 4, name: 'Flowers', image: require('../../assets/custom-card/flowers.png') },
  ];

  // Color swatches data based on Figma design
  const colorSwatches = [
    { id: 0, color: '#8D0DE3', name: 'Purple' }, // Core Purple from Figma
    { id: 1, color: '#CBA5FD', name: 'Light Purple' }, // Purple 200
    { id: 2, color: '#ECDFFF', name: 'Very Light Purple' }, // Purple 100
    { id: 3, color: '#3E1874', name: 'Dark Purple' }, // UV Surface Accent Primary
    { id: 4, color: '#490C74', name: 'Deep Purple' }, // PJ Surface Accent Primary
  ];

  const animateNameChange = (newIndex: number) => {
    // Fade out current name
    Animated.timing(nameFadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      // Update the selected design index
      setSelectedDesignIndex(newIndex);
      // Fade in new name
      Animated.timing(nameFadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleColorSwatchPress = (index: number) => {
    setSelectedColorIndex(index);
    // Map color swatch index to card design index
    const cardIndex = Math.min(index, cardDesigns.length - 1);
    
    console.log(`Swatch ${index} clicked, scrolling to position: ${snapPositions[cardIndex]}`);
    flatListRef.current?.scrollTo({
      x: snapPositions[cardIndex],
      animated: true,
    });
    animateNameChange(cardIndex);
  };

  useEffect(() => {
    // Slide in from right animation when component mounts
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleBack = () => {
    // Slide out to right animation before navigating back
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onBack();
    });
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <TopNavigationBar onBack={handleBack} />
        {/* Screen title positioned 8px below TopNavigationBar */}
        <Text style={styles.screenTitle}>
          Choose a design for your virtual card
        </Text>
        
        {/* Carousel container positioned 36px below title */}
        <View style={styles.carouselContainer}>
          <ScrollView
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToOffsets={snapPositions} // Use dynamically calculated snap positions
            snapToAlignment="center"
            decelerationRate="fast"
            contentContainerStyle={styles.carouselContent}
            onMomentumScrollEnd={(event) => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              console.log(`Natural scroll ended at position: ${contentOffsetX}`);
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
                animateNameChange(closestIndex);
                // Update the selected color swatch to match the centered card
                setSelectedColorIndex(closestIndex);
              }
            }}
          >
            {/* Left margin */}
            <View style={styles.leftMargin} />
            
            {cardDesigns.map((item, index) => (
              <React.Fragment key={item.id}>
                <TouchableOpacity
                  style={styles.cardDesignItem}
                  onPress={() => {
                    setSelectedDesignIndex(index);
                    // Update the selected color swatch to match the clicked card
                    setSelectedColorIndex(index);
                    // Scroll to the snap position for this card
                    flatListRef.current?.scrollTo({
                      x: snapPositions[index],
                      animated: true,
                    });
                  }}
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
        {/* Card name with dissolve effect positioned 20px below carousel */}
        <View style={styles.cardNameContainer}>
          <Animated.Text 
            style={[
              styles.cardName,
              {
                opacity: nameFadeAnim,
              }
            ]}
          >
            {cardDesigns[selectedDesignIndex]?.name}
          </Animated.Text>
        </View>
        {/* Color swatches positioned 32px below card name */}
        <View style={styles.colorSwatchesContainer}>
          {colorSwatches.map((swatch, index) => (
            <TouchableOpacity
              key={swatch.id}
              style={[
                styles.colorSwatch,
                selectedColorIndex === index && styles.selectedSwatch,
              ]}
              onPress={() => handleColorSwatchPress(index)}
            >
              <View
                style={[
                  styles.colorCircle,
                  { backgroundColor: swatch.color },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        {/* Empty content area */}
        <View style={styles.content}>
          {/* Content will be added here */}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: '#ece9ee',
    zIndex: 1002, // Higher than marketing screen's zIndex: 1001
  },
  safeArea: {
    flex: 1,
  },
  screenTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'left',
    marginTop: 8, // 8px below TopNavigationBar
    paddingHorizontal: 24,
  },
  carouselContainer: {
    marginTop: 36, // 36px below title
    alignItems: 'center',
    position: 'relative', // For absolute positioning of viewport overlay
  },
  carouselContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftMargin: {
    width: 90.5, // 90.5px margin to the left of first card
    height: 330,
  },
  rightMargin: {
    width: 90.5, // 90.5px margin to the right of last card
    height: 330,
  },
  cardSpacer: {
    width: 44, // 44px spacer between cards
    height: 330,
  },
  cardDesignItem: {
    width: 220, // Each item is exactly 220px wide
    height: 330, // Each item is exactly 330px tall
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCardDesign: {
    // Add selection styling if needed
  },
  firstCardItem: {
    // No additional margin needed - contentInset handles centering
  },
  lastCardItem: {
    marginRight: 0, // Remove right margin from last item
  },
  cardImage: {
    width: 220,
    height: 330,
  },
  cardNameContainer: {
    alignItems: 'center',
    marginTop: 20, // 20px below carousel
  },
  cardName: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 20,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
  },
  colorSwatchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32, // 32px below card name
    gap: 16, // 16px spacing between swatches
  },
  colorSwatch: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedSwatch: {
    borderColor: '#820AD1',
    borderWidth: 2,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
