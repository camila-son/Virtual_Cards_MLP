import React from 'react';
import Svg, { Circle } from 'react-native-svg';

interface RadioButtonProps {
  selected?: boolean;
  size?: number;
}

// Constants
const STROKE_WIDTH = 2;
const COLORS = {
  selected: '#820AD1',
  unselected: 'rgba(0, 0, 0, 0.24)',
};

export function RadioButton({ selected = false, size = 24 }: RadioButtonProps) {
  const outerRadius = size / 2;
  const innerRadius = size / 4;
  
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Circle
        cx={outerRadius}
        cy={outerRadius}
        r={outerRadius - STROKE_WIDTH / 2}
        stroke={selected ? COLORS.selected : COLORS.unselected}
        strokeWidth={STROKE_WIDTH}
        fill="none"
      />
      {selected && (
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          fill={COLORS.selected}
        />
      )}
    </Svg>
  );
}
