import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronIcon } from '../icons/chevron_icon';
import { SendIcon } from '../icons/SendIcon';
import { USFlagIcon } from '../icons/USFlagIcon';

export function BalanceWidget() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Balance</Text>
          </View>
          <TouchableOpacity style={styles.rightAction}>
            <ChevronIcon size={20} color="rgba(0,0,0,0.64)" />
          </TouchableOpacity>
        </View>

        {/* Digital Dollar Section */}
        <View style={styles.digitalDollarSection}>
          <View style={styles.digitalDollarItem}>
            <View style={styles.digitalDollarContent}>
              <Text style={styles.digitalDollarLabel}>Digital Dollar</Text>
              <View style={styles.digitalDollarAmount}>
                <Text style={styles.digitalDollarValue}>$0.00</Text>
                <View style={styles.yieldContainer}>
                  <View style={styles.yieldIcon}>
                    <SendIcon width={12} height={12} color="#0c7a3a" />
                  </View>
                  <Text style={styles.yieldText}>4% APY</Text>
                </View>
              </View>
            </View>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <USFlagIcon width={32} height={32} />
              </View>
            </View>
          </View>
        </View>

        {/* Add Money Button */}
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.addMoneyText}>Add money</Text>
        </TouchableOpacity>
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
    marginBottom: 12,
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
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)', // color.content.subtle
    lineHeight: 15.6, // 1.3 * 12
    letterSpacing: 0.12,
  },
  rightAction: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: '#efefef', // color.border.default
    borderRadius: 16,
    height: 56,
  },
  digitalDollarContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  digitalDollarLabel: {
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)', // color.content.subtle
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  digitalDollarAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  digitalDollarValue: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)', // color.content.default
    lineHeight: 18.2, // 1.3 * 14
  },
  yieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  yieldIcon: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yieldText: {
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: '#0c7a3a', // color.content.feedback.success
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  avatarContainer: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  addMoneyButton: {
    backgroundColor: '#f5f3f6', // surface.subtle-purple
    borderRadius: 64,
    height: 36,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 12,
  },
  addMoneyText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)', // color.content.default
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
    textAlign: 'center',
  },
});