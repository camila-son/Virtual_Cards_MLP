import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from './src:components/widgets/StatusBar';
import { TopNavigation } from './src:components/widgets/TopNavigation';
import { BalanceWidget } from './src:components/widgets/BalanceWidget';
import { VirtualCardWidget } from './src:components/widgets/VirtualCardWidget';
import { NBAWidget } from './src:components/widgets/NBAWidget';
import { TransactionsWidget } from './src:components/widgets/TransactionsWidget';
import { MarketInfoWidget } from './src:components/widgets/MarketInfoWidget';
import { ActionButtons } from './src:components/widgets/ActionButtons';
import { BottomNavigation } from './src:components/widgets/BottomNavigation';
import { HomeIndicator } from './src:components/widgets/HomeIndicator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
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