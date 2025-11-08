import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Keyboard } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { ArrowRightIcon } from '../../../components/icons';
import { BottomBarProps } from '../types';

export function BottomBar({ onChooseDesign, onCreateCard, screenMode = 'selection', onVideoFinish }: BottomBarProps) {
  const isNamingMode = screenMode === 'naming';
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<Video>(null);
  const slideDownAnim = useRef(new Animated.Value(0)).current;

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
      
      // Dismiss keyboard first to trigger card scale-up animation
      Keyboard.dismiss();
      
      // Wait for keyboard dismiss animation + card scale animation to complete (250ms + small buffer)
      setTimeout(async () => {
        await videoRef.current?.playAsync();
      }, 300);
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      // Notify parent that video finished so it can hide the naming mode card
      onVideoFinish?.();
      
      // Video finished, start sliding button down
      Animated.timing(slideDownAnim, {
        toValue: 200, // Slide down 200px
        duration: 300,
        useNativeDriver: true,
      }).start();
      
      // Navigate immediately so success screen can start fading in while button slides out
      setTimeout(() => {
      }, 100); // Small delay to let slide animation start
    }
  };

  if (isNamingMode) {
    return (
      <View style={styles.bottomBarContainer}>
        {/* Just the video - paused on first frame, plays on press */}
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
              source={require('../../../../assets/animated-button/standard-button.mp4')}
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
    );
  }

  // Selection mode - circular button with chevron
  return (
    <View style={styles.bottomBar}>
      <View style={styles.circularButtonContainer}>
        <TouchableOpacity style={styles.circularButton} onPress={onChooseDesign}>
          <ArrowRightIcon size={16} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  bottomBarContainer: {
    position: 'relative',
    backgroundColor: 'transparent',
    minHeight: 80,
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
  circularButtonContainer: {
    alignItems: 'flex-end',
  },
  circularButton: {
    backgroundColor: '#820AD1',
    width: 48,
    height: 48,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

