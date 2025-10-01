import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { TopNavigation } from './components/TopNavigation';
import { BalanceWidget } from './components/BalanceWidget';
import { VirtualCardWidget } from './components/VirtualCardWidget';
import { NBAWidget } from './components/NBAWidget';
import { TransactionsWidget } from './components/TransactionsWidget';
import { MarketInfoWidget } from './components/MarketInfoWidget';
import { ActionButtons } from './components/ActionButtons';

interface HomepageScreenProps {
  onNavigateToMarketing?: () => void;
}

export function HomepageScreen({ onNavigateToMarketing }: HomepageScreenProps) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <TopNavigation scrollY={scrollY} />
      <Animated.ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          <NBAWidget />
          <ActionButtons onNavigateToMarketing={onNavigateToMarketing} />
          <BalanceWidget />
          <View style={styles.smallWidgetsRow}>
            <MarketInfoWidget />
            <VirtualCardWidget />
          </View>
          <TransactionsWidget />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece9ee',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 136, // TopNavigation height (76) + top padding (48) + bottom padding (12)
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32, // Reduced space after last widget
  },
  smallWidgetsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
});
