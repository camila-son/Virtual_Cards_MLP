import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AddIcon } from '../../../components/icons/AddIcon';
import { ReceiveIcon } from '../../../components/icons/ReceiveIcon';
import { SendIcon } from '../../../components/icons/SendIcon';
import { ExchangeIcon } from '../../../components/icons/ExchangeIcon';

const ActionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.iconContainer}>
      {icon}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <ActionButton icon={<AddIcon width={24} height={24} />} label="Add" />
      <ActionButton icon={<SendIcon width={24} height={24} />} label="Send" />
      <ActionButton icon={<ReceiveIcon width={24} height={24} />} label="Receive" />
      <ActionButton icon={<ExchangeIcon width={24} height={24} />} label="Exchange" />
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
    marginBottom: 12,
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
    shadowColor: '#E5E0E8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
  label: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    letterSpacing: 0.12,
  },
});