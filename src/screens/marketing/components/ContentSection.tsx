import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../components/config/fonts';

export function ContentSection() {
  return (
    <View style={styles.contentSection}>
      <Text style={styles.mainTitle}>No fees or spread</Text>
      <Text style={styles.description}>
        You don't pay extra on domestic or international purchases. Nu is free of charge!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  mainTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 24,
  },
  description: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    textAlign: 'center',
    lineHeight: 24,
  },
});
