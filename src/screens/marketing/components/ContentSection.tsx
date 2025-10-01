import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../components/config/fonts';
import { CONTENT_DATA } from '../../../constants/marketingData';
import { ContentSectionProps } from '../../../types/navigation';

export function ContentSection({ currentIndex }: ContentSectionProps) {
  const currentContent = CONTENT_DATA[currentIndex] || CONTENT_DATA[0];

  return (
    <View style={styles.contentSection}>
      <Text style={styles.mainTitle}>{currentContent.title}</Text>
      <Text style={styles.description}>
        {currentContent.description}
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
