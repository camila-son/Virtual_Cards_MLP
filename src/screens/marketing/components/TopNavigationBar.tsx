import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronIcon } from '../../../components/icons/chevron_icon';
import { Fonts } from '../../../components/config/fonts';

interface TopNavigationBarProps {
  onBack: () => void;
}

export function TopNavigationBar({ onBack }: TopNavigationBarProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <View style={styles.backIcon}>
            <ChevronIcon size={24} color="rgba(0,0,0,0.96)" />
          </View>
        </TouchableOpacity>
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
  backIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }], // Rotate chevron to point left
  },
});
