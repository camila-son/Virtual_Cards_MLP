import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomBarProps } from '../types';

export function BottomBar({ onChooseDesign }: BottomBarProps) {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.primaryButton} onPress={onChooseDesign}>
        <Text style={styles.buttonText}>Choose design</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#ece9ee', // Match screen background
  },
  primaryButton: {
    backgroundColor: '#820AD1', // Surface Accent Primary color
    height: 48,
    borderRadius: 64, // Medium border radius for pill shape
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    fontFamily: 'Nu Sans Medium', // Nu Sans Text Semibold from Figma
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff', // White text on colored background
    textAlign: 'center',
    lineHeight: 20.8, // 16 * 1.3 (line height from Figma)
  },
});

