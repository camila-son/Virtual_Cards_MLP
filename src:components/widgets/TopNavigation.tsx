import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function TopNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.blurContainer}>
        <View style={styles.wrapper}>
          {/* Leading - Avatar */}
          <View style={styles.leading}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>GA</Text>
              </View>
              <View style={styles.avatarBorder} />
              <View style={styles.avatarOverlay} />
            </View>
          </View>
          
          {/* Content - User Info */}
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.userName}>Gabriel</Text>
            </View>
            <View style={styles.secondaryContent}>
              <Text style={styles.accountType}>Nu Account</Text>
            </View>
          </View>
          
          {/* Trailing - Action Icons */}
          <View style={styles.trailing}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>🔔</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>💬</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>⚙️</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48, // Status bar height + padding as per Figma
    width: '100%',
  },
  blurContainer: {
    backgroundColor: 'rgba(236, 233, 238, 0.64)', // Subtle purple background
    width: '100%',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 76,
    gap: 16,
  },
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  avatarContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 64, // 64px radius as per Figma
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d1d5db', // gray-300
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
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
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 64,
  },
  avatarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: 64,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: 0,
    minWidth: 0,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 0,
    minWidth: 0,
    width: '100%',
  },
  userName: {
    color: 'rgba(0, 0, 0, 0.96)', // Default content color
    fontFamily: 'Nu Sans', // NuSans Regular
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20.8, // 1.3 * 16
    letterSpacing: -0.16,
    overflow: 'hidden',
  },
  secondaryContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 0,
    minWidth: 0,
    width: '100%',
  },
  accountType: {
    color: '#820ad1', // Primary accent color
    fontFamily: 'Nu Sans', // NuSans Regular
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2, // 1.3 * 14
    letterSpacing: -0.14,
    overflow: 'hidden',
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    gap: 0,
    overflow: 'hidden',
  },
  actionButton: {
    width: 44,
    height: 44,
    maxWidth: 44,
    maxHeight: 44,
    minWidth: 44,
    minHeight: 44,
    padding: 8,
    borderRadius: 64, // 64px radius as per Figma
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.64)',
  },
});