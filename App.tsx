import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TopNavigation } from './src:components/widgets/TopNavigation';
import { BalanceWidget } from './src:components/widgets/BalanceWidget';
import { VirtualCardWidget } from './src:components/widgets/VirtualCardWidget';
import { NBAWidget } from './src:components/widgets/NBAWidget';
import { TransactionsWidget } from './src:components/widgets/TransactionsWidget';
import { MarketInfoWidget } from './src:components/widgets/MarketInfoWidget';
import { ActionButtons } from './src:components/widgets/ActionButtons';
import { BottomNavigation } from './src:components/widgets/BottomNavigation';
import { HomeIndicator } from './src:components/widgets/HomeIndicator';
import { loadCustomFonts } from './src/utils/loadFonts';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <TopNavigation />
        <View style={styles.content}>
          <BalanceWidget />
          <VirtualCardWidget />
          <NBAWidget />
          <TransactionsWidget />
          <MarketInfoWidget />
          <ActionButtons />
        </View>
      </ScrollView>
      <BottomNavigation />
      <HomeIndicator />
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
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Space for bottom navigation
  },
});