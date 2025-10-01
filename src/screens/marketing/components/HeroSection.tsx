import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../components/config/fonts';

export function HeroSection() {
  return (
    <View style={styles.heroSection}>
      <Text style={styles.heroEmoji}>🤡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: '#f5f3f6',
    height: 240,
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroEmoji: {
    fontSize: 20,
    fontFamily: Fonts.nuSans.medium,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
  },
});
