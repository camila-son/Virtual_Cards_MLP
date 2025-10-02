import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ColorSwatchesProps } from '../types';

export function ColorSwatches({
  colorSwatches,
  selectedColorIndex,
  onSwatchPress,
}: ColorSwatchesProps) {
  return (
    <View style={styles.colorSwatchesContainer}>
      {colorSwatches.map((swatch, index) => (
        <TouchableOpacity
          key={swatch.id}
          style={[
            styles.colorSwatch,
            selectedColorIndex === index && styles.selectedSwatch,
          ]}
          onPress={() => onSwatchPress(index)}
        >
          <View
            style={[
              styles.colorCircle,
              { backgroundColor: swatch.color },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  colorSwatchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32, // 32px below card name
    gap: 16, // 16px spacing between swatches
  },
  colorSwatch: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedSwatch: {
    borderColor: '#820AD1',
    borderWidth: 2,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

