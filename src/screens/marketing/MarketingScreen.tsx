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
  TouchableWithoutFeedback,
} from 'react-native';
import { TopNavigationBar } from './components/TopNavigationBar';
import { ListRows } from './components/ListRows';
import { MarketingScreenProps } from '../../types/navigation';

// Constants
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MODAL_HEIGHT = SCREEN_HEIGHT * 0.92;
const ANIMATION_DURATION_IN = 350;
const ANIMATION_DURATION_OUT = 300;

// Colors
const COLORS = {
  backdrop: 'rgba(0, 0, 0, 0.5)',
  white: '#ffffff',
  border: '#EFEFEF',
  primary: '#820AD1',
  handleBar: 'rgba(0, 0, 0, 0.2)',
  textPrimary: 'rgba(0, 0, 0, 0.96)',
  textSecondary: 'rgba(0, 0, 0, 0.64)',
};

export function MarketingScreen({ 
  onBack, 
  onNavigateToVirtualCardCreation, 
  onNavigateToTemporaryDisclaimer 
}: MarketingScreenProps) {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [selectedOption, setSelectedOption] = useState<string>('Standard');

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION_IN,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: ANIMATION_DURATION_IN,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, backdropOpacity]);

  const handleBack = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: ANIMATION_DURATION_OUT,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: ANIMATION_DURATION_OUT,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onBack();
    });
  };

  const handleGetStarted = () => {
    if (selectedOption === 'Standard') {
      onNavigateToVirtualCardCreation();
    } else if (selectedOption === 'Temporary') {
      onNavigateToTemporaryDisclaimer();
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleBack}>
        <Animated.View 
          style={[styles.backdrop, { opacity: backdropOpacity }]} 
        />
      </TouchableWithoutFeedback>
      
      <Animated.View 
        style={[
          styles.modalContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          
          <TopNavigationBar onBack={handleBack} title="Virtual card" />
          
          <View style={styles.contentContainer}>
            <View style={styles.heroImageWrapper}>
              <View style={styles.heroImageContainer}>
                <Image 
                  source={require('../../../assets/marketing-screen/virtual_card_marketing.png')}
                  style={styles.heroImage}
                  resizeMode="cover"
                />
              </View>
            </View>
            
            <View style={styles.titleSection}>
              <Text style={styles.title}>
                Shop anywhere, in any currency, with a pre-paid virtual card
              </Text>
              <Text style={styles.subtitle}>
                Create multiple cards and delete them anytime. Shop like a local wherever you are.
              </Text>
            </View>
            
            <ListRows 
              selectedOption={selectedOption}
              onSelectOption={setSelectedOption}
            />
          </View>
          
          <View style={styles.bottomBar}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              onPress={handleGetStarted}
            >
              <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.backdrop,
    zIndex: 1000,
  },
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: MODAL_HEIGHT,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  safeArea: {
    flex: 1,
  },
  handleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: COLORS.handleBar,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
  heroImageWrapper: {
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  heroImageContainer: {
    width: '100%',
    height: 223,
    overflow: 'hidden',
    borderRadius: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 8,
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.textPrimary,
    lineHeight: 31.2,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textSecondary,
    lineHeight: 24,
    textAlign: 'center',
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: COLORS.white,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    height: 48,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 20.8,
  },
});