import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { CardManagementScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { AddIcon, FreezeIcon, AddToWalletIcon } from '../../components/icons';
import { useCards } from '../../contexts/CardsContext';

export function CardManagementScreen({ onBack }: CardManagementScreenProps) {
  // No slide animation needed - this screen is revealed when StandardCardDetailsScreen slides out
  const { cards } = useCards();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TopNavigationBar 
          onBack={onBack}
          title="My cards"
          backgroundColor="#ECE9EE"
        />
        
        {/* Action Row */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('New virtual card')}>
            <View style={styles.actionIconContainer}>
              <AddIcon width={24} height={24} color="rgba(0,0,0,0.96)" />
            </View>
            <Text style={styles.actionLabel}>New virtual card</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Freeze cards')}>
            <View style={styles.actionIconContainer}>
              <FreezeIcon size={24} color="rgba(0,0,0,0.96)" />
            </View>
            <Text style={styles.actionLabel}>Freeze cards</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Add to wallet')}>
            <View style={styles.actionIconContainer}>
              <AddToWalletIcon size={24} color="rgba(0,0,0,0.96)" />
            </View>
            <Text style={styles.actionLabel}>Add to wallet</Text>
          </TouchableOpacity>
        </View>
        
        {/* Cards List */}
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {cards.length > 0 && (
            <View style={styles.cardsList}>
              <View style={styles.listHeader}>
                <Text style={styles.listTitle}>Virtual cards ({cards.length})</Text>
              </View>
              {cards.map((card, index) => (
                <TouchableOpacity 
                  key={card.id}
                  style={styles.cardRow}
                  onPress={() => console.log('Card pressed:', card.name)}
                >
                  <View style={styles.cardThumbnailContainer}>
                    <Image 
                      source={card.cardDesign.image} 
                      style={styles.cardThumbnail}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Text style={styles.cardDetails}>
                      •••• {card.lastFourDigits} · {card.cardType}
                    </Text>
                  </View>
                  {index < cards.length - 1 && <View style={styles.divider} />}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ECE9EE',
    zIndex: 1005, // Between StandardSuccessScreen (1004) and StandardCardDetailsScreen (1006)
  },
  safeArea: {
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  actionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e5e0e8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
  actionLabel: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    letterSpacing: 0.12,
    maxWidth: 110,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  cardsList: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    shadowColor: '#e5e0e8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    overflow: 'hidden',
  },
  listHeader: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  listTitle: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    position: 'relative',
  },
  cardThumbnailContainer: {
    width: 24,
    height: 36,
  },
  cardThumbnail: {
    width: 24,
    height: 36,
  },
  cardInfo: {
    flex: 1,
    gap: 4,
  },
  cardName: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgba(0,0,0,0.96)',
  },
  cardDetails: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
  },
  divider: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 1,
    backgroundColor: '#efefef',
  },
});
