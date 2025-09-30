import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Nu Sans Font Configuration
const fonts = {
  // Normal variant
  light: Platform.select({
    ios: 'Nu Sans-Light',
    android: 'NuSansLight',
    default: 'System',
  }),
  regular: Platform.select({
    ios: 'Nu Sans-Regular',
    android: 'NuSansRegular', 
    default: 'System',
  }),
  medium: Platform.select({
    ios: 'Nu Sans-Medium',
    android: 'NuSansMedium',
    default: 'System',
  }),
  semibold: Platform.select({
    ios: 'Nu Sans-Semibold',
    android: 'NuSansSemibold',
    default: 'System',
  }),
  
  // Extended variant
  extendedLight: Platform.select({
    ios: 'Nu Sans Extended-Light',
    android: 'NuSansExtendedLight',
    default: 'System',
  }),
  extendedRegular: Platform.select({
    ios: 'Nu Sans Extended-Regular',
    android: 'NuSansExtendedRegular',
    default: 'System',
  }),
  extendedMedium: Platform.select({
    ios: 'Nu Sans Extended-Medium',
    android: 'NuSansExtendedMedium',
    default: 'System',
  }),
  extendedSemibold: Platform.select({
    ios: 'Nu Sans Extended-Semibold',
    android: 'NuSansExtendedSemibold',
    default: 'System',
  }),
  
  // Condensed variant  
  condensedLight: Platform.select({
    ios: 'Nu Sans Condensed-Light',
    android: 'NuSansCondensedLight',
    default: 'System',
  }),
  condensedRegular: Platform.select({
    ios: 'Nu Sans Condensed-Regular',
    android: 'NuSansCondensedRegular',
    default: 'System',
  }),
  condensedMedium: Platform.select({
    ios: 'Nu Sans Condensed-Medium',
    android: 'NuSansCondensedMedium',
    default: 'System',
  }),
  condensedSemibold: Platform.select({
    ios: 'Nu Sans Condensed-Semibold',
    android: 'NuSansCondensedSemibold',
    default: 'System',
  }),
};

// Data constants
const USER_DATA = {
  name: 'Gabriel',
  greeting: 'Good morning',
  initials: 'GA',
  balance: '$12,486.50',
  monthlyChange: '+$247.82 this month',
};

const ACTIONS = [
  { icon: '↗', label: 'Send' },
  { icon: '↙', label: 'Receive' },
  { icon: '💳', label: 'Pay' },
  { icon: '📝', label: 'Exchange' },
];

const TRANSACTIONS = [
  { name: 'Spotify', amount: '-$9.99' },
  { name: 'Coffee Shop', amount: '-$4.50' },
  { name: 'Salary Deposit', amount: '+$3,200.00' },
];

// Components
const UserHeader = () => (
  <View style={styles.header}>
    <View style={styles.userInfo}>
      <View style={styles.profilePic}>
        <Text style={styles.profileInitials}>{USER_DATA.initials}</Text>
      </View>
      <View>
        <Text style={styles.greeting}>{USER_DATA.name}</Text>
        <Text style={styles.subGreeting}>{USER_DATA.greeting}</Text>
      </View>
    </View>
  </View>
);

const EarnAPYWidget = () => (
  <View style={[styles.widget, styles.earnWidget]}>
    {/* Content Section */}
    <View style={styles.earnContent}>
      <Text style={styles.earnTitle}>Earn 4% APY</Text>
      <Text style={styles.earnSubtitle}>
        Add Digital Dollars to your account and see them grow 🤑
      </Text>
    </View>
    
    {/* Close Button */}
    <TouchableOpacity style={styles.earnCloseButton}>
      <View style={styles.earnCloseIcon}>
        <Text style={styles.earnCloseText}>✕</Text>
      </View>
    </TouchableOpacity>
    
    {/* Add Money Button */}
    <TouchableOpacity style={styles.earnAddMoneyButton}>
      <Text style={styles.earnButtonText}>Add money</Text>
    </TouchableOpacity>
  </View>
);

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.actionIcon}>
      <Text style={styles.actionIconText}>{icon}</Text>
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const BalanceWidget = () => (
  <View style={[styles.widget, styles.balanceWidget]}>
    {/* Header Section */}
    <View style={styles.balanceHeader}>
      <View style={styles.balanceContent}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={styles.balanceTitleRow}>
          <Text style={styles.balanceMainAmount}>$12,486</Text>
          <View style={styles.currencyTicker}>
            <Text style={styles.currencyText} numberOfLines={1}>USD</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.dropdownButton}>
        <Text style={styles.dropdownArrow}>⌄</Text>
      </TouchableOpacity>
    </View>
    
    {/* Digital Dollar Line Item */}
    <View style={styles.digitalDollarItem}>
      <View style={styles.digitalDollarContent}>
        <Text style={styles.digitalDollarLabel}>Digital Dollar</Text>
        <View style={styles.digitalDollarRow}>
          <Text style={styles.digitalDollarAmount}>$0.00</Text>
          <Text style={styles.yieldText}>Yields 4% APY</Text>
        </View>
      </View>
      <View style={styles.digitalDollarAvatar}>
        <View style={styles.flagIcon}>
          <Text style={styles.flagText}>🇺🇸</Text>
        </View>
      </View>
    </View>
  </View>
);

