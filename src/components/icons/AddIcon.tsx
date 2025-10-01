import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface AddIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const AddIcon: React.FC<AddIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = 'rgba(0, 0, 0, 0.96)' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M9.29492 10.8333V16.6667H10.9616V10.8333L16.7948 10.8334L16.7949 9.16669L10.9616 9.16666L10.9615 3.33334L9.29485 3.33336L9.29491 9.16665H3.46152V10.8333H9.29492Z" 
        fill={color}
      />
    </Svg>
  );
};
