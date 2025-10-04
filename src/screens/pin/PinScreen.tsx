import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Easing,
  Keyboard,
} from 'react-native';
import { PinScreenProps } from '../../types/navigation';
import { CloseIcon } from '../../components/icons';

export function PinScreen({ onBack, onNavigateToCardDetails, title = "Enter your 4-digit PIN" }: PinScreenProps) {
  const [pin, setPin] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const slideUpAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;
  const overlaySlideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide-up animation for both bottom sheet and overlay
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlaySlideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideUpAnim, overlaySlideAnim]);

  const handlePinChange = (text: string) => {
    // Only allow numeric input and limit to 4 digits
    const numericText = text.replace(/[^0-9]/g, '').slice(0, 4);
    setPin(numericText);
    setIsError(false);
    
    // Auto-submit when 4 digits are entered
    if (numericText.length === 4) {
      // Simulate PIN validation (you can replace this with actual validation logic)
      setTimeout(() => {
        // For demo purposes, any PIN except "0000" is considered valid
        if (numericText === '0000') {
          handleError();
        } else {
          handleSuccess();
        }
      }, 200);
    }
  };

  const handleError = () => {
    setIsError(true);
    setPin('');
    
    // Shake animation
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleSuccess = () => {
    // Handle successful PIN entry - slide down then navigate to card details
    console.log('PIN entered successfully:', pin);
    
    // Wait 1 second, then slide down bottom sheet
    setTimeout(() => {
      Keyboard.dismiss();
      
      const screenHeight = Dimensions.get('window').height;
      
      Animated.parallel([
        Animated.timing(slideUpAnim, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.quad),
        }),
        Animated.timing(overlaySlideAnim, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.quad),
        }),
      ]).start(() => {
        // After slide down animation completes, navigate to card details
        onNavigateToCardDetails();
      });
    }, 1000);
  };

  const handleClose = () => {
    // Dismiss keyboard and animate out immediately
    Keyboard.dismiss();
    
    const screenHeight = Dimensions.get('window').height;
    
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: screenHeight,
        duration: 300, // Match opening animation duration
        useNativeDriver: true,
        easing: Easing.out(Easing.quad), // iOS-like easing
      }),
      Animated.timing(overlaySlideAnim, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
    ]).start(() => {
      onBack();
    });
  };

  const renderPinDots = () => {
    return (
      <Animated.View style={[styles.pinDotsContainer, { transform: [{ translateX: shakeAnim }] }]}>
        {[0, 1, 2, 3].map((index) => {
          const isFilled = pin.length > index;
          const isFocused = pin.length === index;
          
          return (
            <View
              key={index}
              style={[
                styles.pinIndicator,
                isError && styles.pinIndicatorError,
              ]}
            >
              <View
                style={[
                  styles.pinDot,
                  isFilled && styles.pinDotFilled,
                  isError && styles.pinDotError,
                ]}
              />
            </View>
          );
        })}
      </Animated.View>
    );
  };


  return (
    <View style={styles.rootContainer}>
      {/* Black Overlay */}
      <Animated.View 
        style={[
          styles.overlay,
          {
            transform: [{ translateY: overlaySlideAnim }],
          },
        ]}
      >
        <TouchableOpacity 
          style={styles.overlayTouchable}
          activeOpacity={1}
          onPress={handleClose}
        />
      </Animated.View>
      
      {/* Bottom Sheet */}
      <Animated.View 
        style={[
          styles.bottomSheet,
          {
            transform: [{ translateY: slideUpAnim }],
          },
        ]}
      >
        <View style={styles.gradientContainer}>
        <SafeAreaView style={styles.safeArea}>
          {/* Bottom Sheet Handle */}
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          
          {/* Top Navigation */}
          <View style={styles.topBar}>
            <View style={styles.navigationBar}>
              <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <View style={styles.closeIcon}>
                  <CloseIcon size={24} color="rgba(0,0,0,0.96)" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>

            {/* PIN Dots */}
            {renderPinDots()}

            {/* Hidden TextInput for native keyboard */}
            <TextInput
              style={styles.hiddenInput}
              value={pin}
              onChangeText={handlePinChange}
              keyboardType="number-pad"
              maxLength={4}
              autoFocus={true}
              secureTextEntry={false}
              caretHidden={true}
              textContentType="oneTimeCode"
            />
          </View>
        </SafeAreaView>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1005, // Higher than StandardSuccessScreen
    backgroundColor: 'transparent', // Make sure root is transparent
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
  },
  overlayTouchable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%', // Balanced height - not too tall, not too short
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  gradientContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  handleContainer: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 2,
  },
  topBar: {
    width: '100%',
  },
  navigationBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  closeButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 24,
    width: '100%',
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'left',
    marginBottom: 16,
    width: '100%',
  },
  pinDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    marginTop: 24,
  },
  hiddenInput: {
    position: 'absolute',
    left: -9999,
    opacity: 0,
    height: 0,
    width: 0,
  },
  pinIndicator: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 24, // Half of width/height to make perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    // Add subtle shadow to match Figma design
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  pinIndicatorError: {
    backgroundColor: '#FFE5E5', // Light red background for error state
  },
  pinDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.2)', // Gray dot for placeholder/focused
  },
  pinDotFilled: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.96)', // Black dot for filled
  },
  pinDotError: {
    backgroundColor: '#FF3B30',
  },
});