const TwoColumnWidgets = () => (
  <View style={styles.twoColumnRow}>
    <View style={[styles.widget, styles.halfWidth, styles.marketWidget]}>
      {/* Top section with bordered list */}
      <View style={styles.marketList}>
        {/* Digital Dollar Row */}
        <View style={styles.marketRow}>
          <View style={styles.marketAvatar}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>DD</Text>
            </View>
          </View>
          <View style={styles.marketContent}>
            <Text style={styles.marketSubtitle}>Digital Dollar</Text>
            <Text style={styles.marketTitle}>1 USDc = 1 USD</Text>
          </View>
        </View>
        
        {/* Divider */}
        <View style={styles.marketDivider} />
        
        {/* Bitcoin Row */}
        <View style={styles.marketRow}>
          <View style={styles.marketAvatar}>
            <View style={[styles.avatarPlaceholder, { backgroundColor: '#f7931a' }]}>
              <Text style={styles.avatarText}>₿</Text>
            </View>
          </View>
          <View style={styles.marketContent}>
            <Text style={styles.marketSubtitle}>Bitcoin price</Text>
            <Text style={styles.marketTitle}>$115,447.28</Text>
          </View>
        </View>
      </View>
      
      {/* Bottom View All Button */}
      <View style={styles.viewAllContainer}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={[styles.widget, styles.halfWidth, styles.virtualCardWidget]}>
      {/* Cards Illustration */}
      <View style={styles.cardsIllustration}>
        <View style={styles.cardStack}>
          <View style={[styles.virtualCard, styles.card1]}>
            <Text style={styles.cardText}>💳</Text>
          </View>
          <View style={[styles.virtualCard, styles.card2]}>
            <Text style={styles.cardText}>💳</Text>
          </View>
          <View style={[styles.virtualCard, styles.card3]}>
            <Text style={styles.cardText}>💳</Text>
          </View>
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.virtualCardContent}>
        <Text style={styles.virtualCardSubtitle}>Shop safely</Text>
        <Text style={styles.virtualCardTitle}>My Cards</Text>
      </View>
      
      {/* Create Button */}
      <View style={styles.virtualCardButtonContainer}>
        <TouchableOpacity style={styles.virtualCardButton}>
          <Text style={styles.virtualCardButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const TransactionItem = ({ name, amount }) => (
  <View style={styles.transaction}>
    <Text style={styles.transactionName}>{name}</Text>
    <Text style={[
      styles.transactionAmount,
      { color: amount.startsWith('+') ? '#4CAF50' : '#000' }
    ]}>
      {amount}
    </Text>
  </View>
);

const TransactionsWidget = () => (
  <View style={[styles.widget, styles.transactionsWidget]}>
    {/* Title Section */}
    <View style={styles.transactionsTitle}>
      <Text style={styles.transactionsTitleText}>Transactions</Text>
    </View>
    
    {/* Empty State Content */}
    <View style={styles.transactionsEmptyState}>
      <Text style={styles.transactionsEmptyTitle}>No transactions</Text>
      <Text style={styles.transactionsEmptySubtitle}>There are no recent events</Text>
    </View>
  </View>
);

// Main App Component
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <UserHeader />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <EarnAPYWidget />
        
        <View style={styles.actionRow}>
          {ACTIONS.map((action, index) => (
            <ActionButton key={index} icon={action.icon} label={action.label} />
          ))}
        </View>

        <BalanceWidget />
        <TwoColumnWidgets />
        <TransactionsWidget />
      </ScrollView>
    </View>
  );
}

