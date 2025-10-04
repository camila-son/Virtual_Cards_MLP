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
import { StandardCardDetailsScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { FreezeIcon, ShieldIcon, DeleteIcon, CopyIcon, MastercardLogo, CheckIcon } from '../../components/icons';

export function StandardCardDetailsScreen({ onBack, onAnimationComplete, cardDesign, customCardName }: StandardCardDetailsScreenProps) {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const toastSlideAnim = useRef(new Animated.Value(100)).current; // Start 100px below screen
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          backgroundColor="#ECE9EE"
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
          </View>

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
    zIndex: 1006, // Higher than PIN screen
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
    width: 220, // Original naming mode width
    height: 330, // Original naming mode height
    alignSelf: 'center',
    position: 'relative',
  },
  cardImage: {
    width: 220, // LAYOUT_CONSTANTS.CARD_WIDTH from naming mode
    height: 330,
  },
  cardNameText: {
    position: 'absolute',
    top: '70%', // Same position as naming mode
    left: '50%',
    transform: [{ translateX: -110 }], // Half of card width for centering
    width: 220,
    fontFamily: 'Nu Sans Medium',
    fontSize: 21,
    color: '#ffffff',
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    textAlign: 'left',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16, // Added horizontal margins
    gap: 52, // Fixed 52px gap between action buttons
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12, // Gap between icon and label
  },
  actionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow to match Figma design
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
    fontFamily: 'Nu Sans Medium', // Semibold from Figma
    fontSize: 12,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    letterSpacing: 0.12, // tracking from Figma
    lineHeight: 15.6, // 12 * 1.3
  },
  detailsTable: {
    marginTop: 40,
    marginHorizontal: 16, // Changed from 24 to 16 for wider table
    backgroundColor: '#ffffff',
    borderRadius: 24,
    // Shadow to match Figma design
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
    fontFamily: 'Graphik-Regular',
    lineHeight: 24,
    flex: 1,
  },
});
