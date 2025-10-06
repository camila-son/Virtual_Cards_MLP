import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import { CloseIcon, ChevronIcon } from '../../../components/icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const ANIMATION_DURATION = 300;

interface CardTypeBottomSheetProps {
  onClose: () => void;
  onSelectStandard: () => void;
  onSelectTemporary: () => void;
}

export function CardTypeBottomSheet({ onClose, onSelectStandard, onSelectTemporary }: CardTypeBottomSheetProps) {
  const slideUpAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const overlayOpacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacityAnim, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideUpAnim, overlayOpacityAnim]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: SCREEN_HEIGHT,
        duration: ANIMATION_DURATION,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacityAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  const handleSelectStandard = () => {
    // Animate out first, then navigate
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: SCREEN_HEIGHT,
        duration: ANIMATION_DURATION,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacityAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Call navigation after animation completes
      onSelectStandard();
      // Then close/unmount
      onClose();
    });
  };

  const handleSelectTemporary = () => {
    // Animate out first, then navigate
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: SCREEN_HEIGHT,
        duration: ANIMATION_DURATION,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacityAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Call navigation after animation completes
      onSelectTemporary();
      // Then close/unmount
      onClose();
    });
  };

  return (
    <View style={styles.rootContainer}>
      {/* Overlay */}
      <Animated.View 
        style={[
          styles.overlay,
          {
            opacity: overlayOpacityAnim,
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
        <SafeAreaView style={styles.safeArea}>
          {/* Top Navigation with Close Button */}
          <View style={styles.topBar}>
            <View style={styles.navigationBar}>
              <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <View style={styles.closeIcon}>
                  <CloseIcon size={24} color="rgba(0,0,0,0.96)" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Select a card type</Text>
          </View>

          {/* List Options */}
          <View style={styles.listContainer}>
            {/* Standard Option */}
            <TouchableOpacity 
              style={styles.listRow}
              onPress={handleSelectStandard}
              activeOpacity={0.7}
            >
              <View style={styles.topDivider} />
              <View style={styles.contentArea}>
                <View style={styles.textContent}>
                  <Text style={styles.optionTitle}>Standard</Text>
                  <Text style={styles.optionDescription}>
                    Ideal for subscriptions, recurring charges and day-to-day use.
                  </Text>
                </View>
                <View style={styles.chevronIcon}>
                  <ChevronIcon size={24} color="rgba(0,0,0,0.64)" />
                </View>
              </View>
              <View style={styles.bottomDivider} />
            </TouchableOpacity>

            {/* Temporary Option */}
            <TouchableOpacity 
              style={styles.listRow}
              onPress={handleSelectTemporary}
              activeOpacity={0.7}
            >
              <View style={styles.topDivider} />
              <View style={styles.contentArea}>
                <View style={styles.textContent}>
                  <Text style={styles.optionTitle}>Temporary</Text>
                  <Text style={styles.optionDescription}>
                    Available for 24 hours. After this period, payments will be denied.
                  </Text>
                </View>
                <View style={styles.chevronIcon}>
                  <ChevronIcon size={24} color="rgba(0,0,0,0.64)" />
                </View>
              </View>
              <View style={styles.bottomDivider} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
    zIndex: 1008, // Higher than PinScreen (1007)
    backgroundColor: 'transparent',
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
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    paddingBottom: 24,
  },
  safeArea: {
    width: '100%',
  },
  topBar: {
    width: '100%',
    paddingTop: 8,
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
  titleContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 28,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 33.6, // 1.2 line height
  },
  listContainer: {
    width: '100%',
  },
  listRow: {
    width: '100%',
    position: 'relative',
  },
  topDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'transparent', // Hidden as per design
  },
  contentArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 19,
    gap: 16,
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  optionTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2, // 1.3 line height
  },
  optionDescription: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 21, // 1.5 line height
  },
  chevronIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'transparent', // Hidden as per design
  },
});

