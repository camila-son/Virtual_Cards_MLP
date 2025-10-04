import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TemporaryDisclaimerScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { ClockIcon, BlockIcon, WarningIcon } from '../../components/icons';

export function TemporaryDisclaimerScreen({ onBack, onCreateTemporaryCard }: TemporaryDisclaimerScreenProps) {
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
        <View style={styles.scrollContent}>
          <TopNavigationBar onBack={handleBack} backgroundColor="#ece9ee" />

          {/* Content */}
          <View style={styles.content}>
            {/* Illustration */}
            <View style={styles.illustrationContainer}>
              <View style={styles.illustrationPlaceholder}>
                {/* Placeholder for the hourglass illustration */}
                <Text style={styles.illustrationEmoji}>⏳</Text>
              </View>
            </View>

            {/* Title */}
            <Text style={styles.title}>
              A temporary virtual card will be created
            </Text>
          </View>

          {/* Disclaimer List */}
          <View style={styles.disclaimerList}>
            <View style={styles.listContainer}>
              {/* First item */}
              <View style={styles.listItem}>
                <View style={styles.iconContainer}>
                  <ClockIcon size={20} color="rgba(0,0,0,0.64)" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.listText}>
                    This card will only be active for 24 hours
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />

              {/* Second item */}
              <View style={styles.listItem}>
                <View style={styles.iconContainer}>
                  <BlockIcon size={20} color="rgba(0,0,0,0.64)" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.listText}>
                    Once expired, all purchases made with this card will be denied
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />

              {/* Third item */}
              <View style={styles.listItem}>
                <View style={styles.iconContainer}>
                  <WarningIcon size={20} color="rgba(0,0,0,0.64)" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.listText}>
                    Do not use this card for recurring payments or subscriptions
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={onCreateTemporaryCard}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Create temporary virtual card</Text>
          </TouchableOpacity>
        </View>
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
    zIndex: 1002, // Higher than MarketingScreen's zIndex
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 12,
  },
  illustrationContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  illustrationPlaceholder: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationEmoji: {
    fontSize: 80,
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    lineHeight: 33.6,
    color: 'rgba(0,0,0,0.96)',
    width: '100%',
  },
  disclaimerList: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  listContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    shadowColor: '#e5e0e8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
  },
  listText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    lineHeight: 20.8,
    color: 'rgba(0,0,0,0.96)',
  },
  divider: {
    height: 1,
    backgroundColor: '#efefef',
    marginHorizontal: 16,
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#ece9ee',
  },
  primaryButton: {
    backgroundColor: '#820AD1',
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
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 20.8,
  },
});

