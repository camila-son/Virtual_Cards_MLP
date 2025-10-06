import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import { TopNavigationBar } from './components/TopNavigationBar';
import { HeroSectionWithIndicators } from './components/HeroSectionWithIndicators';
import { ListRows } from './components/ListRows';
import { MarketingScreenProps } from '../../types/navigation';

export function MarketingScreen({ onBack, onNavigateToVirtualCardCreation, onNavigateToTemporaryDisclaimer }: MarketingScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;

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
        {/* Hero Image */}
        <View style={styles.heroImageContainer}>
          <Image 
            source={require('../../../assets/temporary_card.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>
        {/* Title and Subtitle */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Shop anywhere, in any currency, with a pre-paid virtual card</Text>
          <Text style={styles.subtitle}>Create multiple cards and delete them anytime. Shop like a local wherever you are.</Text>
        </View>
        {/* Temporarily hidden - keeping for future use */}
        {/* <HeroSectionWithIndicators /> */}
        <ListRows 
          onNavigateToVirtualCardCreation={onNavigateToVirtualCardCreation}
          onNavigateToTemporaryDisclaimer={onNavigateToTemporaryDisclaimer}
        />
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
    zIndex: 1001, // Higher than TopNavigation's zIndex: 1000
  },
  safeArea: {
    flex: 1,
  },
  heroImageContainer: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 8,
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 33.6,
  },
  subtitle: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 24,
  },
});