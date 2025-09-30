import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function VirtualCardWidget() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.cardsIllustration}>
          {/* Simplified card stack using emojis */}
          <View style={styles.cardStack}>
            <View style={[styles.card, styles.card1]}>
              <Text style={styles.cardEmoji}>💳</Text>
            </View>
            <View style={[styles.card, styles.card2]}>
              <Text style={styles.cardEmoji}>💳</Text>
            </View>
            <View style={[styles.card, styles.card3]}>
              <Text style={styles.cardEmoji}>💳</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>Shop safely</Text>
          <Text style={styles.title}>My Cards</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: 165.5,
    alignItems: 'flex-start',
    overflow: 'hidden',
    borderRadius: 24,
    marginBottom: 16,
  },
  topSection: {
    flex: 1,
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'column',
    gap: 12,
  },
  cardsIllustration: {
    width: 32,
    height: 32,
    position: 'relative',
  },
  cardStack: {
    position: 'relative',
    width: 32,
    height: 32,
  },
  card: {
    position: 'absolute',
    width: 20,
    height: 14,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1: {
    backgroundColor: '#8D42C9',
    top: 0,
    left: 0,
    transform: [{ rotate: '30deg' }],
  },
  card2: {
    backgroundColor: '#4B218D',
    top: 4,
    left: 8,
    transform: [{ rotate: '15deg' }],
  },
  card3: {
    backgroundColor: '#820AD1',
    top: 8,
    left: 4,
    transform: [{ rotate: '0deg' }],
  },
  cardEmoji: {
    fontSize: 8,
    color: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  subtitle: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    color: '#6b7280', // muted-foreground
    lineHeight: 15.6, // 1.3 * 12
  },
  title: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    lineHeight: 23.4, // 1.3 * 18
    letterSpacing: -0.18,
  },
  bottomSection: {
    width: '100%',
    padding: 8,
  },
  createButton: {
    backgroundColor: '#f3f4f6', // secondary color
    height: 36,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  createButtonText: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    lineHeight: 15.6, // 1.3 * 12
  },
});