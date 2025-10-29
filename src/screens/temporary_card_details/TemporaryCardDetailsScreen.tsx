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
  ScrollView,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { TemporaryCardDetailsScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { FreezeIcon, UnfreezeIcon, CopyIcon, MastercardLogo, CheckIcon } from '../../components/icons';
import { CountdownTimer } from './components/CountdownTimer';
import { useCards } from '../../contexts/CardsContext';

export function TemporaryCardDetailsScreen({ onBack, onAnimationComplete, expiresAt, cardId }: TemporaryCardDetailsScreenProps) {
  const { cards, updateCardFrozenState } = useCards();
  const card = cards.find(c => c.id === cardId);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const toastSlideAnim = useRef(new Animated.Value(100)).current;
  const [showToast, setShowToast] = useState(false);
  const isFrozen = card?.isFrozen || false;
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleFrozen = () => {
    updateCardFrozenState(cardId, !isFrozen);
  };

  // Calculate initial remaining seconds based on expiration time
  const calculateRemainingSeconds = () => {
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    return Math.max(0, Math.floor(diff / 1000));
  };

  useEffect(() => {
    // Slide-in animation from right
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Call callback when animation completes
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [slideAnim, onAnimationComplete]);

  const handleBack = () => {
    // Slide-out animation to the right before navigating
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onBack();
    });
  };

  const showToastMessage = () => {
    // Clear any existing timeout
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setShowToast(true);
    
    // Slide up animation
    Animated.timing(toastSlideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto-dismiss after 5 seconds
    toastTimeoutRef.current = setTimeout(() => {
      // Slide down animation
      Animated.timing(toastSlideAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowToast(false);
      });
    }, 5000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

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
        <TopNavigationBar 
          onBack={handleBack}
          backgroundColor="#FFFFFF"
        />
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Card Display - Temporary card PNG */}
          <View style={styles.cardContainer}>
            <Image
              source={require('../../../assets/temporary_card.png')}
              style={styles.cardImage}
              resizeMode="contain"
            />
            
            {/* Frost Overlay when frozen */}
            {isFrozen && (
              <View style={styles.frostOverlay}>
                <BlurView intensity={10} style={styles.blurLayer} />
                <Image
                  source={require('../../../assets/frost.png')}
                  style={styles.frostImage}
                  resizeMode="cover"
                />
              </View>
            )}
          </View>

          {/* Freeze Button */}
          <View style={styles.freezeButtonContainer}>
            <TouchableOpacity style={styles.freezeButton} onPress={toggleFrozen}>
              {isFrozen ? (
                <UnfreezeIcon size={20} color="rgba(0,0,0,0.96)" />
              ) : (
                <FreezeIcon size={24} color="rgba(0,0,0,0.96)" />
              )}
              <Text style={styles.freezeButtonText}>{isFrozen ? 'Unfreeze' : 'Freeze'}</Text>
            </TouchableOpacity>
          </View>

          {/* Countdown Timer */}
          <View style={styles.countdownContainer}>
            <CountdownTimer initialSeconds={calculateRemainingSeconds()} />
          </View>

          {/* Card Details Table */}
          <View style={styles.detailsTable}>
            {/* Cardholder name row */}
            <View style={styles.tableRow}>
              <View style={styles.rowContent}>
                <Text style={styles.labelText}>Cardholder name</Text>
                <Text style={styles.valueText}>Gabriela M Lima</Text>
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={showToastMessage}>
                <View style={styles.copyIconContainer}>
                  <CopyIcon size={16} color="rgba(0,0,0,0.64)" />
                </View>
              </TouchableOpacity>
            </View>
            
            {/* Divider */}
            <View style={styles.divider} />
            
            {/* Card number row */}
            <View style={styles.tableRow}>
              <View style={styles.rowContent}>
                <Text style={styles.labelText}>Card number</Text>
                <Text style={styles.valueText}>1234 5678 9101 1123</Text>
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={showToastMessage}>
                <View style={styles.copyIconContainer}>
                  <CopyIcon size={16} color="rgba(0,0,0,0.64)" />
                </View>
              </TouchableOpacity>
            </View>
            
            {/* Divider */}
            <View style={styles.divider} />
            
            {/* CVC row */}
            <View style={styles.tableRow}>
              <View style={styles.rowContent}>
                <Text style={styles.labelText}>CVC</Text>
                <Text style={styles.valueText}>284</Text>
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={showToastMessage}>
                <View style={styles.copyIconContainer}>
                  <CopyIcon size={16} color="rgba(0,0,0,0.64)" />
                </View>
              </TouchableOpacity>
            </View>
            
            {/* Divider */}
            <View style={styles.divider} />
            
            {/* Mastercard row */}
            <View style={styles.tableRow}>
              <View style={styles.rowContent}>
                <Text style={styles.labelText}>Mastercard</Text>
                <Text style={styles.valueText}>Pre-paid</Text>
              </View>
              <View style={styles.mastercardLogo}>
                <MastercardLogo width={40} height={25} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      
      {/* Toast Message */}
      {showToast && (
        <Animated.View 
          style={[
            styles.toastContainer,
            {
              transform: [{ translateY: toastSlideAnim }],
            },
          ]}
        >
          <View style={styles.toast}>
            <View style={styles.toastContent}>
              <View style={styles.checkIconContainer}>
                <CheckIcon size={16} color="#ffffff" />
              </View>
              <Text style={styles.toastText}>Copied to clipboard</Text>
            </View>
          </View>
        </Animated.View>
      )}
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
    backgroundColor: '#FFFFFF',
    zIndex: 1006,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 40,
  },
  cardContainer: {
    width: 240,
    height: 360,
    alignSelf: 'center',
    position: 'relative',
  },
  cardImage: {
    width: 240,
    height: 360,
  },
  freezeButtonContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  freezeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(31, 0, 47, 0.08)',
    borderRadius: 64,
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 8,
    alignSelf: 'center',
    shadowColor: '#1F002F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 0,
    elevation: 1,
  },
  freezeButtonText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 20.8, // 16 * 1.3
    textAlign: 'center',
  },
  countdownContainer: {
    marginTop: 24,
    marginBottom: 24,
    marginHorizontal: 16,
  },
  detailsTable: {
    marginTop: 0,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(31, 0, 47, 0.08)',
    shadowColor: '#1F002F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 0,
    elevation: 1,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 64,
  },
  rowContent: {
    flex: 1,
    gap: 4,
  },
  labelText: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
    lineHeight: 15.6,
  },
  valueText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f3f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#efefef',
    marginHorizontal: 16,
  },
  doubleRow: {
    flexDirection: 'row',
    minHeight: 64,
  },
  halfRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#efefef',
    alignSelf: 'center',
    height: 48,
  },
  mastercardLogo: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Toast styles
  toastContainer: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    zIndex: 9999,
  },
  toast: {
    backgroundColor: '#111111',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  checkIconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Nu Sans Regular',
    lineHeight: 24,
    flex: 1,
  },
  // Frost overlay styles
  frostOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 240,
    height: 360,
    overflow: 'hidden',
    borderRadius: 16,
  },
  blurLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  frostImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
    mixBlendMode: 'screen' as any,
  },
});
