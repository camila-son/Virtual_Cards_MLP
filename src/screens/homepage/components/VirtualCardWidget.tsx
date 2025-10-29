import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VirtualCardIcon } from '../../../components/icons/VirtualCardIcon';
import { VirtualCardWidgetProps } from '../../../types/navigation';
import { useCards } from '../../../contexts/CardsContext';

export function VirtualCardWidget({ onNavigateToMarketing, onNavigateToCardManagement }: VirtualCardWidgetProps) {
  const { cards } = useCards();
  const hasCards = cards.length > 0;

  const handlePress = () => {
    if (hasCards) {
      onNavigateToCardManagement();
    } else {
      onNavigateToMarketing();
    }
  };

  if (!hasCards) {
    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        {/* Top Section with Icon */}
        <View style={styles.topSectionNoCards}>
          <View style={styles.iconCircle}>
            <VirtualCardIcon width={20} height={20} />
          </View>
        </View>

        {/* Bottom Section with Title and Subtitle */}
        <View style={styles.bottomSectionNoCards}>
          <View style={styles.contentNoCards}>
            <Text style={styles.titleNoCards}>
              My cards
            </Text>
            <Text style={styles.subtitleNoCards}>Shop safely online</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const displayCount = cards.length > 3 ? '+3' : cards.length.toString();

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {/* Top Section with Icon and Badge */}
      <View style={styles.topSectionNoCards}>
        <View style={styles.avatarsContainer}>
          <View style={styles.iconCircleWithCards}>
            <VirtualCardIcon width={20} height={20} color="#610F9B" />
          </View>
          <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>{displayCount}</Text>
          </View>
        </View>
      </View>

      {/* Bottom Section with Title and Subtitle */}
      <View style={styles.bottomSectionNoCards}>
        <View style={styles.contentNoCards}>
          <Text style={styles.titleNoCards}>My cards</Text>
          <Text style={styles.subtitleNoCards}>Manage and shop</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  topSectionNoCards: {
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F3F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleWithCards: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F6ECFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    zIndex: 2,
  },
  countBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    zIndex: 1,
  },
  countBadgeText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#1F002F',
    lineHeight: 15.6,
  },
  bottomSectionNoCards: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'flex-end',
  },
  contentNoCards: {
    flexDirection: 'column',
    gap: 4,
  },
  titleNoCards: {
    fontFamily: 'Nu Sans Display',
    fontSize: 20,
    fontWeight: '500',
    color: '#1F002F',
    lineHeight: 24, // 20 * 1.2
  },
  subtitleNoCards: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 18.2, // 14 * 1.3
  },
});