import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function TopNavigation() {
  return (
    <View style={styles.container}>
      {/* Avatar and User Info */}
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>GA</Text>
          </View>
          <View style={styles.avatarBorder} />
          <View style={styles.avatarOverlay} />
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Gabriel</Text>
          <Text style={styles.accountType}>Nu Account</Text>
        </View>
      </View>
      
      {/* Action Icons */}
      <View style={styles.actionIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 44, // Status bar height + padding
    paddingBottom: 16,
    height: 76, // h-19 equivalent
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d1d5db', // gray-300
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  avatarText: {
    color: '#6b7280', // gray-600
    fontWeight: '500',
    fontSize: 14,
  },
  avatarBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 20,
  },
  avatarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: 20,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    color: '#000',
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '300',
  },
  accountType: {
    color: '#820ad1', // primary color
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '400',
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.64)',
  },
});