import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PageIndicatorsProps } from '../../../types/navigation';

export function PageIndicators({ currentIndex, totalCount }: PageIndicatorsProps) {
  return (
    <View style={styles.pageIndicators}>
      {Array.from({ length: totalCount }, (_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentIndex ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      ))}
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
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeIndicator: {
    backgroundColor: 'rgba(0,0,0,0.96)',
  },
  inactiveIndicator: {
    backgroundColor: 'rgba(0,0,0,0.16)',
  },
});
