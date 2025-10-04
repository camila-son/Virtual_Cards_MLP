import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
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
        <HeroSectionWithIndicators />
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
});