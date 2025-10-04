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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TemporarySuccessScreenProps } from '../../types/navigation';
import { CloseIcon } from '../../components/icons';

export function TemporarySuccessScreen({ onNext, onNavigateToPin }: TemporarySuccessScreenProps) {
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
              transform: [{ translateY: floatAnim }]
            }]}>
              <Image
                source={require('../../../assets/temporary_card.png')}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </Animated.View>
          </View>

          <View style={styles.content}>
            {/* Success content */}
            <View style={styles.successContainer}>
              <Text style={styles.successTitle}>Your temporary virtual card is ready</Text>
              <Text style={styles.successMessage}>You can now start spending online with this card for the next 24 hours.</Text>
            </View>
          </View>

          {/* Bottom Button Bar */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.secondaryButton} onPress={onNavigateToPin}>
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
    zIndex: 1005, // Higher than TemporaryLoadingScreen
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
    width: 280,
    height: 420,
    marginLeft: -140,
    marginTop: -210,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  cardImage: {
    width: 280,
    height: 420,
  },
  successContainer: {
    position: 'absolute',
    top: '45%',
    left: 24,
    right: 24,
    marginTop: 183,
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
});

