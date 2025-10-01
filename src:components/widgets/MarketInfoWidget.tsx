import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { USFlagIcon } from '../icons/USFlagIcon';
import { BitcoinIcon } from '../icons/BitcoinIcon';

export function MarketInfoWidget() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.marketInfo}>
          <View style={styles.marketItem}>
            {/* Digital Dollar Row */}
            <View style={styles.marketRow}>
              <View style={styles.flagIcon}>
                <USFlagIcon width={32} height={32} />
              </View>
              <View style={styles.marketDetails}>
                <Text style={styles.marketLabel}>Digital Dollar</Text>
                <Text style={styles.marketValue}>1 USDc = 1 USD</Text>
              </View>
            </View>
            
            {/* Divider */}
            <View style={styles.divider} />
            
            {/* Bitcoin Row */}
            <View style={styles.marketRow}>
              <View style={styles.bitcoinIcon}>
                <BitcoinIcon width={32} height={32} />
              </View>
              <View style={styles.marketDetails}>
                <Text style={styles.marketLabel}>Bitcoin price</Text>
                <Text style={styles.marketValue}>$115,447.28</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      {/* Bottom Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all</Text>
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
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  marketInfo: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e5e0e8',
    borderRadius: 16,
    width: '100%',
  },
  marketItem: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
    paddingVertical: 8,
    width: '100%',
  },
  marketRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    paddingHorizontal: 8,
  },
  flagIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bitcoinIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marketDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  marketLabel: {
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: '#6b7280', // muted-foreground
    lineHeight: 15.6, // 1.3 * 12
  },
  marketValue: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    lineHeight: 15.6, // 1.3 * 12
  },
  divider: {
    backgroundColor: '#e5e0e8',
    height: 1,
    width: '100%',
  },
  bottomSection: {
    width: '100%',
    padding: 8,
  },
  viewAllButton: {
    backgroundColor: '#f3f4f6', // secondary color
    height: 36,
    borderRadius: 18,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    lineHeight: 15.6, // 1.3 * 12
    textAlign: 'center',
  },
});