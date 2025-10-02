import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface CardNameProps {
  name: string;
  fadeAnim: Animated.Value;
}

export function CardName({ name, fadeAnim }: CardNameProps) {
  return (
    <View style={styles.cardNameContainer}>
      <Animated.Text 
        style={[
          styles.cardName,
          {
            opacity: fadeAnim,
          }
        ]}
      >
        {name}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardNameContainer: {
    alignItems: 'center',
    marginTop: 20, // 20px below carousel
  },
  cardName: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 20,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
  },
});
