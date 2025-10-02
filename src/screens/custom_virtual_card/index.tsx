import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { CustomVirtualCardScreenProps } from '../../types/navigation';
import { CardCarousel, ColorSwatches, BottomBar } from './components';
import { CARD_DESIGNS, COLOR_SWATCHES, LAYOUT_CONSTANTS } from './constants';

export function CustomVirtualCardScreen({ onBack }: CustomVirtualCardScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const nameFadeAnim = useRef(new Animated.Value(1)).current;
  const selectionElementsFadeAnim = useRef(new Animated.Value(1)).current; // For card name and swatches
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);
  const [screenMode, setScreenMode] = useState<'selection' | 'naming'>('selection');
  const [customCardName, setCustomCardName] = useState('');
  const textInputRef = useRef<TextInput>(null);
  
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = LAYOUT_CONSTANTS.CARD_WIDTH + LAYOUT_CONSTANTS.CARD_SPACING;
  const screenCenter = screenWidth / 2;

  // Calculate correct snap positions to center each card
  const snapPositions = Array.from({ length: CARD_DESIGNS.length }, (_, index) => {
    const cardCenterInContent = LAYOUT_CONSTANTS.LEFT_MARGIN + (index * itemWidth) + (LAYOUT_CONSTANTS.CARD_WIDTH / 2);
    return cardCenterInContent - screenCenter;
  });

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

  const handleCardSelect = (index: number) => {
    if (index !== selectedDesignIndex) {
      animateNameChange(index);
      setSelectedColorIndex(index);
    }
  };

  const handleColorSwatchPress = (index: number) => {
    setSelectedColorIndex(index);
    // Map color swatch index to card design index
    const cardIndex = Math.min(index, CARD_DESIGNS.length - 1);
    
    // Trigger carousel scroll and update selected design
    setScrollToIndex(cardIndex);
    if (cardIndex !== selectedDesignIndex) {
      animateNameChange(cardIndex);
    }
    
    // Reset scrollToIndex after a short delay to allow for future scrolls
    setTimeout(() => setScrollToIndex(undefined), 100);
  };

  const handleChooseDesign = () => {
    // Fade out card name and swatches
    Animated.timing(selectionElementsFadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Switch to naming mode after fade out completes
      setScreenMode('naming');
      // Focus text input after a short delay
      setTimeout(() => {
        textInputRef.current?.focus();
      }, 100);
    });
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
    if (screenMode === 'naming') {
      // Return to selection mode and fade in elements
      setScreenMode('selection');
      setCustomCardName('');
      // Fade in card name and swatches
      Animated.timing(selectionElementsFadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide out to right animation before navigating back
      Animated.timing(slideAnim, {
        toValue: Dimensions.get('window').width,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        onBack();
      });
    }
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
          {screenMode === 'selection' ? 'Choose a design' : 'Name your card'}
        </Text>
        
        {screenMode === 'selection' ? (
          <>
            {/* Card Carousel */}
            <CardCarousel
              cardDesigns={CARD_DESIGNS}
              selectedDesignIndex={selectedDesignIndex}
              onCardSelect={handleCardSelect}
              screenWidth={screenWidth}
              scrollToIndex={scrollToIndex}
            />
            
            {/* Card name with dissolve effect positioned 20px below carousel */}
            <Animated.View style={{ opacity: selectionElementsFadeAnim }}>
              <View style={styles.cardNameContainer}>
                <Animated.Text 
                  style={[
                    styles.cardName,
                    {
                      opacity: nameFadeAnim,
                    }
                  ]}
                >
                  {CARD_DESIGNS[selectedDesignIndex]?.name}
                </Animated.Text>
              </View>
            </Animated.View>
            
            {/* Color Swatches */}
            <Animated.View style={{ opacity: selectionElementsFadeAnim }}>
              <ColorSwatches
                colorSwatches={COLOR_SWATCHES}
                selectedColorIndex={selectedColorIndex}
                onSwatchPress={handleColorSwatchPress}
              />
            </Animated.View>
          </>
        ) : (
          <TouchableWithoutFeedback onPress={() => {
            setScreenMode('selection');
            setCustomCardName('');
            // Fade in card name and swatches
            Animated.timing(selectionElementsFadeAnim, {
              toValue: 1,
              duration: 250,
              useNativeDriver: true,
            }).start();
          }}>
            <View style={styles.namingModeContainer}>
              {/* Static selected card with text input overlay */}
              <View style={styles.staticCardContainer}>
                <Image 
                  source={CARD_DESIGNS[selectedDesignIndex]?.image} 
                  style={styles.staticCardImage}
                  resizeMode="contain"
                />
                <TouchableWithoutFeedback onPress={() => {}}>
                  <TextInput
                    ref={textInputRef}
                    style={styles.cardNameInput}
                    value={customCardName}
                    onChangeText={setCustomCardName}
                    placeholder="Enter card name"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    autoFocus={true}
                    maxLength={20}
                    textAlign="center"
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        
        {/* Empty content area */}
        <View style={styles.content}>
          {/* Content will be added here */}
        </View>
        
        {/* Bottom Bar */}
        <BottomBar onChooseDesign={handleChooseDesign} />
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
  content: {
    flex: 1,
    padding: 16,
  },
  namingModeContainer: {
    flex: 1,
    width: '100%',
  },
  staticCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 68, // Position to match carousel
    position: 'relative',
  },
  staticCardImage: {
    width: LAYOUT_CONSTANTS.CARD_WIDTH,
    height: 330,
  },
  cardNameInput: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: [{ translateX: -100 }],
    width: 200,
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
});