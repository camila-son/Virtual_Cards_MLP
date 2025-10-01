import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronIcon } from '../../../components/icons/chevron_icon';
import { Fonts } from '../../../components/config/fonts';
import { LIST_OPTIONS } from '../../../constants/marketingData';

export function ListRows() {
  return (
    <View style={styles.navigationList}>
      <View style={styles.listContainer}>
        {LIST_OPTIONS.map((option, index) => (
          <React.Fragment key={index}>
            <View style={styles.listRow}>
              <View style={styles.rowContent}>
                <View style={styles.textContent}>
                  <Text style={styles.rowTitle}>{option.title}</Text>
                  <Text style={styles.rowDescription}>
                    {option.description}
                  </Text>
                </View>
                <View style={styles.chevronIcon}>
                  <ChevronIcon size={20} color="rgba(0,0,0,0.64)" />
                </View>
              </View>
            </View>
            {index < LIST_OPTIONS.length - 1 && <View style={styles.rowDivider} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationList: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    paddingBottom: 32,
  },
  listContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 1,
  },
  listRow: {
    flexDirection: 'column',
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#efefef',
    width: '100%',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  rowTitle: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.96)',
    lineHeight: 18.2,
  },
  rowDescription: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.64)',
    lineHeight: 21,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
});
