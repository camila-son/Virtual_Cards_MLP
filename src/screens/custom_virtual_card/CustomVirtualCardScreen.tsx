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
import { LinearGradient } from 'expo-linear-gradient';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { CustomVirtualCardScreenProps } from '../../types/navigation';
import { CardCarousel, ColorSwatches, BottomBar } from './components';
import { CARD_DESIGNS, COLOR_SWATCHES, LAYOUT_CONSTANTS } from './constants';

export function CustomVirtualCardScreen({ onBack }: CustomVirtualCardScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const nameFadeAnim = useRef(new Animated.Value(1)).current;
  const selectionElementsFadeAnim = useRef(new Animated.Value(1)).current;
  const nonSelectedCardsFadeAnim = useRef(new Animated.Value(1)).current;
  const staticOverlayOpacityAnim = useRef(new Animated.Value(0)).current;
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);
  const [screenMode, setScreenMode] = useState<'selection' | 'naming'>('selection');
  const [customCardName, setCustomCardName] = useState('');
  const [savedScrollPosition, setSavedScrollPosition] = useState<number>(0);
  const [restoreScrollPosition, setRestoreScrollPosition] = useState<number | undefined>(undefined);
  
  const textInputRef = useRef<TextInput>(null);
  const screenWidth = Dimensions.get('window').width;

  const animateNameChange = (newIndex: number) => {
    Animated.timing(nameFadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDesignIndex(newIndex);
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
    const cardIndex = Math.min(index, CARD_DESIGNS.length - 1);
    
    // Update swatch selection first
    setSelectedColorIndex(index);
    
    setScrollToIndex(cardIndex);
    if (cardIndex !== selectedDesignIndex) {
      animateNameChange(cardIndex);
    }
    
    setTimeout(() => setScrollToIndex(undefined), 100);
  };

  const handleScrollPositionChange = (scrollX: number) => {
    setSavedScrollPosition(scrollX);
  };

  const handleChooseDesign = () => {
    console.log('Transitioning to naming mode');
    
    // Transition to Naming: Non-selected cards fade out, selected card remains visible
    Animated.parallel([
      Animated.timing(nonSelectedCardsFadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(selectionElementsFadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(staticOverlayOpacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start(() => {
      setScreenMode('naming');
      setTimeout(() => {
        textInputRef.current?.focus();
      }, 100);
    });
  };

  const handleBackToSelection = () => {
    console.log('🚀 handleBackToSelection called - starting transition');
    setCustomCardName('');
    setRestoreScrollPosition(savedScrollPosition);
    
    // Animate back to selection mode FIRST
    Animated.parallel([
      Animated.timing(nonSelectedCardsFadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(selectionElementsFadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(staticOverlayOpacityAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      })
    ]).start(({ finished }) => {
      if (finished) {
        console.log('🚀 Animations completed, preparing to switch mode');
        
        // Ensure static overlay is completely hidden before switching
        staticOverlayOpacityAnim.setValue(0);
        
        // Use requestAnimationFrame to ensure the opacity change is rendered
        requestAnimationFrame(() => {
          console.log('🚀 Switching to selection mode after RAF');
          setScreenMode('selection');
        });
      }
    });
    
    setTimeout(() => setRestoreScrollPosition(undefined), 100);
  };

  const handleTextInputBlur = () => {
    console.log('🎯 TextInput onBlur called');
    // Small delay to ensure this is from a background touch, not programmatic blur
    setTimeout(() => {
      if (screenMode === 'naming' && customCardName.trim() === '') {
        console.log('🎯 TextInput lost focus with empty input → Going back to selection mode');
        handleBackToSelection();
      }
    }, 50);
  };

  const handleBackgroundPress = () => {
    console.log('🔥 handleBackgroundPress called, screenMode:', screenMode);
    console.log('🔥 This should NOT fire when clicking back button!');
    console.log('🔥 customCardName:', `"${customCardName}"`);
    console.log('🔥 customCardName.trim():', `"${customCardName.trim()}"`);
    console.log('🔥 isEmpty:', customCardName.trim() === '');
    
    if (screenMode === 'naming') {
      if (customCardName.trim() === '') {
        console.log('🔥 Empty input + background touch → Going back to selection mode');
        handleBackToSelection();
      } else {
        console.log('🔥 Filled input + background touch → Dismissing keyboard only');
        textInputRef.current?.blur();
      }
    }
  };

  const handleCreateCard = () => {
    console.log('Creating virtual card with name:', customCardName);
    onBack();
  };

  const handleBack = () => {
    console.log('🔙 handleBack called, screenMode:', screenMode);
    if (screenMode === 'naming') {
      console.log('🔙 Back button pressed in naming mode → Going back to selection mode');
      handleBackToSelection();
    } else {
      console.log('🔙 Back button pressed in selection mode → Exiting screen');
      Animated.timing(slideAnim, {
        toValue: Dimensions.get('window').width,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        onBack();
      });
    }
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <LinearGradient
      colors={['#F6ECFF', '#FFFFFF']}
      locations={[0.13, 0.57]}
      style={styles.rootContainer}
    >
      <Animated.View 
        style={[
          styles.container,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <SafeAreaView style={styles.safeArea}>
          <TopNavigationBar 
            onBack={handleBack} 
            title={screenMode === 'selection' ? 'Choose a design' : 'Name your card'}
          />
          
          {/* Always render carousel - control with opacity instead of conditional rendering */}
          <CardCarousel
            cardDesigns={CARD_DESIGNS}
            selectedDesignIndex={selectedDesignIndex}
            onCardSelect={handleCardSelect}
            screenWidth={screenWidth}
            scrollToIndex={scrollToIndex}
            onScrollPositionChange={handleScrollPositionChange}
            restoreScrollPosition={restoreScrollPosition}
            screenMode={screenMode}
            nonSelectedCardsOpacity={nonSelectedCardsFadeAnim}
          />
          
          {/* Always render selection elements - control with opacity */}
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
            
            <ColorSwatches
              colorSwatches={COLOR_SWATCHES}
              selectedColorIndex={selectedColorIndex}
              onSwatchPress={handleColorSwatchPress}
            />
          </Animated.View>
          
          <View style={styles.content}>
          </View>
          
          <BottomBar 
            onChooseDesign={handleChooseDesign} 
            onCreateCard={handleCreateCard}
            screenMode={screenMode}
          />
          
          {/* TouchableWithoutFeedback overlay only for naming mode */}
          {screenMode === 'naming' && (
            <TouchableWithoutFeedback onPress={handleBackgroundPress}>
              <View style={styles.backgroundTouchArea} />
            </TouchableWithoutFeedback>
          )}
        </SafeAreaView>
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.staticOverlayContainer, 
          { 
            opacity: staticOverlayOpacityAnim,
            pointerEvents: screenMode === 'naming' ? 'auto' : 'none'
          }
        ]}
      >
        <View style={styles.staticCardContainer}>
          <Image 
            source={CARD_DESIGNS[selectedDesignIndex]?.image} 
            style={styles.staticCardImage}
            resizeMode="contain"
          />
          <TextInput
            ref={textInputRef}
            style={styles.cardNameInput}
            value={customCardName}
            onChangeText={setCustomCardName}
            onBlur={handleTextInputBlur}
            placeholder="Enter card name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoFocus={screenMode === 'naming'}
            maxLength={20}
            textAlign='left'
          />
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1002,
  },
  contentWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
  },
  cardNameContainer: {
    alignItems: 'center',
    marginTop: 20,
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
  backgroundTouchArea: {
    position: 'absolute',
    top: 100, // Increased to account for SafeAreaView + TopNavigationBar
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  staticOverlayContainer: {
    position: 'absolute',
    top: 160,
    left: '50%',
    width: 220,
    height: 330,
    marginLeft: -110,
    zIndex: 9999,
    elevation: 20,
  },
  staticCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
    transform: [{ translateX: -110 }],
    width: 220,
    fontFamily: 'Nu Sans Medium',
    fontSize: 21,
    color: '#ffffff',
    backgroundColor: 'transparent',
    borderRadius: 0,
    paddingHorizontal: 18,
    paddingVertical: 0,
    margin: 0,
    marginLeft: -2,
    borderWidth: 0,
    textAlign: 'left',
    includeFontPadding: false,
    selectionColor: '#ffffff',
    zIndex: 99999,
    elevation: 30,
  },
});