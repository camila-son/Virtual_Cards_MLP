import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VirtualCardIcon } from '../../../components/icons/VirtualCardIcon';

interface VirtualCardWidgetProps {
  onNavigateToMarketing: () => void;
}

export function VirtualCardWidget({ onNavigateToMarketing }: VirtualCardWidgetProps) {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.cardsIllustration}>
          <VirtualCardIcon width={32} height={33} />
        </View>
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>Shop safely</Text>
          <Text style={styles.title}>Virtual Cards</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.createButton} onPress={onNavigateToMarketing}>
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
    shadowColor: '#e5e0e8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    flex: 1,
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
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  subtitle: {
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: '#6b7280', // muted-foreground
    lineHeight: 15.6, // 1.3 * 12
  },
  title: {
    fontFamily: 'Nu Sans Medium',
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
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    lineHeight: 15.6, // 1.3 * 12
  },
});