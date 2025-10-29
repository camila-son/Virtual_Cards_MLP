import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CountdownTimerProps {
  // Start time in seconds (24 hours = 86400 seconds)
  initialSeconds?: number;
}

export function CountdownTimer({ initialSeconds = 86400 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate hours, minutes, seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format with leading zeros
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // Calculate expiration time
  const expirationDate = new Date();
  expirationDate.setSeconds(expirationDate.getSeconds() + timeLeft);
  const expirationTime = expirationDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const isToday = expirationDate.getDate() === new Date().getDate();
  const expirationText = isToday 
    ? `Today at ${expirationTime}` 
    : `Tomorrow at ${expirationTime}`;

  return (
    <View style={styles.container}>
      <View style={styles.leftWrap}>
        <View style={styles.textColumn}>
          <Text style={styles.overlineText}>Expires at</Text>
          <Text style={styles.expiresText}>{expirationText}</Text>
        </View>
      </View>
      
      <View style={styles.cronometer}>
        {/* Hours */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox} />
          <Text style={styles.timeText}>{formatNumber(hours)}</Text>
        </View>
        
        {/* First colon */}
        <Text style={styles.colon}>:</Text>
        
        {/* Minutes */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox} />
          <Text style={styles.timeText}>{formatNumber(minutes)}</Text>
        </View>
        
        {/* Second colon */}
        <Text style={styles.colon}>:</Text>
        
        {/* Seconds */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox} />
          <Text style={styles.timeText}>{formatNumber(seconds)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  leftWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textColumn: {
    flexDirection: 'column',
    gap: 4,
  },
  overlineText: {
    fontFamily: 'Nu Sans Regular',
    fontSize: 14,
    color: 'rgba(0,0,0,0.64)',
    letterSpacing: 0.12,
    lineHeight: 18.2,
  },
  expiresText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 16,
    color: 'rgba(0,0,0,0.96)',
    letterSpacing: 0.12,
    lineHeight: 20.8,
  },
  cronometer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  timeUnit: {
    position: 'relative',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeBox: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '#f5f3f6',
    borderRadius: 4,
  },
  timeText: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    textAlign: 'center',
    letterSpacing: 0.12,
    lineHeight: 15.6,
    zIndex: 1,
  },
  colon: {
    fontFamily: 'Nu Sans Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.96)',
    letterSpacing: 0.12,
    lineHeight: 15.6,
    marginHorizontal: 4,
  },
});

