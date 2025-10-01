import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronIcon } from '../../../components/icons/chevron_icon';
import { Fonts } from '../../../components/config/fonts';

export function ListRows() {
  return (
    <View style={styles.navigationList}>
      <View style={styles.listContainer}>
        {/* Standard Option */}
        <View style={styles.listRow}>
          <View style={styles.rowContent}>
            <View style={styles.textContent}>
              <Text style={styles.rowTitle}>Standard</Text>
              <Text style={styles.rowDescription}>
                Ideal for subscriptions, recurring charges and day-to-day use.
              </Text>
            </View>
            <View style={styles.chevronIcon}>
              <ChevronIcon size={20} color="rgba(0,0,0,0.64)" />
            </View>
          </View>
        </View>

        {/* Divider between rows */}
        <View style={styles.rowDivider} />

        {/* Temporary Option */}
        <View style={styles.listRow}>
          <View style={styles.rowContent}>
            <View style={styles.textContent}>
              <Text style={styles.rowTitle}>Temporary</Text>
              <Text style={styles.rowDescription}>
                Available for 24 hours. After this period, payments will be denied.
              </Text>
            </View>
            <View style={styles.chevronIcon}>
              <ChevronIcon size={20} color="rgba(0,0,0,0.64)" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationList: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    paddingBottom: 32,
  },
  listContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 1,
  },
  listRow: {
    flexDirection: 'column',
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#efefef',
    width: '100%',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  rowTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2,
  },
  rowDescription: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 21,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
});
