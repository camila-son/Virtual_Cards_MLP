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
import { BlurView } from 'expo-blur';
import { StandardCardDetailsScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { FreezeIcon, UnfreezeIcon, CopyIcon, MastercardLogo, CheckIcon, EditIcon, DeleteIcon } from '../../components/icons';
import { useCards } from '../../contexts/CardsContext';

export function StandardCardDetailsScreen({ onBack, onAnimationComplete, cardDesign, customCardName, cardId }: StandardCardDetailsScreenProps) {
  const { cards, updateCardFrozenState } = useCards();
  const card = cards.find(c => c.id === cardId);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const toastSlideAnim = useRef(new Animated.Value(100)).current; // Start 100px below screen
  const [showToast, setShowToast] = useState(false);
  const isFrozen = card?.isFrozen || false;
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleFrozen = () => {
    updateCardFrozenState(cardId, !isFrozen);
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
      toValue: 0, // Final position: 24px from bottom
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto-dismiss after 5 seconds
    toastTimeoutRef.current = setTimeout(() => {
      // Slide down animation
      Animated.timing(toastSlideAnim, {
        toValue: 100, // Slide back down
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
          {/* Card Display - Original size like in naming mode */}
          <View style={styles.cardContainer}>
            <Image
              source={cardDesign.image}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <Text style={styles.cardNameText}>{customCardName}</Text>
            
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
            
            {/* Double row: Expires on / CVC */}
            <View style={styles.doubleRow}>
              <View style={styles.halfRowContainer}>
                <View style={styles.rowContent}>
                  <Text style={styles.labelText}>Expires on</Text>
                  <Text style={styles.valueText}>10/35</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={showToastMessage}>
                  <View style={styles.copyIconContainer}>
                    <CopyIcon size={16} color="rgba(0,0,0,0.64)" />
                  </View>
                </TouchableOpacity>
              </View>
              
              <View style={styles.verticalDivider} />
              
              <View style={styles.halfRowContainer}>
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

          {/* Card Settings Section */}
          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Card settings</Text>
            <View style={styles.settingsCard}>
              {/* Edit card name row */}
              <TouchableOpacity style={styles.settingsRow} onPress={() => {}}>
                <View style={styles.settingsIconContainer}>
                  <EditIcon size={16} color="rgba(0,0,0,0.64)" />
                </View>
                <Text style={styles.settingsText}>Edit card name</Text>
              </TouchableOpacity>
              
              {/* Divider */}
              <View style={styles.settingsDivider} />
              
              {/* Delete card row */}
              <TouchableOpacity style={styles.settingsRow} onPress={() => {}}>
                <View style={styles.settingsIconContainer}>
                  <DeleteIcon size={16} color="#D01D1C" />
                </View>
                <Text style={styles.settingsText}>Delete card</Text>
              </TouchableOpacity>
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
    zIndex: 1010, // Higher than success screens (1008) and PIN (1009)
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8, // Tight spacing from navigation
    paddingBottom: 40, // Bottom padding for scroll content
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 360,
    alignSelf: 'center',
    position: 'relative',
  },
  cardImage: {
    width: 240,
    height: 360,
  },
  cardNameText: {
    position: 'absolute',
    top: '70%', // Same position as naming mode
    left: '50%',
    transform: [{ translateX: -120 }], // Half of card width for centering
    width: 240,
    fontFamily: 'Nu Sans Medium',
    fontSize: 21,
    color: '#ffffff',
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    textAlign: 'left',
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
  detailsTable: {
    marginTop: 24,
    marginHorizontal: 16, // Changed from 24 to 16 for wider table
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(31, 0, 47, 0.08)',
    // Shadow to match Figma design
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
    lineHeight: 15.6, // 12 * 1.3
  },
  valueText: {
    fontFamily: 'Nu Sans Medium', // Semibold from Figma
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2, // 14 * 1.3
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
    backgroundColor: '#f5f3f6', // Light purple background from Figma
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
  logoPlaceholder: {
    width: 40,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
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
    backgroundColor: '#111111', // Dark background from Figma
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
  // Card Settings styles
  settingsSection: {
    marginTop: 24,
    marginHorizontal: 16,
    gap: 8,
  },
  sectionTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: -0.14,
    lineHeight: 18.2, // 14 * 1.3
    paddingHorizontal: 4,
    paddingTop: 8,
    paddingBottom: 8,
  },
  settingsCard: {
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
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    gap: 12,
  },
  settingsIconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsText: {
    flex: 1,
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2, // 14 * 1.3
  },
  settingsDivider: {
    height: 1,
    backgroundColor: '#efefef',
    marginHorizontal: 16,
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
