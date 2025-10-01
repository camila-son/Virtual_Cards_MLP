import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TransactionsWidget() {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Transactions</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No transactions</Text>
          <Text style={styles.emptySubtitle}>There are no recent events</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
    overflow: 'hidden',
    paddingBottom: 8,
    paddingTop: 20,
    paddingHorizontal: 0,
    borderRadius: 24,
    shadowColor: '#e5e0e8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    width: '100%',
    marginBottom: 12,
  },
  titleSection: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Nu Sans',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
    lineHeight: 15.6, // 1.3 * 12
  },
  contentSection: {
    flex: 1,
    width: '100%',
    padding: 32,
  },
  emptyState: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 4,
  },
  emptyTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    letterSpacing: -0.14,
    lineHeight: 18.2, // 1.3 * 14
  },
  emptySubtitle: {
    fontFamily: 'Nu Sans',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.32)',
    lineHeight: 18.2, // 1.3 * 14
  },
});