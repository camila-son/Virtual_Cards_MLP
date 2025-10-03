import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  TextInput,
  Easing,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StandardSuccessScreenProps } from '../../types/navigation';
import { CloseIcon, AppleWalletIcon } from '../../components/icons';

export function StandardSuccessScreen({ onNext, cardDesign, customCardName }: StandardSuccessScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide-in animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Floating animation - continuous cycle
    const floatingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -8, // Float up 8px
          duration: 1333,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 8, // Float down 8px  
          duration: 2667,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: -8, // Float back up to start position
          duration: 1333,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1, resetBeforeIteration: false }
    );
    floatingAnimation.start();

    return () => {
      floatingAnimation.stop();
    };
  }, [slideAnim, floatAnim]);

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
          {/* Custom Top Navigation with Close Icon */}
          <View style={styles.topBar}>
            <View style={styles.navigationBar}>
              <TouchableOpacity style={styles.closeButton} onPress={onNext}>
                <View style={styles.closeIcon}>
                  <CloseIcon size={24} color="rgba(0,0,0,0.96)" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card Display - positioned relative to full screen */}
          <View style={styles.cardOverlayContainer}>
            <Animated.View style={[styles.cardContainer, {
              transform: [
                { scale: 1.27 }, 
                { translateY: 30 }, 
                { translateY: floatAnim }
              ]
            }]}>
              <Image
                source={cardDesign.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <Text style={styles.cardNameText}>{customCardName}</Text>
            </Animated.View>
          </View>

          <View style={styles.content}>
            {/* Success content */}
            <View style={styles.successContainer}>
              <Text style={styles.successTitle}>Your virtual card is ready</Text>
              <Text style={styles.successMessage}>You can now start spending online or in stores with digital wallets.</Text>
            </View>
          </View>

          {/* Bottom Button Bar */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.primaryButton} onPress={() => console.log('Add to Apple Wallet')}>
              <AppleWalletIcon size={24} color="#ffffff" />
              <Text style={styles.primaryButtonText}>Add to Apple Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => console.log('View card details')}>
              <Text style={styles.secondaryButtonText}>View card details</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
    zIndex: 1004, // Higher than LoadingScreen
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardOverlayContainer: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: 220,
    height: 330,
    marginLeft: -110,
    marginTop: -215, // Moved up 50px: -165 - 50 = -215
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  cardImage: {
    width: 220, // Back to original size since container is scaled
    height: 330, // Back to original size since container is scaled
  },
  cardNameText: {
    position: 'absolute',
    top: '70%', // Back to original positioning since container is scaled
    left: '50%',
    transform: [{ translateX: -110 }],
    width: 220,
    fontFamily: 'Nu Sans Medium',
    fontSize: 21,
    color: '#ffffff',
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    textAlign: 'left',
  },
  successContainer: {
    position: 'absolute',
    top: '45%',
    left: 24, // 24px from left edge
    right: 24, // 24px from right edge
    marginTop: 203, // Moved down 30px more: 173 + 30 = 203
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#000000',
    height: 48,
    borderRadius: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 8,
  },
  primaryButtonText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: -0.16,
    lineHeight: 20.8, // 16 * 1.3
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
    lineHeight: 20.8, // 16 * 1.3
  },
});
