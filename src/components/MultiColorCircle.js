import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const MultiColorCircle = ({
  segments = [],
  children,
  SIZE = 130,
  STROKE_WIDTH = 30,
  GAP = 6,
}) => {
  const radius = (SIZE - STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <View style={[styles.container, { width: SIZE, height: SIZE }]}>
      <Svg width={SIZE} height={SIZE}>
        <G rotation="-90" origin={`${SIZE / 2}, ${SIZE / 2}`}>
          {segments.map((item, index) => {
            const segmentLength = (item.value / 100) * circumference;

            const dashLength = Math.max(segmentLength - GAP, 0);
            const dashArray = `${dashLength} ${circumference}`;

            const dashOffset = -offset;
            offset += segmentLength;

            return (
              <Circle
                key={index}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={radius}
                stroke={item.color}
                strokeWidth={STROKE_WIDTH}
                fill="none"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
              />
            );
          })}
        </G>
      </Svg>

      {/* Center Content */}
      <View style={styles.centerContent}>{children}</View>
    </View>
  );
};

export default MultiColorCircle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
