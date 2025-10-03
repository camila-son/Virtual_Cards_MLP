import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LoadingScreenProps } from '../../types/navigation';

export function LoadingScreen({ onNext, cardDesign, customCardName }: LoadingScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;

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
          <View style={styles.content}>
            {/* Loading animation will go here */}
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Creating your virtual card...</Text>
            </View>
            
            {/* Temporary next button for prototype navigation */}
            <TouchableOpacity style={styles.nextButton} onPress={onNext}>
              <Text style={styles.nextButtonText}>Next</Text>
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
    zIndex: 1003, // Higher than CustomVirtualCardScreen
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  loadingText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 20,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#8D0DE3',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nextButtonText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
