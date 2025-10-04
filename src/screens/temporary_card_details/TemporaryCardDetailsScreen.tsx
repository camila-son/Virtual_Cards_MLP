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
} from 'react-native';
import { TemporaryCardDetailsScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { FreezeIcon, ShieldIcon, DeleteIcon, CopyIcon, MastercardLogo, CheckIcon } from '../../components/icons';
import { CountdownTimer } from './components/CountdownTimer';

export function TemporaryCardDetailsScreen({ onBack, onAnimationComplete, expiresAt }: TemporaryCardDetailsScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const toastSlideAnim = useRef(new Animated.Value(100)).current;
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          backgroundColor="#ECE9EE"
        />
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Card Display - Temporary card PNG */}
          <Image
            source={require('../../../assets/temporary_card.png')}
            style={styles.cardImage}
            resizeMode="contain"
          />

          {/* Action Row */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Freeze')}>
              <View style={styles.actionIconContainer}>
                <FreezeIcon size={24} color="rgba(0,0,0,0.96)" />
              </View>
              <Text style={styles.actionLabel}>Freeze</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Check PIN')}>
              <View style={styles.actionIconContainer}>
                <ShieldIcon size={24} color="rgba(0,0,0,0.96)" />
              </View>
              <Text style={styles.actionLabel}>Check PIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Delete')}>
              <View style={styles.actionIconContainer}>
                <DeleteIcon size={24} color="rgba(0,0,0,0.96)" />
              </View>
              <Text style={styles.actionLabel}>Delete</Text>
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
    backgroundColor: '#ECE9EE',
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
  cardImage: {
    width: 220,
    height: 330,
    alignSelf: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16,
    gap: 52,
  },
  countdownContainer: {
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  actionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e5e0e8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
  actionLabel: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    letterSpacing: 0.12,
    lineHeight: 15.6,
  },
  detailsTable: {
    marginTop: 0,
    marginHorizontal: 16,
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
    fontFamily: 'Graphik-Regular',
    lineHeight: 24,
    flex: 1,
  },
});
