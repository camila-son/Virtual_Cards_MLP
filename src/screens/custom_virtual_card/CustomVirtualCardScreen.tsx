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
  Keyboard,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { CustomVirtualCardScreenProps } from '../../types/navigation';
import { CardCarousel, ColorSwatches, BottomBar } from './components';
import { CARD_DESIGNS, COLOR_SWATCHES, LAYOUT_CONSTANTS } from './constants';

export function CustomVirtualCardScreen({ onBack, onNavigateToLoading }: CustomVirtualCardScreenProps) {
  const insets = useSafeAreaInsets();
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const nameFadeAnim = useRef(new Animated.Value(1)).current;
  const selectionElementsFadeAnim = useRef(new Animated.Value(1)).current;
  const nonSelectedCardsFadeAnim = useRef(new Animated.Value(1)).current;
  const staticOverlayOpacityAnim = useRef(new Animated.Value(0)).current;
  const cardScaleAnim = useRef(new Animated.Value(1)).current;
  const cardPositionAnim = useRef(new Animated.Value(0)).current;
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);
  const [screenMode, setScreenMode] = useState<'selection' | 'naming'>('selection');
  const [customCardName, setCustomCardName] = useState('');
  const [savedScrollPosition, setSavedScrollPosition] = useState<number>(0);
  const [restoreScrollPosition, setRestoreScrollPosition] = useState<number | undefined>(undefined);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isCardScaledUp, setIsCardScaledUp] = useState(false);
  
  const textInputRef = useRef<TextInput>(null);
  const screenWidth = Dimensions.get('window').width;
  
  // Calculate the exact position for the static overlay to align with carousel
  // SafeAreaInset top + TopNavBar height (56px) + carousel marginTop (42px)
  const staticOverlayTop = insets.top + 56 + 42;

  const animateNameChange = (newIndex: number) => {
    // Ultra-fast transition for immediate response
    Animated.timing(nameFadeAnim, {
      toValue: 0,
      duration: 30,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDesignIndex(newIndex);
      Animated.timing(nameFadeAnim, {
        toValue: 1,
        duration: 30,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleCardSelect = (index: number) => {
    if (index !== selectedDesignIndex) {
      // Update both immediately for instant response
      setSelectedColorIndex(index);
      setSelectedDesignIndex(index);
      
      // Optional: Add a very subtle animation for polish
      nameFadeAnim.setValue(0.8);
      Animated.timing(nameFadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleColorSwatchPress = (index: number) => {
    const cardIndex = Math.min(index, CARD_DESIGNS.length - 1);
    
    // Update both immediately
    setSelectedColorIndex(index);
    setSelectedDesignIndex(cardIndex);
    
    // Scroll to the card
    setScrollToIndex(cardIndex);
    
    // Add subtle animation for polish
    nameFadeAnim.setValue(0.8);
    Animated.timing(nameFadeAnim, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
    
    setTimeout(() => setScrollToIndex(undefined), 100);
  };

  const handleScrollPositionChange = (scrollX: number) => {
    setSavedScrollPosition(scrollX);
  };

  const handleChooseDesign = () => {
    // Reset card scale and position when entering naming mode
    cardScaleAnim.setValue(1);
    cardPositionAnim.setValue(0);
    setIsCardScaledUp(false);
    
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
    setRestoreScrollPosition(savedScrollPosition);
    
    // Reset card scale and position when going back to selection
    cardScaleAnim.setValue(1);
    cardPositionAnim.setValue(0);
    setIsCardScaledUp(false);
    
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
        // Clear the text input only after the overlay has faded out
        setCustomCardName('');
        
        // Ensure static overlay is completely hidden before switching
        staticOverlayOpacityAnim.setValue(0);
        
        // Use requestAnimationFrame to ensure the opacity change is rendered
        requestAnimationFrame(() => {
          setScreenMode('selection');
        });
      }
    });
    
    setTimeout(() => setRestoreScrollPosition(undefined), 100);
  };

  const handleTextInputBlur = () => {
    // Small delay to ensure this is from a background touch, not programmatic blur
    setTimeout(() => {
      if (screenMode === 'naming' && customCardName.trim() === '') {
        handleBackToSelection();
      }
    }, 50);
  };

  const handleBackgroundPress = () => {
    if (screenMode === 'naming') {
      if (customCardName.trim() === '') {
        // Empty input + background touch → Go back to selection mode
        handleBackToSelection();
      } else {
        // Filled input + background touch → Dismiss keyboard only
        textInputRef.current?.blur();
      }
    }
  };

  const handleCreateCard = () => {
    // Navigate to loading screen with card data
    const selectedCard = CARD_DESIGNS[selectedDesignIndex];
    onNavigateToLoading(selectedCard, customCardName);
  };

  const handleBack = () => {
    if (screenMode === 'naming') {
      // If card is scaled up, animate it back down first
      if (isCardScaledUp) {
        Animated.parallel([
          Animated.timing(cardScaleAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(cardPositionAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          })
        ]).start(() => {
          setIsCardScaledUp(false);
          // After scaling animation completes, proceed with normal back transition
          handleBackToSelection();
        });
      } else {
        // Card is already at normal size, proceed directly
        handleBackToSelection();
      }
    } else {
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

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => {
      setIsKeyboardVisible(true);
      // Scale back to normal and return to original position when keyboard appears
      Animated.parallel([
        Animated.timing(cardScaleAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(cardPositionAnim, {
          toValue: 0, // Return to original position
          duration: 250,
          useNativeDriver: true,
        })
      ]).start(() => {
        setIsCardScaledUp(false);
      });
    });

    const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
      setIsKeyboardVisible(false);
      // Scale up and move down slightly when keyboard starts to disappear (only if in naming mode and has text)
      if (screenMode === 'naming' && customCardName.trim() !== '') {
        Animated.parallel([
          Animated.timing(cardScaleAnim, {
            toValue: 1.27, // 280/220 = 1.27 for width scaling
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(cardPositionAnim, {
            toValue: 30, // Move down by 30 pixels when scaled up (40 - 10)
            duration: 250,
            useNativeDriver: true,
          })
        ]).start(() => {
          setIsCardScaledUp(true);
        });
      }
    });

    return () => {
      keyboardWillShowListener?.remove();
      keyboardWillHideListener?.remove();
    };
  }, [screenMode, customCardName, cardScaleAnim]);

  return (
    <Animated.View style={[styles.rootContainer, { transform: [{ translateX: slideAnim }] }]}>
      <LinearGradient
        colors={['#F6ECFF', '#FFFFFF']}
        locations={[0.13, 0.57]}
        style={styles.gradientContainer}
      >
        <View style={styles.container}>
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
      </View>
      
      <Animated.View 
        style={[
          styles.staticOverlayContainer, 
          { 
            top: staticOverlayTop,
            opacity: staticOverlayOpacityAnim,
            pointerEvents: screenMode === 'naming' ? 'auto' : 'none'
          }
        ]}
      >
        <Animated.View style={[styles.staticCardContainer, {
          transform: [
            { scale: cardScaleAnim },
            { translateY: cardPositionAnim }
          ]
        }]}>
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
        </Animated.View>
      </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1006, // Same as card details screens, above CardManagementScreen (1005)
  },
  gradientContainer: {
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
    bottom: 100, // Leave space for BottomBar (approximately 80px + padding)
    zIndex: 1000,
  },
  staticOverlayContainer: {
    position: 'absolute',
    // top is set dynamically based on device SafeArea insets
    left: '50%',
    width: 220,
    height: 330,
    marginLeft: -110,
    zIndex: 9999,
    elevation: 20,
    backgroundColor: 'transparent',
  },
  staticCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#F6ECFF',
    borderRadius: 12,
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
    zIndex: 99999,
    elevation: 30,
  },
});