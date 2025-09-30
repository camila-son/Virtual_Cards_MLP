import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActionButton = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{icon}</Text>
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <ActionButton icon="➕" label="Add" />
      <ActionButton icon="📤" label="Send" />
      <ActionButton icon="📥" label="Receive" />
      <ActionButton icon="🔄" label="Exchange" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 8,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    height: 86,
    width: 60,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.96)',
  },
  label: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    letterSpacing: 0.12,
  },
});