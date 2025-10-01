import React from 'react';
import { View, StyleSheet } from 'react-native';

export function PageIndicators() {
  return (
    <View style={styles.pageIndicators}>
      <View style={styles.activeIndicator} />
      <View style={styles.inactiveIndicator} />
      <View style={styles.inactiveIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    paddingVertical: 16,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.96)',
  },
  inactiveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.16)',
  },
});
