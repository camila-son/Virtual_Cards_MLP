import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from '../../../components/icons/RadioButton';
import { LIST_OPTIONS } from '../../../constants/marketingData';

interface ListRowsProps {
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

// Colors
const COLORS = {
  background: '#ffffff',
  border: '#EFEFEF',
  textPrimary: 'rgba(0, 0, 0, 0.96)',
  textSecondary: 'rgba(0, 0, 0, 0.64)',
};

export function ListRows({ selectedOption, onSelectOption }: ListRowsProps) {
  return (
    <View style={styles.navigationList}>
      <View style={styles.listContainer}>
        {LIST_OPTIONS.map((option, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity 
              style={styles.listRow}
              onPress={() => {
                onSelectOption(option.title);
              }}
              activeOpacity={1}
            >
              <View style={styles.rowContent}>
                <View style={styles.textContent}>
                  <Text style={styles.rowTitle}>{option.title}</Text>
                  <Text style={styles.rowDescription}>
                    {option.description}
                  </Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton selected={selectedOption === option.title} size={24} />
                </View>
              </View>
            </TouchableOpacity>
            {index < LIST_OPTIONS.length - 1 && <View style={styles.rowDivider} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationList: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  listContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 24,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  listRow: {
    flexDirection: 'column',
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
    color: COLORS.textPrimary,
    lineHeight: 18.2,
  },
  rowDescription: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textSecondary,
    lineHeight: 21,
  },
  rowDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    width: '100%',
  },
  radioButtonContainer: {
    width: 24,
    height: 24,
  },
});
