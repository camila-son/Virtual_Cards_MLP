import React, { useEffect, useRef, useState } from 'react';
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
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { TemporaryDisclaimerScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { ClockIcon, BlockIcon, WarningIcon } from '../../components/icons';
import { useCards } from '../../contexts/CardsContext';

export function TemporaryDisclaimerScreen({ onBack, onCreateTemporaryCard }: TemporaryDisclaimerScreenProps) {
  const { addCard } = useCards();
  const cardAddedRef = useRef(false);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<Video>(null);
  const slideDownAnim = useRef(new Animated.Value(0)).current;

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

  const handleVideoLoad = async () => {
    // Load video and show first frame
    if (videoRef.current && !isVideoReady) {
      await videoRef.current.setPositionAsync(0);
      await videoRef.current.playAsync();
      setTimeout(async () => {
        await videoRef.current?.pauseAsync();
        setIsVideoReady(true);
      }, 100);
    }
  };

  const handleVideoPress = async () => {
    if (!isAnimating && videoRef.current) {
      setIsAnimating(true);
      
      // Play video immediately
      await videoRef.current.playAsync();
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      // Video finished, create card and start sliding button down
      
      // Add temporary card only once
      if (!cardAddedRef.current) {
        cardAddedRef.current = true;
        
        // Generate a random 4-digit number for the card
        const lastFourDigits = Math.floor(1000 + Math.random() * 9000).toString();
        
        // Set expiration to 24 hours from now
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);

        // Add the temporary card to the context
        addCard({
          name: 'Temporary Card',
          lastFourDigits,
          cardType: 'Pre-paid',
          cardDesign: {
            id: 999, // Special ID for temporary cards
            name: 'Temporary',
            image: require('../../../assets/temporary_card.png'),
          },
          isTemporary: true,
          expiresAt,
        });
      }
      
      // Start sliding button down
      Animated.timing(slideDownAnim, {
        toValue: 200,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
      // Navigate to success screen
      setTimeout(() => {
        onCreateTemporaryCard();
      }, 100);
    }
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
          <TopNavigationBar onBack={handleBack} backgroundColor="#FFFFFF" />

          {/* Content */}
          <View style={styles.content}>
            {/* Illustration */}
            <View style={styles.illustrationContainer}>
              <View style={styles.illustrationPlaceholder}>
                <Image
                  source={require('../../../assets/hourglass.png')}
                  style={styles.illustrationImage}
                  resizeMode="contain"
                />
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

        {/* Bottom Bar with Video Button */}
        <View style={styles.bottomBar}>
          <Animated.View
            style={[
              styles.videoLayer,
              {
                transform: [{ translateY: slideDownAnim }]
              }
            ]}
          >
            <TouchableOpacity 
              style={styles.videoButton}
              onPress={handleVideoPress}
              activeOpacity={1}
              disabled={isAnimating}
            >
              <View style={styles.videoContainer}>
                <Video
                  ref={videoRef}
                  source={require('../../../assets/animated-button/standard-button.mp4')}
                  style={styles.video}
                  resizeMode={ResizeMode.COVER}
                  shouldPlay={false}
                  isLooping={false}
                  onLoad={handleVideoLoad}
                  onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
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
    backgroundColor: '#FFFFFF',
    zIndex: 1006, // Same as card details screens, above CardManagementScreen (1005)
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
    gap: 28,
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
  illustrationImage: {
    width: 150,
    height: 150,
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
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
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
    position: 'relative',
    backgroundColor: 'transparent',
    minHeight: 80,
    paddingHorizontal: 0,
  },
  videoLayer: {
    paddingTop: 4,
    paddingBottom: 16,
    width: '100%',
  },
  videoButton: {
    width: '100%',
  },
  videoContainer: {
    width: '100%',
    overflow: 'visible',
    aspectRatio: 7.75,
    backgroundColor: 'transparent',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