// Consolidated styles
const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#ece9ee',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Profile
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileInitials: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  greeting: {
    fontSize: 16,
    fontFamily: fonts.regular, // Nu Sans-Regular
    color: '#000',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },

  // Widgets
  widget: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  widgetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },

  // Earn APY Widget
  earnWidget: {
    position: 'relative',
    height: 157,
  },
  earnContent: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 234,
    gap: 4,
  },
  earnTitle: {
    fontSize: 20,
    fontFamily: fonts.medium,
    lineHeight: 24,
    letterSpacing: -0.4,
    // Gradient text effect (simplified for React Native)
    color: '#820ad1',
    marginBottom: 4,
  },
  earnSubtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 18.2,
    letterSpacing: -0.14,
    flexWrap: 'wrap',
  },
  earnCloseButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 48,
    height: 48,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 64,
  },
  earnCloseIcon: {
    backgroundColor: '#f5f3f6',
    width: 32,
    height: 32,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earnCloseText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '400',
  },
  earnAddMoneyButton: {
    position: 'absolute',
    left: 12,
    top: 109,
    width: 319,
    height: 36,
    backgroundColor: '#820ad1',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  earnButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 18.2,
    letterSpacing: -0.14,
  },

  // Actions
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 13,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIconText: {
    fontSize: 24,
    color: '#820ad1',
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },

  // Balance Widget
  balanceWidget: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: '#e5e0e8',
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    width: '100%',
  },
  balanceContent: {
    flex: 1,
    gap: 2,
  },
  balanceLabel: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    fontWeight: '400',
    lineHeight: 16,
  },
  balanceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  balanceMainAmount: {
    fontSize: 24,
    fontFamily: fonts.semibold, // Nu Sans-Semibold
    color: 'rgba(0,0,0,0.96)',
    letterSpacing: -0.48,
    lineHeight: 29,
  },
  currencyTicker: {
    paddingTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    flexShrink: 0,
  },
  currencyText: {
    fontSize: 12,
    fontFamily: fonts.condensedSemibold, // Nu Sans Condensed-Semibold (perfect for tickers!)
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 1.2,
    lineHeight: 16,
    textAlign: 'center',
    width: '100%',
  },
  dropdownButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownArrow: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.64)',
    transform: [{ rotate: '0deg' }],
  },
  
  // Digital Dollar Line Item
  digitalDollarItem: {
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 16,
    padding: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 319,
    alignSelf: 'center',
  },
  digitalDollarContent: {
    flex: 1,
    gap: 2,
    justifyContent: 'center',
  },
  digitalDollarLabel: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    fontWeight: '400',
    lineHeight: 16,
  },
  digitalDollarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  digitalDollarAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0,0,0,0.96)',
    letterSpacing: -0.14,
    lineHeight: 18,
  },
  yieldText: {
    fontSize: 12,
    color: '#0c7a3a',
    fontWeight: '400',
    lineHeight: 16,
  },
  digitalDollarAvatar: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagText: {
    fontSize: 16,
  },

  // Two Column Layout
  twoColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  halfWidth: {
    width: '48%',
    marginBottom: 0,
  },

  // Market Widget
  marketWidget: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    paddingBottom: 8,
    gap: 0,
  },
  marketList: {
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  marketRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 8,
  },
  marketAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  marketContent: {
    flex: 1,
    gap: 2,
  },
  marketSubtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    fontWeight: '400',
    lineHeight: 15.6,
  },
  marketTitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.96)',
    fontWeight: '500',
    lineHeight: 15.6,
  },
  marketDivider: {
    height: 1,
    backgroundColor: '#efefef',
    marginHorizontal: 8,
  },
  viewAllContainer: {
    paddingHorizontal: 8,
  },
  viewAllButton: {
    backgroundColor: '#f5f3f6',
    height: 36,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 15.6,
  },

  // Virtual Card Widget
  virtualCardWidget: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
    gap: 12,
    height: 165.5,
    justifyContent: 'space-between',
  },
  cardsIllustration: {
    height: 32,
    width: 32,
    position: 'relative',
  },
  cardStack: {
    position: 'relative',
    width: 32,
    height: 32,
  },
  virtualCard: {
    position: 'absolute',
    width: 20,
    height: 12,
    backgroundColor: '#e8e8e8',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    top: 3,
    left: 5,
    transform: [{ rotate: '30deg' }],
    backgroundColor: '#f0f0f0',
  },
  card2: {
    top: 4,
    left: 8,
    transform: [{ rotate: '15deg' }],
    backgroundColor: '#e0e0e0',
  },
  card3: {
    top: 7,
    left: 4,
    backgroundColor: '#d0d0d0',
  },
  cardText: {
    fontSize: 8,
  },
  virtualCardContent: {
    flex: 1,
    gap: 2,
  },
  virtualCardSubtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    fontWeight: '400',
    lineHeight: 15.6,
  },
  virtualCardTitle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.96)',
    fontWeight: '500',
    lineHeight: 23.4,
    letterSpacing: -0.18,
  },
  virtualCardButtonContainer: {
    paddingHorizontal: 0,
  },
  virtualCardButton: {
    backgroundColor: '#f5f3f6',
    height: 36,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  virtualCardButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 15.6,
  },

  // Transactions Widget
  transactionsWidget: {
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 0,
    gap: 8,
  },
  transactionsTitle: {
    paddingHorizontal: 20,
  },
  transactionsTitleText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.64)',
    fontWeight: '400',
    lineHeight: 15.6,
  },
  transactionsEmptyState: {
    height: 113.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  transactionsEmptyTitle: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    fontWeight: '500',
    lineHeight: 18.2,
    textAlign: 'center',
    marginBottom: 2,
  },
  transactionsEmptySubtitle: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.32)',
    fontWeight: '400',
    lineHeight: 18.2,
    textAlign: 'center',
  },

  // Legacy Transaction Styles (not used in current design)
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionName: {
    fontSize: 16,
    color: '#000',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
});