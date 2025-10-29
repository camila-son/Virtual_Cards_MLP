import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TemporarySuccessScreenProps } from '../../types/navigation';
import { CloseIcon } from '../../components/icons';

export function TemporarySuccessScreen({ onNext, onNavigateToPin }: TemporarySuccessScreenProps) {
  const insets = useSafeAreaInsets();
  const cardTop = insets.top + 56 + 42;
  const slideDownAnim = useRef(new Animated.Value(0)).current; // Start at 0, slides down when closing
  const elementsOpacity = useRef(new Animated.Value(0)).current;
  const backgroundOpacity = useRef(new Animated.Value(1)).current; // Start visible immediately
  const buttonsSlideUp = useRef(new Animated.Value(300)).current; // Start 300px below
  const buttonsOpacity = useRef(new Animated.Value(0)).current;
  const cardScaleAnim = useRef(new Animated.Value(1.27)).current; // Start at scaled up size
  const cardTranslateYAnim = useRef(new Animated.Value(30)).current; // Start at translated position
  const cardOpacity = useRef(new Animated.Value(0)).current; // Start invisible, fade in
  const shineAnim = useRef(new Animated.Value(-150)).current; // Start off-screen left-bottom

  useEffect(() => {
    // Fade in card immediately
    Animated.timing(cardOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    // Bring in buttons immediately (no delay since video finished on previous screen)
    Animated.parallel([
      Animated.timing(buttonsSlideUp, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(buttonsOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    
    // Scale down card after buttons are in
    const cardScaleDelay = 300;
    
    Animated.parallel([
      Animated.timing(cardScaleAnim, {
        toValue: 1,
        duration: 300,
        delay: cardScaleDelay,
        useNativeDriver: true,
      }),
      Animated.timing(cardTranslateYAnim, {
        toValue: 0,
        duration: 300,
        delay: cardScaleDelay,
        useNativeDriver: true,
      }),
    ]).start();
    
    // Fade in text after card finishes scaling down
    const textDelay = 600;
    
    Animated.timing(elementsOpacity, {
      toValue: 1,
      duration: 200,
      delay: textDelay,
      useNativeDriver: true,
    }).start();
    
    // Shine animation - moves from bottom-left to top-right (plays once)
    shineAnim.setValue(-200); // Start 50px lower
    Animated.timing(shineAnim, {
      toValue: 250, // End 50px higher
      duration: 400,
      delay: 600, // Start after card finishes scaling down
      useNativeDriver: true,
    }).start();
  }, []);

  const handleClose = () => {
    // Slide down animation before closing
    Animated.timing(slideDownAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onNext();
    });
  };

  return (
    <Animated.View style={[styles.rootContainer, { opacity: backgroundOpacity }]}>
      <View style={styles.whiteBackground}>
        <Animated.View 
          style={[
            styles.container,
            {
              transform: [{ translateY: slideDownAnim }],
            },
          ]}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* Custom Top Navigation with Close Icon */}
            <Animated.View style={{ opacity: elementsOpacity }}>
              <View style={styles.topBar}>
                <View style={styles.navigationBar}>
                  <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <View style={styles.closeIcon}>
                      <CloseIcon size={24} color="rgba(0,0,0,0.96)" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>

            {/* Card Display - positioned to match standard flow */}
            <View style={[styles.cardOverlayContainer, { top: cardTop }]}>
              <Animated.View style={[styles.cardContainer, {
                opacity: cardOpacity,
                transform: [
                  { scale: cardScaleAnim },
                  { translateY: cardTranslateYAnim }
                ]
              }]}>
                <Image
                  source={require('../../../assets/temporary_card.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                
                {/* Shine effect */}
                <Animated.View
                  style={[
                    styles.shineContainer,
                    {
                      transform: [
                        { translateX: shineAnim },
                        { translateY: Animated.multiply(shineAnim, -0.5) }, // Move up-right diagonally at -65 degrees
                      ],
                    },
                  ]}
                >
                  <LinearGradient
                    colors={[
                      'rgba(255,255,255,0)',
                      'rgba(255,255,255,0.05)',
                      'rgba(255,255,255,0.15)',
                      'rgba(255,255,255,0.25)',
                      'rgba(255,255,255,0.3)',
                      'rgba(255,255,255,0.3)',
                      'rgba(255,255,255,0.25)',
                      'rgba(255,255,255,0.15)',
                      'rgba(255,255,255,0.05)',
                      'rgba(255,255,255,0)',
                    ]}
                    locations={[0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.shine}
                  />
                </Animated.View>
              </Animated.View>
            </View>

            {/* Success content - positioned below card */}
            <Animated.View style={[styles.successContainer, { top: cardTop + 330 + 48, opacity: elementsOpacity }]}>
              <Text style={styles.successTitle}>Your temporary virtual card is ready</Text>
              <Text style={styles.successMessage}>You can now spend online with this card for the next 24 hours</Text>
            </Animated.View>
            
            <View style={styles.content} />
          </SafeAreaView>
          
          {/* Bottom Button Bar - slides up from bottom */}
          <Animated.View style={[styles.bottomBar, { 
            transform: [{ translateY: buttonsSlideUp }],
            opacity: buttonsOpacity,
            paddingBottom: insets.bottom + 16,
          }]}>
            <TouchableOpacity style={styles.secondaryButton} onPress={onNavigateToPin}>
              <Text style={styles.secondaryButtonText}>View card details</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
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
    zIndex: 1008, // Higher than CardManagementScreen (1005) to overlay when shown
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
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
    opacity: 0.64,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardOverlayContainer: {
    position: 'absolute',
    // top is set dynamically based on device SafeArea insets
    left: '50%',
    width: 220,
    height: 330,
    marginLeft: -110,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    width: 220,
    height: 330,
  },
  successContainer: {
    position: 'absolute',
    // top is set dynamically based on card position
    left: 24, // 24px from left edge
    right: 24, // 24px from right edge
    alignItems: 'center',
  },
  successTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    marginBottom: 16,
  },
  successMessage: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 16,
    color: 'rgba(0,0,0,0.7)',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: 'transparent',
  },
  secondaryButton: {
    backgroundColor: '#efefef',
    height: 48,
    borderRadius: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  secondaryButtonText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    letterSpacing: -0.16,
    lineHeight: 20.8,
  },
  shineContainer: {
    position: 'absolute',
    top: -330,
    left: -220,
    width: 660,
    height: 990,
    overflow: 'hidden',
  },
  shine: {
    position: 'absolute',
    left: '50%',
    top: -405,
    width: 135,
    height: 1800,
    marginLeft: -67.5,
    transform: [{ rotate: '-65deg' }],
  },
});

