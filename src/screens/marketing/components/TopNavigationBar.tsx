import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { CloseIcon } from '../../../components/icons/CloseIcon';
import { TopNavigationBarProps } from '../../../types/navigation';

// Colors
const COLORS = {
  closeIcon: 'rgba(42, 27, 50, 0.64)',
  text: 'rgba(0, 0, 0, 0.96)',
};

export function TopNavigationBar({ onBack, title, backgroundColor }: TopNavigationBarProps) {
  return (
    <View style={[styles.topBar, backgroundColor && { backgroundColor }]}>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <View style={styles.closeIconContainer}>
            <CloseIcon size={24} color={COLORS.closeIcon} />
          </View>
        </TouchableOpacity>
        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
  },
  navigationBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 60, // Compensate for back button width to center the title
  },
  titleText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: COLORS.text,
  },
});
