import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import { CardManagementScreenProps } from '../../types/navigation';
import { TopNavigationBar } from '../marketing/components/TopNavigationBar';
import { AddIcon, FreezeIcon, AddToWalletIcon } from '../../components/icons';
import { useCards } from '../../contexts/CardsContext';
import { CardTypeBottomSheet } from './components/CardTypeBottomSheet';

export function CardManagementScreen({ onBack, onCardPress, onNavigateToVirtualCardCreation, onNavigateToTemporaryDisclaimer }: CardManagementScreenProps) {
  const { cards } = useCards();
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const [showCardTypeSheet, setShowCardTypeSheet] = useState(false);

  useEffect(() => {
    // Slide in from right when component mounts
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleBack = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onBack();
    });
  };

  const handleCardPress = (cardId: string) => {
    if (onCardPress) {
      onCardPress(cardId);
    }
  };

  const calculateHoursLeft = (expiresAt: Date) => {
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    const hours = Math.ceil(diff / (1000 * 60 * 60));
    return Math.max(0, hours);
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <TopNavigationBar 
          onBack={handleBack}
          title="My cards"
          backgroundColor="#FFFFFF"
        />
        
        <View style={styles.actionRow}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => setShowCardTypeSheet(true)}
          >
            <View style={styles.actionIconContainer}>
              <AddIcon width={24} height={24} color="rgba(0,0,0,0.96)" />
            </View>
            <Text style={styles.actionLabel}>New virtual card</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <FreezeIcon size={24} color="rgba(0,0,0,0.96)" />
            </View>
            <Text style={styles.actionLabel}>Freeze cards</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
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
              {cards.map((card, index) => {
                const hoursLeft = card.isTemporary && card.expiresAt ? calculateHoursLeft(card.expiresAt) : null;
                const thumbnail = card.isTemporary 
                  ? require('../../../assets/mini-temporary_card.png')
                  : card.cardDesign?.image;
                const isFrozen = card.isFrozen || false;
                
                return (
                  <TouchableOpacity 
                    key={card.id}
                    style={styles.cardRow}
                    onPress={() => handleCardPress(card.id)}
                  >
                    <View style={styles.cardThumbnailContainer}>
                      {thumbnail && (
                        <Image 
                          source={thumbnail} 
                          style={[
                            styles.cardThumbnail,
                            isFrozen && { opacity: 1 }
                          ]}
                          resizeMode="contain"
                        />
                      )}
                      {isFrozen && <View style={styles.greyscaleOverlay} />}
                    </View>
                    <View style={styles.cardInfo}>
                      <Text style={[styles.cardName, isFrozen && { opacity: 0.3 }]}>{card.name}</Text>
                      <Text style={[styles.cardDetails, isFrozen && { opacity: 0.3 }]}>
                        •••• {card.lastFourDigits}
                      </Text>
                    </View>
                    {isFrozen ? (
                      <View style={styles.frozenBadge}>
                        <Text style={styles.frozenBadgeText}>Frozen</Text>
                      </View>
                    ) : card.isTemporary && hoursLeft !== null ? (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{hoursLeft}h left</Text>
                      </View>
                    ) : null}
                    {index < cards.length - 1 && <View style={styles.divider} />}
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>

      {/* Card Type Bottom Sheet */}
      {showCardTypeSheet && (
        <CardTypeBottomSheet
          onClose={() => setShowCardTypeSheet(false)}
          onSelectStandard={() => {
            if (onNavigateToVirtualCardCreation) {
              onNavigateToVirtualCardCreation();
            }
          }}
          onSelectTemporary={() => {
            if (onNavigateToTemporaryDisclaimer) {
              onNavigateToTemporaryDisclaimer();
            }
          }}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
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
    borderWidth: 1,
    borderColor: 'rgba(31, 0, 47, 0.08)',
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
    borderWidth: 1,
    borderColor: 'rgba(31, 0, 47, 0.08)',
    shadowColor: '#1F002F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 0,
    elevation: 1,
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
  greyscaleOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 24,
    height: 36,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
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
  badge: {
    marginLeft: 12,
  },
  badgeText: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#AF4D0E',
    letterSpacing: 0.12,
  },
  frozenBadge: {
    marginLeft: 12,
  },
  frozenBadgeText: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
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
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#efefef',
  },
});
