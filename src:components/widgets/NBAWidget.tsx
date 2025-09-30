import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function NBAWidget() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: 'rgba(15, 10, 209, 0.4)',
    borderRadius: 24,
    width: '100%',
    height: 157,
    marginBottom: 16,
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
    width: 343,
  },
  contentGroup: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    paddingRight: 12,
    width: '100%',
  },
  title: {
    fontFamily: 'System', // Nu Sans Display Medium fallback
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28.8, // 1.2 * 24
    color: 'rgba(0, 0, 0, 0.96)',
    width: '100%',
  },
  descriptionContainer: {
    flex: 1,
    width: '100%',
  },
  description: {
    fontFamily: 'System', // Nu Sans Text Regular fallback
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21, // 1.5 * 14
    color: 'rgba(0, 0, 0, 0.64)',
    width: '100%',
  },
  bottomSection: {
    flexDirection: 'column',
    gap: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 12,
    width: 343,
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
    fontFamily: 'System', // Nu Sans Text Semibold fallback
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15.6, // 1.3 * 12
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
    fontFamily: 'System', // Nu Sans Text Semibold fallback
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15.6, // 1.3 * 12
    color: 'rgba(0, 0, 0, 0.96)',
    textAlign: 'center',
    letterSpacing: 0.12,
  },
});