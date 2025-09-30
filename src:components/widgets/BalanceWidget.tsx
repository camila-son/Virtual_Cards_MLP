import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function BalanceWidget() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <View style={styles.balanceAmount}>
              <Text style={styles.amount}>$0.00</Text>
              <Text style={styles.currency}>USD</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rightAction}>
            <Text style={styles.actionIcon}>⋯</Text>
          </TouchableOpacity>
        </View>

        {/* Digital Dollar Section */}
        <View style={styles.digitalDollarSection}>
          <View style={styles.digitalDollarItem}>
            <View style={styles.digitalDollarContent}>
              <Text style={styles.digitalDollarLabel}>Digital Dollar</Text>
              <View style={styles.digitalDollarAmount}>
                <Text style={styles.digitalDollarValue}>$0.00</Text>
                <Text style={styles.yieldText}>Yields 4% APY</Text>
              </View>
            </View>
            <View style={styles.flagIcon}>
              <Text style={styles.flagEmoji}>🇺🇸</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#e5e0e8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    marginBottom: 16,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 12,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 8,
    gap: 12,
  },
  balanceSection: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  balanceLabel: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    color: '#6b7280', // muted-foreground
    lineHeight: 16.8, // 1.4 * 12
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  amount: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    lineHeight: 21.6, // 1.2 * 18
  },
  currency: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280', // muted-foreground
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  rightAction: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 16,
    color: '#6b7280', // muted-foreground
  },
  digitalDollarSection: {
    width: '100%',
  },
  digitalDollarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e5e0e8',
    borderRadius: 16,
  },
  digitalDollarContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  digitalDollarLabel: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    color: '#6b7280', // muted-foreground
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  digitalDollarAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  digitalDollarValue: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    lineHeight: 18.2, // 1.3 * 14
  },
  yieldText: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    color: '#16a34a', // success-foreground
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  flagIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagEmoji: {
    fontSize: 24,
  },
});