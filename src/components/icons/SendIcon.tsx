import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface SendIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const SendIcon: React.FC<SendIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = 'rgba(0, 0, 0, 0.96)' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M3.33334 10.0001L4.50834 11.1751L9.16668 6.52511L9.16668 16.6668L10.8333 16.6668L10.8333 6.52511L15.4917 11.1751L16.6667 10.0001L10.5893 3.9227C10.2638 3.59726 9.73619 3.59726 9.41075 3.9227L3.33334 10.0001Z" 
        fill={color}
      />
    </Svg>
  );
};
