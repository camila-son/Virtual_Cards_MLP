import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function EarnAPYWidget() {
  return (
    <View style={styles.container}>
      {/* Main Widget Container */}
      <View style={styles.widgetContainer}>
        {/* White background overlay to maintain card appearance */}
        <View style={styles.backgroundOverlay}>
          {/* Content - 20pt from left, 40pt clearance from close button */}
          <View style={styles.content}>
            {/* Title */}
            <Text style={styles.title}>
              Earn 4% APY
            </Text>
            
            {/* Description text */}
            <Text style={styles.description}>
              Add Digital Dollars to your account and see them grow 🤑
            </Text>
          </View>
          
          {/* Close button - touches top and right edges */}
          <TouchableOpacity style={styles.closeButton}>
            <View style={styles.closeButtonInner}>
              <Text style={styles.closeIcon}>×</Text>
            </View>
          </TouchableOpacity>
          
          {/* Button - 12pt from sides */}
          <TouchableOpacity style={styles.addMoneyButton}>
            <Text style={styles.addMoneyText}>
              Add money
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 157,
    marginBottom: 16,
  },
  widgetContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 24,
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'rgba(15, 10, 209, 0.4)',
    // Note: React Native doesn't support complex gradients like CSS, 
    // so we'll use a solid border for now
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    backgroundColor: '#fff',
    borderRadius: 23,
  },
  content: {
    position: 'absolute',
    flexDirection: 'column',
    gap: 4,
    left: 20,
    top: 20,
    right: 52,
  },
  title: {
    width: '100%',
    color: '#000',
    lineHeight: 28.8, // 1.2 * 24
    fontFamily: 'System', // Fallback since NuSans might not be available
    fontSize: 24,
    fontWeight: '500',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.64)',
    lineHeight: 18.2, // 1.3 * 14
    letterSpacing: -0.14,
    fontFamily: 'System', // Fallback since NuSans might not be available
    fontSize: 14,
    fontWeight: '400',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  closeButtonInner: {
    backgroundColor: '#f5f3f6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: 32,
    height: 32,
  },
  closeIcon: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.64)',
    fontWeight: 'bold',
  },
  addMoneyButton: {
    position: 'absolute',
    backgroundColor: '#820ad1',
    left: 12,
    right: 12,
    top: 109,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMoneyText: {
    color: '#fff',
    textAlign: 'center',
    letterSpacing: -0.14,
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
  },
});