import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Typography } from '../config/fonts';

export function NBAWidget() {
  return (
    <View style={styles.outerContainer}>
      {/* Aura effect layers for smooth blur simulation */}
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.12)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.13)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.10)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.02)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.10)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer1}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.10)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.11)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.08)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.02)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.08)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer2}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.08)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.09)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.06)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.01)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.06)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer3}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.06)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.07)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.05)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.01)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.05)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer4}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.04)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.05)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.03)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.01)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.03)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer5}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.03)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.03)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.02)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.01)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.02)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer6}
      />
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.02)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.02)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.01)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.01)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.01)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.auraLayer7}
      />
      
      {/* Gradient border container */}
      <LinearGradient
        colors={[
          'rgba(15, 10, 209, 0.4)',   // #0F0AD1 at 0%
          'rgba(233, 101, 255, 0.44)', // #E965FF at 57%
          'rgba(255, 101, 175, 0.31)', // #FF65AF at 72%
          'rgba(255, 141, 8, 0.07)',   // #FF8D08 at 92%
          'rgba(168, 55, 255, 0.30)'   // #A837FF at 100%
        ]}
        locations={[0, 0.57, 0.72, 0.92, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.container}>
          {/* Top Section */}
          <View style={styles.topSection}>
            <View style={styles.contentGroup}>
              {/* Title */}
              <Text style={styles.title}>
                Earn 4% APY
              </Text>
              
              {/* Description */}
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  Add Digital Dollars to your account and see them grow 🤑
                </Text>
              </View>
            </View>
          </View>
          
          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <View style={styles.buttonsContainer}>
              {/* Add money button */}
              <TouchableOpacity style={styles.addMoneyButton}>
                <Text style={styles.addMoneyText}>
                  Add money
                </Text>
              </TouchableOpacity>
              
              {/* Dismiss button */}
              <TouchableOpacity style={styles.dismissButton}>
                <Text style={styles.dismissText}>
                  Dismiss
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: 157,
    marginBottom: 16,
    position: 'relative',
  },
  auraLayer1: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 24,
    zIndex: -7,
  },
  auraLayer2: {
    position: 'absolute',
    top: -6,
    left: -6,
    right: -6,
    bottom: -6,
    borderRadius: 24,
    zIndex: -6,
  },
  auraLayer3: {
    position: 'absolute',
    top: -9,
    left: -9,
    right: -9,
    bottom: -9,
    borderRadius: 24,
    zIndex: -5,
  },
  auraLayer4: {
    position: 'absolute',
    top: -12,
    left: -12,
    right: -12,
    bottom: -12,
    borderRadius: 24,
    zIndex: -4,
  },
  auraLayer5: {
    position: 'absolute',
    top: -15,
    left: -15,
    right: -15,
    bottom: -15,
    borderRadius: 24,
    zIndex: -3,
  },
  auraLayer6: {
    position: 'absolute',
    top: -18,
    left: -18,
    right: -18,
    bottom: -18,
    borderRadius: 24,
    zIndex: -2,
  },
  auraLayer7: {
    position: 'absolute',
    top: -21,
    left: -21,
    right: -21,
    bottom: -21,
    borderRadius: 24,
    zIndex: -1,
  },
  gradientBorder: {
    borderRadius: 24,
    padding: 2, // This creates the border width
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 22, // Slightly smaller to account for the 2px border
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  topSection: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 0,
    flex: 1,
  },
  contentGroup: {
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    width: '100%',
  },
  title: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28.8,
    color: '#000000',
    width: '100%',
  },
  descriptionContainer: {
    width: '100%',
  },
  description: {
    fontFamily: 'Nu Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
  },
  bottomSection: {
    flexDirection: 'column',
    gap: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    height: 36,
    alignItems: 'center',
    width: '100%',
  },
  addMoneyButton: {
    flex: 1,
    backgroundColor: '#820ad1',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    paddingHorizontal: 12,
  },
  addMoneyText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15.6,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.12,
  },
  dismissButton: {
    backgroundColor: '#f5f3f6',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    paddingHorizontal: 12,
  },
  dismissText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15.6,
    color: 'rgba(0, 0, 0, 0.96)',
    textAlign: 'center',
    letterSpacing: 0.12,
  },
});