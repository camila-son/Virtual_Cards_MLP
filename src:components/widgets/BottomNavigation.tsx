import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.navigationContent}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navButton}>
            <View style={styles.navIcon}>
              <Text style={styles.iconText}>🤖</Text>
            </View>
          </View>
          <Text style={styles.navLabel}>Assistant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: -187.5, // -375/2
    width: 375,
    backgroundColor: 'rgba(236,233,238,0.8)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 20,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  navigationContent: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
  },
  navItem: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-end',
    width: 48,
  },
  navButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 24,
    shadowColor: '#E5E0E8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    position: 'relative',
  },
  navIcon: {
    padding: 4,
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.96)',
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.12,
    color: '#000',
    minWidth: 48,
    height: 16,
    lineHeight: 16,
  },
});