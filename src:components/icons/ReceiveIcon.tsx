import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ReceiveIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ReceiveIcon: React.FC<ReceiveIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = 'rgba(0, 0, 0, 0.96)' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M3.33334 9.9999L4.50834 8.8249L9.16668 13.4749L9.16668 3.33324L10.8333 3.33324L10.8333 13.4749L15.4917 8.8249L16.6667 9.9999L10.5893 16.0773C10.2638 16.4028 9.73619 16.4028 9.41075 16.0773L3.33334 9.9999Z" 
        fill={color}
      />
    </Svg>
  );
};
