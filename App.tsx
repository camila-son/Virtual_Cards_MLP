import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Text, Animated } from 'react-native';
import { TopNavigation } from './src:components/widgets/TopNavigation';
import { BalanceWidget } from './src:components/widgets/BalanceWidget';
import { VirtualCardWidget } from './src:components/widgets/VirtualCardWidget';
import { NBAWidget } from './src:components/widgets/NBAWidget';
import { TransactionsWidget } from './src:components/widgets/TransactionsWidget';
import { MarketInfoWidget } from './src:components/widgets/MarketInfoWidget';
import { ActionButtons } from './src:components/widgets/ActionButtons';
import { loadCustomFonts } from './src/utils/loadFonts';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadCustomFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }
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
          <ActionButtons />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ece9ee',
  },
  loadingText: {
    fontSize: 16,
    color: '#000',
  },
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